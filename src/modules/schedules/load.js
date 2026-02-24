import { scheduleFetchByDay } from "../../services/schedule-fecth-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js"; 

//seleciona o input de data
const selectedDate = document.getElementById("date");

export async function scheduleDays(){
    //Obtem a data do input
    const date = selectedDate.value;

    //Buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
   
    // Exibe os agendamento do dia 
    schedulesShow({ dailySchedules });

    //Renderiza horarios disponiveis 
    hoursLoad({ date, dailySchedules });
}
 