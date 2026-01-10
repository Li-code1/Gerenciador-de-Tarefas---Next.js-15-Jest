import { NovaTarefaWrapper } from "@/components/NovaTarefaWrapper";

// Simulação de uma "API" de tarefas
async function getTarefas() {
  // Simulando um delay de rede
  return Promise.resolve([
    { id: 1, title: "Aprender Next.js 15" },
    { id: 2, title: "Configurar Jest e Testing Library" },
  ]);
}

export default async function Page() {
  const tarefasIniciais = await getTarefas();

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-black text-slate-800">Gerenciador de Tarefas</h1>
        <p className="text-slate-500">Next.js 15 + Unit Testing Practice</p>
      </header>

      {/* Passamos os dados do Server para um Client Component 
         que gerenciará a interatividade da lista 
      */}
      <NovaTarefaWrapper tarefasIniciais={tarefasIniciais} />
    </div>
  );
}