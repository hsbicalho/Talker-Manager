const fs = require('fs').promises;

async function getTalkers() {
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  return talkers;
}

module.exports = getTalkers;