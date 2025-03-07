import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
  test('renders with default placeholder', () => {
    render(<SearchInput />);
    const inputElement = screen.getByPlaceholderText('Pesquisar');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<SearchInput onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText('Pesquisar');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders search icon', () => {
    render(<SearchInput />);
    const iconElement = screen.getByAltText('Buscar');
    expect(iconElement).toBeInTheDocument();
  });
});
