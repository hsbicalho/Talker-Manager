const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./services/getTalkers');
const getTalkersID = require('./services/getTalkersID');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
app.get('/talker', getTalkers);

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkersID(id);
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

app.listen(PORT, () => {
  console.log('Online');
});
// abrindo pr
