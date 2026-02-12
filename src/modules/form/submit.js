import dayjs from "dayjs"

const form = document.querySelector('form') 
const selectDate = document.getElementById('date')

// Data Atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual no campo de data e define a data mínima para a data atual, evitando que o usuário selecione datas passadas
selectDate.value = inputToday
selectDate.min = inputToday

// Adiciona um ouvinte de evento para o envio do formulário
form.onsubmit = (event) => {
// Evita o comportamento padrão de recarregar a página
  event.preventDefault() 

    console.log('Formulário enviado!')

}