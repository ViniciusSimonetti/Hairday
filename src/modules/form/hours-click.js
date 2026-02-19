export function hoursClick () {

  const hours = document.querySelectorAll('.hour-available');
    
  hours.forEach((available) => {
      available.addEventListener("click", (selected) => {

        //remover a classe hour-selected de todas as li nao selecionadas
        hours.forEach((hours) => {
            hours.classList.remove("hour-selected");
        })
        //adicionar a classe hour-selected somente na li selecionada (cliclada)
           selected.target.classList.add("hour-selected");
    })  
 })
}    