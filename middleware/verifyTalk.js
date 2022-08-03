const noTalk = { message: 'O campo "talk" é obrigatório' };

function verifyTalk(req, res, next) {
  const { talk } = req.body;

  if (!talk) return res.status(400).json(noTalk);

  next();
}

module.exports = verifyTalk;