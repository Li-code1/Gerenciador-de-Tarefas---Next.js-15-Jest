# 🚀 Gerenciador de Tarefas - Next.js 15

Projeto desenvolvido como desafio técnico para a disciplina de Desenvolvimento Web. A aplicação é um ecossistema completo de gestão de tarefas (To-Do List) com foco em performance, acessibilidade e qualidade de código.

## 🔗 Links Oficiais
- **Deploy Online:** [https://gerenciador-de-tarefas-next-js-15-j-topaz.vercel.app/
- 
- **Repositório GitHub:** [https://github.com/Li-code1/Gerenciador-de-Tarefas---Next.js-15-Jest](https://github.com/Li-code1/Gerenciador-de-Tarefas---Next.js-15-Jest)

---

## ✨ Funcionalidades
- **Adicionar Tarefas:** Interface intuitiva para criação de novas tarefas.
- **Listagem Dinâmica:** Visualização clara das tarefas pendentes e concluídas.
- **Toggle de Status:** Marcar tarefas como concluídas com feedback visual imediato.
- **Remoção:** Exclusão individual de tarefas da lista.
- **Contador Inteligente:** Exibição em tempo real do total de tarefas e do progresso de conclusão.
- **Design Responsivo:** Adaptado para dispositivos móveis e desktop usando Tailwind CSS 4.

---

## 🛠️ Tecnologias e Decisões Técnicas
- **Next.js 15 (App Router):** Escolhido por ser o padrão mais moderno de roteamento e performance.
- **Tailwind CSS 4:** Utilização da versão mais recente do framework para estilização rápida e eficiente.
- **Custom Hook (`useContadorDeTarefas`):** Criado para isolar a lógica de negócio dos componentes de interface, facilitando os testes unitários.
- **Lucide React:** Conjunto de ícones leves para melhorar a experiência do usuário (UX).

---

## 🧪 Qualidade de Código (Testes)
A robustez do projeto é garantida por testes automatizados utilizando **Jest** e **React Testing Library**.

**Cenários Testados:**
1.  **Hooks:** Validação da lógica do contador de tarefas.
2.  **Componentes:** Verificação da renderização da página principal e do formulário de novas tarefas.
3.  **Interação:** Teste de fluxo de adição de novas tarefas à lista.

**Para rodar os testes:**
```bash
npm test

```

---

## 📂 Estrutura de Pastas

```text
src/
 ├── app/             # Rotas, Layout e CSS Global
 ├── components/      # Componentes de UI (NovaTarefa, TarefaItem, etc)
 ├── hooks/           # Lógica de negócio isolada (Custom Hooks)
 └── types/           # Definições de tipos TypeScript

```

---

## 🚀 Como Executar Localmente

1. Clone o repositório: `git clone https://github.com/Li-code1/Gerenciador-de-Tarefas---Next.js-15-Jest.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm run dev`

```
## 🚀 Automação e CI/CD

Este projeto utiliza uma pipeline de **CI/CD** (Continuous Integration e Continuous Deployment) via **GitHub Actions** para garantir a qualidade do código e a entrega contínua.

### O que a Pipeline faz:
1.  **Instalação:** Configura o ambiente Node.js e instala todas as dependências de forma limpa.
2.  **Linting:** Analisa o código em busca de erros de padrão e boas práticas.
3.  **Testes Unitários:** Executa a suíte de testes com **Jest** e **React Testing Library**. O deploy só acontece se todos os testes passarem.
4.  **Build:** Gera a versão de produção do Next.js.
5.  **Deploy Automatizado:** Envia o código aprovado automaticamente para a **Vercel**.

### Status do Projeto:
![CI/CD Status](https://github.com/Li-code1/Gerenciador-de-Tarefas---Next.js-15-Jest/actions/workflows/main.yml/badge.svg)

🔗 **Link do Deploy:** [Acesse o Gerenciador de Tarefas](https://gerenciador-de-tarefas-next-js-15-jest-pqpq-hfzojb4w4.vercel.app)

