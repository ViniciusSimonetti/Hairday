import {scheduleDays } from '../schedules/load';

//Selecionar o input de data 
const selectDate = document.getElementById('date');

// Recarrega a lista de horarios quando o input de data for alterado
selectDate.onchange = () => scheduleDays(); {

}