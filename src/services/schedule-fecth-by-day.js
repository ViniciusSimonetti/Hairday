import { apiConfig } from "./api-config.js";    

export async function scheduleFetchByDay({date}) {
    try {
        //Fazendo a requisição para a API para buscar os agendamento do dia selecionado
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        // Convertendo a resposta para JSON
        const data = await response.json();

        //Filtra os agendamentos pelo dia selecionado 
        const dailySchedules = data.filter(schedule => 
        dayjs(schedule.when).isSame(date, 'day')
        )

        return dailySchedules;
        
    } catch (error) {
        console.log(error);
        alert('Não foi possível carregar os agendamento do dia selecionado');
    }
}
