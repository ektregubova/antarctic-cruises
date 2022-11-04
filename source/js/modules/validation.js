const bookingForm = document.querySelector('[data-form]');
const formArray = Array.from(bookingForm);
const formButton = document.querySelector('[data-form-button]');
const validFormArray = [];

formArray.forEach((elem) => {
  if (elem.hasAttribute('data-reg')) {
    elem.setAttribute('is-valid', '0');
    validFormArray.push(elem);
  }
});

function inputHandler({target}) {
  if (target.hasAttribute('data-reg')) {
    inputCheck(target);
  }
}

function inputCheck(elem) {
  const inputValue = elem.value;
  const inputReg = elem.getAttribute('data-reg');
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    elem.setAttribute('is-valid', '1');
    elem.style.border = 'none';
  } else {
    elem.setAttribute('is-valid', '0');
    elem.style.border = '3px solid #ff1553';
  }
}

function buttonHandler(e) {
  const allValid = [];
  validFormArray.forEach((elem) => {
    allValid.push(elem.getAttribute('is-valid'));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return Boolean(Number(acc)) && Boolean(Number(current));
  });

  if (!isAllValid) {
    e.preventDefault();
  }
}

function validateForm() {
  bookingForm.addEventListener('input', inputHandler);
  formButton.addEventListener('click', buttonHandler);
}

export {validateForm};
