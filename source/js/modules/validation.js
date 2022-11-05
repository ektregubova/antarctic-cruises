const bookingForm = document.querySelector('[data-form]');
const formArray = Array.from(bookingForm);
const formButton = document.querySelector('[data-form-button]');
const validFormArray = [];

formArray.forEach((elem) => {
  if (elem.hasAttribute('data-reg')) {
    elem.setAttribute('is-valid', '');
    validFormArray.push(elem);
  }
});

function checkEmptyInputs() {
  formArray.forEach(function (input) {
    if (input.value === '') {
      input.setAttribute('is-valid', '0');
    }
  });
}

function inputCheck(elem) {
  const inputValue = elem.value;
  const inputReg = elem.getAttribute('data-reg');
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    elem.setAttribute('is-valid', '1');
  } else {
    elem.setAttribute('is-valid', '0');
  }
}

function inputHandler({target}) {
  if (target.hasAttribute('data-reg')) {
    inputCheck(target);
  }
}

function buttonHandler(evt) {
  checkEmptyInputs();
  const allValid = [];
  validFormArray.forEach((elem) => {
    allValid.push(elem.getAttribute('is-valid'));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return Boolean(Number(acc)) && Boolean(Number(current));
  });

  if (!isAllValid) {
    evt.preventDefault();
  }
}

function validateForm() {
  bookingForm.addEventListener('input', inputHandler);
  formButton.addEventListener('click', buttonHandler);
}

export {validateForm};
