# Party Time Application

## Descrição

Esta é uma aplicação web para organização de festas, composta por dois projetos distintos: um frontend desenvolvido em React e um backend desenvolvido em Node.js. 
A aplicação permite que os usuários organizem e gerenciem eventos, incluindo detalhes como Serviços, orçamento, e muito mais.

---

## Funcionalidades Implementadas

### Frontend

- **Cadastro de Festas**: Formulários para registro de festas.
- **Dashboard do Usuário**: Visualização geral dos eventos organizados pelo usuário.
- **Gestão de Eventos**: Criação, atualização e exclusão de eventos.
- **Serviços do Evento**: Gestão de Serviços relacionadas a cada evento.
- **Orçamento do Evento**: Controle de despesas e orçamento do evento.

### Backend

- **CRUD Completo**: Criação, leitura, atualização e exclusão de registros para múltiplas entidades (eventos, convidados, Serviços, despesas).
- **Validações de Dados**: Validações de dados personalizadas para garantir a integridade dos dados.
- **Documentação da API**: Documentação da API gerada automaticamente usando Swagger.

---

## Endpoints Disponíveis (Backend)


### Eventos

- **`GET /api/parties`**: Lista todos os eventos do usuário.
- **`GET /api/parties/{id}`**: Detalhes de um evento específico.
- **`POST /api/parties`**: Cria um novo evento.
- **`PUT /api/parties/{id}`**: Atualiza um evento específico.
- **`DELETE /api/parties/{id}`**: Exclui um evento específico.


### Serviços

- **`GET /api/parties/{partId}/services`**: Lista todas as Serviços de um evento.
- **`POST /api/parties/{partId}/services`**: Adiciona uma nova serviço a um evento.
- **`PUT /api/parties/{partId}/services/{serviceId}`**: Atualiza uma serviço específica de um evento.
- **`DELETE /api/parties/{partId}/services/{serviceId}`**: Remove uma serviço específica de um evento.


---

## Ferramentas Utilizadas

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Biblioteca para gerenciamento de estado da aplicação.
- **React Router**: Biblioteca para roteamento no React.
- **Axios**: Cliente HTTP para fazer requisições à API.

### Backend

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados.
- **Mongoose**: Biblioteca para modelagem de dados do MongoDB em Node.js.
- **Swagger**: Ferramenta para gerar documentação interativa da API.

---

## Instalação

### Frontend

1. Clone o repositório do frontend:
   ```bash
   git clone https://github.com/Matlima/ApplicationPartyTime
   cd ApplicationPartyTime
   cd frontend

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute a aplicação:
   ```bash
   npm start
   ```

### Backend

1. Clone o repositório do frontend:
   ```bash
   git clone https://github.com/Matlima/ApplicationPartyTime
   cd ApplicationPartyTime
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   
3. Execute a aplicação:
   ```bash
   npm start
   ```

## Uso
Após iniciar o servidor, a API estará disponível em http://127.0.0.1:8000/. Utilize ferramentas como Postman ou cURL para interagir com os endpoints da API.

## Contribuição
- Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença
- Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

***

Feito com ❤️ por Matheus Lima
