const noWatched = { message: 'O campo "watchedAt" é obrigatório' };
const invalidWatched = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };

function verifyTalkWatched(req, res, next) {
    const { talk: { watchedAt } } = req.body;
    const regex = /\d{2}\/\d{2}\/\d{4}/g;
    const validDate = regex.test(watchedAt);
    if (!watchedAt) return res.status(400).json(noWatched);
    if (!validDate) return res.status(400).json(invalidWatched);
    next();
  }
  
  module.exports = verifyTalkWatched;