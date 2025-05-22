# 🎧 Projeto App Flow

Bem-vindo ao **Projeto App Flow**, uma aplicação simples para gerenciar podcasts. Este projeto foi desenvolvido com **Node.js**, **TypeScript**, HTML, CSS e JavaScript puro.

## 📜 Descrição do Projeto

Este projeto é uma plataforma simples para criar e listar podcasts. Ele inclui um **backend** com rotas RESTful e um **frontend** básico para interagir com a API.

---

## 🚀 Funcionalidades

- **API Backend**:
  - Criar novos podcasts (título e descrição).
  - Listar todos os podcasts existentes.
- **Frontend**:
  - Interface simples para adicionar e visualizar podcasts.
  - Atualização dinâmica da lista de podcasts.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**: Plataforma para execução do código JavaScript no servidor.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **HTTP Module**: Módulo nativo do Node.js para criar o servidor.

### Frontend
- **HTML5**: Estrutura da interface.
- **CSS3**: Estilização básica.
- **JavaScript**: Consome a API e atualiza a interface.

---

## ⚙️ Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/EnzoVieira3012/projeto-app-flow.git
   cd projeto-app-flow
Instale as dependências:

bash
Copy
npm install
Inicie o servidor:

bash
Copy
npm run dev
Acesse o frontend no navegador:

URL: http://localhost:3000Opens in a new window; external.
📖 Endpoints da API
1. Criar um Podcast
Método: POST
URL: /api/podcasts
Body (JSON):
json
Copy
{
  "title": "Título do Podcast",
  "description": "Descrição do Podcast"
}
Resposta:
json
Copy
{
  "id": 1,
  "title": "Título do Podcast",
  "description": "Descrição do Podcast"
}
2. Listar todos os Podcasts
Método: GET
URL: /api/podcasts
Resposta:
json
Copy
[
  {
    "id": 1,
    "title": "Título do Podcast",
    "description": "Descrição do Podcast"
  }
]
📂 Estrutura do Projeto
plaintext
Copy
projeto-app-flow/
├── src/
│   ├── podcastManager.ts    # Lógica do backend para gerenciar podcasts
│   ├── server.ts            # Servidor HTTP
├── public/                  # Arquivos do frontend
│   ├── index.html           # Página inicial
│   ├── style.css            # Estilo da página
│   ├── script.js            # Lógica do frontend
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Configuração do projeto Node.js
├── tsconfig.json            # Configuração do TypeScript
📋 Melhorias Futuras
Aqui estão algumas ideias de melhorias que podem ser implementadas no futuro:

Adicionar funcionalidade de editar e excluir podcasts.
Usar um banco de dados (como SQLite ou MongoDB) para persistir os dados.
Implementar autenticação de usuários.
Criar uma interface mais bonita usando Bootstrap ou Tailwind CSS.
Adicionar upload de imagem para cada podcast.
Publicar o projeto em produção (Heroku, Vercel, etc.).
🧑‍💻 Autor
Projeto desenvolvido por EnzoVieira3012. 😊