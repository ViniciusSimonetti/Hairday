import dayjs from "dayjs";

import {openingHours} from "../../utils/opening-hours.js"

const hours = document.getElementById("hours");

export function hoursLoad({ date }){
    const opening = openingHours.map((hour) => {
        
        //recuperar somente a hora
        const [scheduleHours] = hour.split(":");

        //Adiciona a hora na data e vereficar se esta no passado 
        const isHourpast = dayjs(date).add(scheduleHours, "hour").isAfter(dayjs());

        return { 
            hour,
            available: isHourpast,
        }
    })
    //redenrizar os horarios
    opening.forEach(({hour, available}) => {
    const li = document.createElement("li");

    // adicionar as classes de acordo com a disponibilidade
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;
    hours.appendChild(li);

  })
}