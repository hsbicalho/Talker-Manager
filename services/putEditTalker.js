const { writeFile, readFile } = require('fs').promises;

async function putEditTalkers(id, name, age, talk) {
  const talkers = await readFile('./talker.json', 'utf-8')
    .then((data) => JSON.parse(data));
    const editTalker = { name, age, id: Number(id), talk };
    const newTalkers = talkers.map((talker) => {
      if (talker.id === Number(id)) return editTalker;
      return talker;
    });
  await writeFile('talker.json', JSON.stringify(newTalkers));
  return editTalker;
  }

module.exports = putEditTalkers;