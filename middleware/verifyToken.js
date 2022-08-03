const noToken = { message: 'Token não encontrado' };
const invalidToken = { message: 'Token inválido' };

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json(noToken);
  if (token.length < 16) return res.status(401).json(invalidToken);
  next();
}

module.exports = verifyToken;