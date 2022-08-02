const fs = require('fs').promises;

async function getTalkers(_req, res) {
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  if (talkers.length === 0) res.status(200).json(JSON.parse([]));

  return res.json(JSON.parse(talkers));
}

module.exports = getTalkers;