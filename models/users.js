const fetch = require('node-fetch');
const combineData = require('../utils/combineData');

module.exports = async url => {
  try {
    const { user, book } = await fetch(url)
      .then(res => res.json());
    
    return combineData(Object.values(user), Object.values(book), 'uid', 'books');
  } catch (e) {
    throw new Error('Не удалось получить данные');
  }
};