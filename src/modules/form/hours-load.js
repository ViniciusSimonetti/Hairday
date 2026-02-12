import { openingHours } from "../../utils/opening-hours.js"

//Renderizar os horarios disponiveis.
export function hoursLoad() {
    const opening = openingHours.map((hour) => {
        console.log(hour)
    })
}