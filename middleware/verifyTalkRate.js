const noRate = { message: 'O campo "rate" é obrigatório' };
const invalidRate = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };

function verifyTalkRate(req, res, next) {
    const { talk: { rate } } = req.body;
    const validRate = [1, 2, 3, 4, 5];
    if (rate === undefined) return res.status(400).json(noRate);
    if (!validRate.some((numb) => rate === numb)) {
      return res.status(400).json(invalidRate);
    }
    next();
  }
  
  module.exports = verifyTalkRate;
