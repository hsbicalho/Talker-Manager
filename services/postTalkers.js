const { writeFile, readFile } = require('fs').promises;

async function postTalkers(name, age, talk) {
    const talkers = await readFile('./talker.json', 'utf-8')
    .then((data) => JSON.parse(data));
    const newTalker = {
        id: talkers.length + 1,
        name,
        age,
        talk,
    };
    await writeFile('talker.json', JSON.stringify([...talkers, newTalker]));
    return newTalker;
  }

module.exports = postTalkers;