'use client';

import { useState } from 'react';
import { NovaTarefa } from './NovaTarefa';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

interface Tarefa {
  id: number;
  title: string;
  completed: boolean;
}

export function NovaTarefaWrapper({ tarefasIniciais }: { readonly tarefasIniciais: any[] }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(
    tarefasIniciais.map(t => ({ 
      id: t.id, 
      title: t.title, 
      completed: t.completed || false 
    }))
  );
  
  const { total } = useContadorDeTarefas(tarefas.length);

  const adicionarTarefa = (titulo: string) => {
    const nova: Tarefa = { id: Date.now(), title: titulo, completed: false };
    setTarefas([...tarefas, nova]);
  };

  const removerTarefa = (id: number) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  const alternarConclusao = (id: number) => {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const concluidas = tarefas.filter(t => t.completed).length;

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto min-h-screen bg-slate-50">
      
      {/* Dashboard de Status */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border-2 border-slate-300 text-center shadow-sm">
          <p className="text-[10px] font-bold text-slate-500 uppercase">Total</p>
          {/* IMPORTANTE: O teste procura este data-testid */}
          <p className="text-2xl font-black text-blue-700" data-testid="contador-total">
            {tarefas.length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-amber-300 text-center shadow-sm">
          <p className="text-[10px] font-bold text-slate-500 uppercase">Pendentes</p>
          <p className="text-2xl font-black text-amber-600">{tarefas.length - concluidas}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-emerald-300 text-center shadow-sm">
          <p className="text-[10px] font-bold text-slate-500 uppercase">Prontas</p>
          <p className="text-2xl font-black text-emerald-600">{concluidas}</p>
        </div>
      </div>

      <div className="bg-white p-2 rounded-xl border-2 border-slate-300 shadow-sm">
        <NovaTarefa onAdicionar={adicionarTarefa} />
      </div>

      {/* IMPORTANTE: O teste pode procurar por esta lista */}
      <ul className="space-y-3" data-testid="lista-tarefas">
        {tarefas.map((t) => (
          <li 
            key={t.id} 
            data-testid="item-tarefa"
            className={`p-4 bg-white border-2 rounded-xl flex justify-between items-center shadow-sm ${
              t.completed ? 'border-emerald-500 bg-emerald-50' : 'border-slate-300'
            }`}
          >
            <div 
              className="flex items-center gap-4 flex-1 cursor-pointer" 
              onClick={() => alternarConclusao(t.id)}
            >
              <div 
                style={{ minWidth: '28px', minHeight: '28px' }}
                className={`w-7 h-7 rounded-full border-4 flex items-center justify-center ${
                  t.completed ? 'bg-emerald-600 border-emerald-700' : 'bg-white border-blue-600' 
                }`}
              >
                {t.completed && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              
              <span className={`text-lg font-bold ${t.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                {t.title}
              </span>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); removerTarefa(t.id); }}
              data-testid="btn-excluir"
              className="ml-4 p-2 bg-red-100 text-red-600 rounded-lg border-2 border-red-300 hover:bg-red-600 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}