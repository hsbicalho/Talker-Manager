const noAge = { message: 'O campo "age" é obrigatório' };
const invalidAge = { message: 'A pessoa palestrante deve ser maior de idade' };

function verifyAge(req, res, next) {
  const { age } = req.body;
  if (!age) return res.status(400).json(noAge);
  if (age < 18) return res.status(400).json(invalidAge);
  next();
}

module.exports = verifyAge;