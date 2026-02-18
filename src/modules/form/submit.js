import dayjs from "dayjs" 


const form = document.querySelector('form');
const selectDate = document.getElementById('date');

//data atual para o input date
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual 
selectDate.value = inputToday;

//define a data minima como sendo a atual para evitar que o usuário selecione uma data passada
selectDate.min = inputToday;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Formulário enviado!');
})