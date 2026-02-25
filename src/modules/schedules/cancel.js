import { scheduleDays } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js" 

const periods = document.querySelectorAll(".period")


//Gerando um evento de click para cada lista
periods.forEach((periods) => {
    //captura o evento de clique na lista 
    periods.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a li pai do elemento clicado
            const item = event.target.closest("li")

            //Pega o ID do agendamento para remover 
            const { id } = item.dataset
         
            //Confirmar que o ID foi selecionado 
            if(id) {
                //confirma se o usuario quer cancelar o agendamento 
                const isConfirm = confirm(
                "Tem Certeza que deseja cancelar o agendamento? "
                )

            if(isConfirm) {
                //faz a requisicao na API para cancelar 
                await scheduleCancel( { id })

                //Recarrega os agendamentos 
                scheduleDays()
            }
        }
     }
  })
})