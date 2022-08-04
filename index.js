const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./services/getTalkers');
const getTalkersID = require('./services/getTalkersID');
const loginToken = require('./services/loginToken');
const postTalkers = require('./services/postTalkers');
const putEditTalkers = require('./services/putEditTalker');
const {
  verifyAge,
  verifyEmail,
  verifyName,
  verifyPassword,
  verifyTalk,
  verifyTalkRate,
  verifyTalkWatched,
  verifyToken,
} = require('./middleware');
/* const verifyPassword = require('./middleware/verifyPassword');
const verifyName = require('./middleware/verifyName');
const verifyAge = require('./middleware/verifyAge'); */
const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// Endpoint /talker
app.get('/talker', async (_req, res) => {
  const talker = await getTalkers();
  if (talker.length === 0) return res.status(200).json(JSON.parse([]));
  return res.json(JSON.parse(talker));
});

// Endpoint /talker/:id
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkersID(id);
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

// Endpoint post /login 
app.post('/login', verifyEmail, verifyPassword, (_req, res) => {
  const newToken = {
    token: loginToken(),
  };
  return res.status(200).json(newToken);
});
// Endpoint post /talker
app.post('/talker',
verifyToken,
verifyName,
verifyAge,
verifyTalk,
verifyTalkRate,
verifyTalkWatched,
async (req, res) => {
  const { name, age, talk } = req.body;
  const newTalker = await postTalkers(name, age, talk);
  return res.status(201).json(newTalker);
});

app.put('/talker/:id',
verifyToken,
verifyName,
verifyAge,
verifyTalk,
verifyTalkRate,
verifyTalkWatched,
async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkerPut = await putEditTalkers(id, name, age, talk);
  res.status(200).json(talkerPut);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
// abrindo pr
