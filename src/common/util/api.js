const Api = (() => {
  const key = '71Ni8CRy4fTuVbB6tG23';

  async function getScores() {
    try {
      const scores = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            mode: 'cors',
          },
        },
      );
      console.log('here')
      console.log(scores);
      return scores.json();
    } catch (error) {
      console.log('her2e')
      console.log(error);
      return error.json();
    }
  }

  async function setScores(name, score) {
    try {
      const result = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: name,
            score,
          }),
        },
      );
      return result.json();
    } catch (error) {
      return error.json();
    }
  }

  return { getScores, setScores };
})();

export default Api;