import { render, screen } from '@testing-library/react';
import { NovaTarefaWrapper } from '@/components/NovaTarefaWrapper';

const tarefasMock = [
  { id: 1, title: "Tarefa Teste 1" },
  { id: 2, title: "Tarefa Teste 2" }
];

describe('Integração: NovaTarefaWrapper', () => {
  it('deve exibir a contagem inicial correta baseada nos dados do servidor', () => {
    render(<NovaTarefaWrapper tarefasIniciais={tarefasMock} />);
    
    const contador = screen.getByTestId('contador-total');
    expect(contador).toHaveTextContent('2');
  });

  it('deve renderizar a lista de tarefas iniciais', () => {
    render(<NovaTarefaWrapper tarefasIniciais={tarefasMock} />);
    
    expect(screen.getByText('Tarefa Teste 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa Teste 2')).toBeInTheDocument();
  });
});