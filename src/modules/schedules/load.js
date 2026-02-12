//Buscar na API os agendamentos para carregar do lado direito da tela
//Os horarios disponíveis (horarios futuros + nao agendado) do lado esquerdo do formulario
import { hoursLoad } from "../form/hours-load.js"; 

export function scheduleDay(){
    //Renderizar os horarios disponiveis.
    hoursLoad()
}