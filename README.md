# ✂️ HairDay

Aplicação web para **agendamento de cortes de cabelo**, desenvolvida durante o curso da [Rocketseat](https://www.rocketseat.com.br/). Permite visualizar horários disponíveis, criar novos agendamentos e cancelar agendamentos existentes.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
- [Como Usar](#-como-usar)
- [Observações Importantes](#-observações-importantes)

---

## 📖 Sobre o Projeto

O **HairDay** é uma aplicação front-end que simula um sistema de agendamento para um salão de cabeleireiro. Os dados são persistidos localmente através do **json-server**, que simula uma API REST. A interface permite selecionar uma data, escolher um horário disponível, informar o nome do cliente e confirmar o agendamento — além de visualizar e cancelar agendamentos do dia.

---

## ✅ Funcionalidades

- 📅 Seleção de data para visualizar agendamentos do dia
- 🕐 Exibição de horários disponíveis divididos por período (Manhã, Tarde e Noite)
- ➕ Criação de novo agendamento com nome do cliente e horário
- ❌ Cancelamento de agendamento com confirmação
- 🔄 Atualização automática da lista após criar ou cancelar um agendamento

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | - | Estrutura da página |
| CSS3 | - | Estilização e layout |
| JavaScript (ES6+) | - | Lógica da aplicação |
| [Day.js](https://day.js.org/) | ^1.11.10 | Manipulação de datas |
| [json-server](https://github.com/typicode/json-server) | **0.17.4** | API REST simulada |
| [Webpack](https://webpack.js.org/) | ^5.89.0 | Bundler de módulos |
| [Babel](https://babeljs.io/) | ^7.23.7 | Transpilação de JS moderno |

---

## 📁 Estrutura do Projeto

```
hairday/
├── src/
│   ├── assets/             # Ícones e imagens (SVG)
│   ├── libs/
│   │   └── dayjs.js        # Configuração do Day.js
│   ├── modules/
│   │   ├── form/
│   │   │   ├── date-change.js   # Listener de mudança de data
│   │   │   ├── hours-click.js   # Seleção de horário
│   │   │   ├── hours-load.js    # Carregamento dos horários disponíveis
│   │   │   └── submit.js        # Envio do formulário de agendamento
│   │   ├── schedules/
│   │   │   ├── cancel.js        # Lógica de cancelamento
│   │   │   ├── load.js          # Carregamento dos agendamentos do dia
│   │   │   └── show.js          # Renderização dos agendamentos na tela
│   │   └── page-load.js         # Inicialização da página
│   ├── services/
│   │   ├── api-config.js        # URL base da API
│   │   ├── schedule-cancel.js   # Requisição DELETE
│   │   ├── schedule-fecth-by-day.js  # Requisição GET com filtro por dia
│   │   └── schedule-new.js      # Requisição POST
│   ├── styles/
│   │   ├── global.css      # Estilos globais
│   │   ├── form.css        # Estilos do formulário
│   │   └── schedule.css    # Estilos da lista de agendamentos
│   ├── utils/
│   │   └── opening-hours.js     # Horários de funcionamento do salão
│   └── main.js             # Entry point da aplicação
├── dist/                   # Build gerado pelo Webpack
├── server.json             # Banco de dados do json-server
├── webpack.config.js       # Configuração do Webpack
└── package.json
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- npm (já incluído com o Node.js)

---

## 🚀 Instalação e Execução

### 1. Clone ou baixe o repositório

```bash
git clone <url-do-repositorio>
cd hairday
```

### 2. Instale as dependências

```bash
npm install
```

> ⚠️ **Importante:** O projeto requer a versão **0.17.4** do json-server. Se necessário, instale manualmente:
> ```bash
> npm install json-server@0.17.4
> ```
> Versões superiores (v1+) ignoram o `id` customizado enviado no POST, causando erro **404** ao tentar cancelar agendamentos.

### 3. Inicie o servidor da API (json-server)

```bash
npm run server
```

A API ficará disponível em: `http://localhost:4000`

### 4. Inicie o servidor de desenvolvimento (em outro terminal)

```bash
npm run dev
```

A aplicação ficará disponível em: `http://localhost:8080` (ou porta indicada pelo Webpack)

---

## 📌 Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `npm run dev` | Inicia o Webpack Dev Server com hot reload |
| `build` | `npm run build` | Gera o bundle de produção na pasta `/dist` |
| `server` | `npm run server` | Inicia o json-server na porta 4000 |

---

## 📖 Como Usar

1. Com a aplicação rodando, selecione uma **data** no campo de data
2. Escolha um **horário** disponível na grade de horários
3. Informe o **nome do cliente**
4. Clique em **Agendar** para confirmar
5. Para cancelar um agendamento, clique no **ícone de X** ao lado do agendamento desejado e confirme

Os agendamentos são exibidos divididos por período:
- 🌅 **Manhã** — horários das 9h às 11h
- ☀️ **Tarde** — horários das 13h às 18h
- 🌙 **Noite** — horários das 19h às 21h

---

## ⚠️ Observações Importantes

- O **json-server deve estar rodando** antes de usar a aplicação, caso contrário nenhuma operação de agendamento funcionará
- Os horários de funcionamento do salão ficam configurados em `src/utils/opening-hours.js` — basta editar o array para alterar os horários disponíveis
- O arquivo `server.json` na raiz do projeto é o banco de dados local onde todos os agendamentos ficam armazenados

---

## 👨‍💻 Autor

Desenvolvido por **Vinicius Simonetti** durante o curso da [Rocketseat](https://www.rocketseat.com.br/).
