const noName = { message: 'O campo "name" é obrigatório' };
const invalidName = { message: 'O "name" deve ter pelo menos 3 caracteres' };

function verifyName(req, res, next) {
  const { name } = req.body;
  if (!name) return res.status(400).json(noName);
  if (name.length < 3) return res.status(400).json(invalidName);
  next();
}

module.exports = verifyName;