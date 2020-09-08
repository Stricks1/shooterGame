const FormScore = (() => {
  function createElements() {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('id', 'enterName');
    inputEl.setAttribute('maxlength', '7');
    inputEl.setAttribute('placeholder', 'Enter your name...');
    inputEl.setAttribute('style', 'border: 1px solid;');
    inputEl.required = true;
    return inputEl;
  }

  return { createElements };
})();

export default FormScore;