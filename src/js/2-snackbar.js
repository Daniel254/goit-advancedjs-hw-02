import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const promise = new Promise((resolve, reject) => {
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(message => iziToast.success({ message }))
    .catch(message => iziToast.error({ message }));
});
