import dayjs from "dayjs";
import {openingHours} from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad ({ date , dailySchedules }) {
    //Limpar a lista de horarios 
    hours.innerHTML = "";

    //Obtem a lista de todos os horarios ocupados 
    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("H:mm") 
    )

    const opening = openingHours.map((hour) => {
        //recuperar somente a hora
        const [scheduleHours] = hour.split(":");

        //Adiciona a hora na data e vereficar se esta no passado 
        const isHourpast = dayjs(date).add(scheduleHours, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourpast;

        return { 
            hour,
            available
        }
    })

    //redenrizar os horarios
    opening.forEach (({hour, available}) => {
    const li = document.createElement("li");

    // adicionar as classes de acordo com a disponibilidade
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    // Adicionar o header de acordo com o horario
    if(hour === "9:00"){
        hourHeaderAdd("Manhã");

    } else if(hour === "13:00"){
        hourHeaderAdd("Tarde");

    }
    else if(hour === "18:00"){       
        hourHeaderAdd("Noite");

    }

    hours.append(li);
  })

  //adicione o evento de click nos horarios disponiveis
  hoursClick() 
}


function hourHeaderAdd (title){
    const header = document.createElement("li")
    header.classList.add("hour-period");
    header.textContent = title;


    hours.append(header);
}