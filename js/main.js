const numberId = document.querySelector('#number-id');
const adviceText = document.querySelector('#advice-text');
const btnRandomAdvice = document.querySelector('#btn-random');
const iconRandom = document.querySelector('#icon-dice');

const getResponseApi = async() => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');

    if (!response.ok) {
      console.log('Error');
    } else {
      const data = await response.json();
      
      setTimeout(() => {
        numberId.innerHTML = `Advice #${data.slip.id}`;
        adviceText.textContent = data.slip.advice;
      }, 500)
    }
  } catch(e) {
    console.log(e.message);
  }
}

btnRandomAdvice.addEventListener('click', getResponseApi);


