const { writeFile, readFile } = require('fs').promises;

async function deleteTalkers(id) {
  const talkers = await readFile('./talker.json', 'utf-8')
    .then((data) => JSON.parse(data));
  talkers.forEach((talker, index) => {
    if (talker.id === Number(id)) talkers.splice(index, 1);
  });
  await writeFile('talker.json', JSON.stringify(talkers));
}

module.exports = deleteTalkers;