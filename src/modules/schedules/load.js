import { hoursLoad } from "../form/hours-load.js"; 

//seleciona o input de data
const selectedDate = document.getElementById("date");

export function scheduleDays(){
    //Obtem a data do input
    const date = selectedDate.value;

    //Renderiza horarios disponiveis 
    hoursLoad({ date });
}
