'use client';
import { useState } from 'react';

export function NovaTarefa({ onAdicionar }: { onAdicionar: (tarefa: string) => void }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (texto.trim()) {
      onAdicionar(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa..."
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Adicionar
      </button>
    </form>
  );
}