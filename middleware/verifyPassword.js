const noPassword = { message: 'O campo "password" é obrigatório' };
const verPassword = { message: 'O "password" deve ter pelo menos 6 caracteres' };

function verifyPassword(req, res, next) {
  const { password } = req.body;
  if (!password) return res.status(400).json(noPassword);
  if (password.length < 6) return res.status(400).json(verPassword);
  next();
}

module.exports = verifyPassword;