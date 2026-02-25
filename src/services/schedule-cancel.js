import { apiConfig } from "./api-config.js" 

export async function scheduleCancel({ id }) {
  try {
    // Convertemos para String para a URL, mas se o json-server 
    // reclamar, garantimos que o ID capturado seja tratado.
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento cancelado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível cancelar o agendamento")
  }
}   