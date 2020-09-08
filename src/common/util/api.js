const Api = (() => {
  const key = '71Ni8CRy4fTuVbB6tG23';

  const urlRequest = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores`;
  const getScores = () => new Promise((resolve, reject) => {
    fetch(urlRequest)
      .then(response => response.json()
        .then((json) => {
          resolve(json.result);
        })).catch((e) => {
        reject(e);
      });
  });

  const setScores = (name, score) => {
    const jsonObj = {
      user: name,
      score,
    };
    return fetch(urlRequest, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonObj),
    }).then(result => result.json());
  };

  return { getScores, setScores };
})();

export default Api;