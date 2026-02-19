import dayjs from "dayjs" 

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectDate = document.getElementById('date');


//data atual para o input date
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e define a data minima como sendo a atual para evitar que o usuário selecione uma data passada
selectDate.value = inputToday;
selectDate.min = inputToday;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  try {
    //recuperando o nome do cliente 
    const name = clientName.value.trim();
    
    if (!name) {
    return alert("Informe o nome do cliente.");
    }
    
    //recuperando o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")
    
    //validando se o cliente selecionou um horário
    if (!hourSelected) {
      return alert("Selecione um horário para o agendamento.");
    }

    // Recuperar somente a hora 
    const [hour] = hourSelected.innerText.split(':');

    //Inserir a hora na data 
    const when= dayjs(selectDate.value).add(hour, 'hour')
   
    //Gera um ID aleatório para o agendamento
    const id = new Date().getTime();

    console.log({
      id,
      name,
      when: when.format('DD/MM/YYYY HH:mm')
    })

  } catch (error) {
    alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    console.log(error);
  }


})