import { render, screen, fireEvent } from '@testing-library/react';
import { NovaTarefa } from './NovaTarefa';

describe('NovaTarefa Component', () => {
  it('deve chamar onAdicionar e limpar o input após a submissão', () => {
    const mockAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockAdicionar} />);

    const input = screen.getByPlaceholderText('Nova tarefa...');
    const botao = screen.getByRole('button', { name: /adicionar/i });

    fireEvent.change(input, { target: { value: 'Estudar Jest' } });
    fireEvent.click(botao);

    expect(mockAdicionar).toHaveBeenCalledWith('Estudar Jest');
    expect(input).toHaveValue('');
  });
});