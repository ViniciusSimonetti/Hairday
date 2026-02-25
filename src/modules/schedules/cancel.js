const periods = document.querySelectorAll(".period")


//Gerando um evento de click para cada lista

periods.forEach((periods) => {
    //captura o evento de clique na lista 
    periods.addEventListener("click", (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset
         

            if(id) {
                const isConfirm = confirm 
                ("Tem Certeza que deseja cancelar o agendamento? ")
            

            if(isConfirm){
                console.log("Remover")
            }
        }
        }
    })
})