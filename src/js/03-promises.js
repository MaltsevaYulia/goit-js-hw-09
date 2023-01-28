import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('input', onInputChange);
refs.form.addEventListener('submit', onSubmit);

const formData = {};
function onInputChange(evt) {
  formData[evt.target.name] = evt.target.value;
  // console.log(formData);
}

function onSubmit(evt) {
  evt.preventDefault();
  let { delay, step, amount } = formData;

  let position = 0;

  delay = Number(delay);

  let timerId = setTimeout(function restart() {
    if (position === Number(amount)) {
      return;
    }
    position += 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += Number(step);

    timerId = setTimeout(restart, step);
  }, delay);
}

function createPromise(position, delay) {
  const promis = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    const resalt = {
      position,
      delay,
    };
    if (shouldResolve) {
      resolve(resalt);
    } else {
      reject(resalt);
    }
  }, delay);

  return promis;
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
