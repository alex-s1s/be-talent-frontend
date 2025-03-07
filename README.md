## Sobre o Projeto

- **Objetivo:**  
  Desenvolver uma tabela responsiva que exibe dados de uma API simulada (json-server).

- **Funcionalidades:**  
  - Exibição de colunas: imagem (thumb), nome, cargo, data de admissão e telefone.  
  - Pesquisa na tabela por nome, cargo e telefone.  
  - Formatação de datas e telefones no front-end.

- **Mockup:**  
  Baseado no projeto Figma disponibilizado, seguindo padrões visuais para desktop e mobile.

---

## Tecnologias Utilizadas

- **React + Vite:** Ambiente de desenvolvimento rápido e moderno para aplicações React.  
- **Sass/SCSS:** Utilizado pela sua modularidade, escalabilidade e facilidade na manutenção de estilos.  
- **Jest:** Framework de testes para garantir qualidade e confiabilidade do código.  
- **json-server:** Simula uma API REST para fornecer os dados da tabela.  
- **TypeScript:** (Diferencial) Tipagem estática para robustez e melhor manutenção do código.

---

## Arquitetura e Organização

- **Componentização:**  
  Cada parte da interface foi dividida em componentes React reutilizáveis.

- **Hooks Personalizados:**  
  Lógica de filtragem e outros comportamentos encapsulados em hooks para melhor organização.

- **Estilização:**  
  Utilização de Sass/SCSS para criar estilos, facilitando a escalabilidade.

- **Testes:**  
  Testes unitários e de integração foram implementados com Jest e React Testing Library para validar funcionalidades críticas.

---

## Como Executar

### Pré-requisitos

- Git  
- Node.js (v14 ou superior)  
- Yarn ou npm  
- json-server

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/alex-s1s/be-talent-frontend.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

### Iniciando a API Simulada

- Execute o json-server:

  ```bash
  npx json-server --watch db.json
  ```

  > **Observação:** Certifique-se de que o arquivo `db.json` esteja na raiz do projeto.

### Executando a Aplicação

- Inicie o projeto:

  ```bash
  npm run dev
  # ou
  yarn dev
  ```

- Acesse em: `http://localhost:3000` (ou a porta configurada pelo Vite).

### Executando os Testes

- Rode os testes com:

  ```bash
  npm run test
  # ou
  yarn test
  ```

---
