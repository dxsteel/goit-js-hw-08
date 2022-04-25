import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", formSub);
form.addEventListener('input', throttle(formInput, 500));

function formSub(evt) {
    evt.preventDefault();
    console.log({
        email: form.email.value,
        message: form.message.value,
    });
    evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY)
}

function formInput() {
    const data = {
        email: form.email.value,
        message: form.message.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function populateFeedback() {
    const saveForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const parseForm = JSON.parse(saveForm);

    if (saveForm) {
        form.email.value = parseForm.email;
        form.message.value = parseForm.message

    }
}
populateFeedback()