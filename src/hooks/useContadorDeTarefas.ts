import { useState } from 'react';

export function useContadorDeTarefas(initialCount = 0) {
  const [total, setTotal] = useState(initialCount);
  const incrementar = () => setTotal(prev => prev + 1);
  return { total, incrementar };
}