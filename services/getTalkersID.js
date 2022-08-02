const fs = require('fs').promises;

async function getTalkersID(id) {
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  const findTalker = JSON.parse(talkers).find((talker) => talker.id === Number(id));
  return findTalker;
}

module.exports = getTalkersID;