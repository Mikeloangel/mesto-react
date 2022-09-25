import FormValidator from './FormValidator';

export default function enableFormValidation(settings) {
  const formValidators = [];

  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach(form => {
    const formValidator = new FormValidator(settings, form);
    formValidator.enableValidation();
    formValidators[form.name] = formValidator;
  });

  return formValidators;
}
