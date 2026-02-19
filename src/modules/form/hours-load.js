import dayjs from "dayjs";
import {openingHours} from "../../utils/opening-hours.js"

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
}