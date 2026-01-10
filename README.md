# 📝 Gerenciador de Tarefas - Next.js 15 & Jest

Este é um projeto de Gerenciador de Tarefas (To-Do List) desenvolvido para demonstrar habilidades em **React**, **Next.js 15**, **Tailwind CSS** e **Testes Unitários com Jest**.

# 📝 Gerenciador de Tarefas - Next.js 15 & Jest

![Demonstração do Projeto](.public/screenshot.png.JPG)

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Criação dinâmica de novos itens.
- **Concluir Tarefas:** Marcar itens como feitos com efeito visual de risco e checkbox.
- **Excluir Tarefas:** Remoção de itens da lista.
- **Dashboard de Status:** Contador automático de tarefas Totais, Pendentes e Concluídas.
- **Design Responsivo:** Interface moderna construída com Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Testes:** Jest e React Testing Library

## 📦 Como rodar o projeto

### 1. Instalação
Clone o repositório e instale as dependências:
```bash
npm install

```

### 2. Execução (Desenvolvimento)

Como este projeto foi desenvolvido em um ambiente com restrições de instruções de CPU (popcnt), utilize o comando abaixo para garantir o funcionamento correto sem o motor Turbo:

```bash
set NEXT_TURBO=0 && npx next dev -p 7777

```

Acesse: [http://localhost:7777](https://www.google.com/search?q=http://localhost:7777)

### 3. Rodar Testes

Para validar a lógica dos componentes e o hook do contador:

```bash
npm test

```

## 🧪 Estrutura de Testes

O projeto foca em garantir que:

* O contador de tarefas inicia com o valor correto.
* Novas tarefas são adicionadas à lista.
* A exclusão de tarefas atualiza o estado corretamente.

...
## ⚠️ Notas de Desenvolvimento

Caso ocorra o erro `EADDRINUSE` ao tentar rodar na porta 7777, certifique-se de encerrar processos antigos do Node com o comando `taskkill /f /im node.exe`.

```

---
