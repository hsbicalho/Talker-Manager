const noEmail = { message: 'O campo "email" é obrigatório' };
const invalidEmail = { message: 'O "email" deve ter o formato "email@email.com"' };

function verifyEmail(req, res, next) {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const verEmail = regex.test(email);

  if (!email) return res.status(400).json(noEmail);
  if (!verEmail) return res.status(400).json(invalidEmail);
  next();
}

module.exports = verifyEmail;