const FormScore = (() => {
  function createElements() {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('id', 'enterName');
    inputEl.setAttribute('placeholder', 'Enter your name...');
    inputEl.required = true;
    return inputEl;
  }

  return { createElements };
})();

export default FormScore;