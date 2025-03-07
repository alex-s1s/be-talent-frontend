import { fireEvent, render, screen } from '@testing-library/react';
import useEmployeeData from '../../../hooks/useEmployeeData';
import useFilter from '../../../hooks/useFilter';
import Table from '../Table';

jest.mock('../../../hooks/useEmployeeData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('@/styles/components/_table.scss', () => ({}));

jest.mock('../../../hooks/useFilter', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockEmployees = [
  {
    id: 1,
    name: 'John Doe',
    role: "Developer",
    date: "2022-08-10",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    phone: "5555555555565"
  },
];

describe('Table Component', () => {
  const mockUseEmployeeData = useEmployeeData as jest.Mock;
  const mockUseFilter = useFilter as jest.Mock;

  beforeEach(() => {
    mockUseEmployeeData.mockReturnValue({
      employees: [],
      loading: false,
      error: null,
    });

    mockUseFilter.mockImplementation((data) => ({
      searchTerm: '',
      setSearchTerm: jest.fn(),
      filteredData: data,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('display skeleton while loading', () => {
    mockUseEmployeeData.mockReturnValue({
      employees: [],
      loading: true,
      error: null,
    });

    render(<Table />);
    expect(document.querySelector('.skeleton-row')).toBeTruthy();
  });

  test('displays error message', () => {
    mockUseEmployeeData.mockReturnValue({
      employees: [],
      loading: false,
      error: { message: 'Error' },
    });

    render(<Table />);
    expect(screen.getByText('Erro ao carregar dados.')).toBeTruthy();
  });

  test('displays data correctly when loaded', () => {
    mockUseEmployeeData.mockReturnValue({
      employees: mockEmployees,
      loading: false,
      error: null,
    });

    render(<Table />);

    expect(screen.getByText('John Doe')).toBeTruthy();
    expect(screen.getByText('Developer')).toBeTruthy();
  });


  test('filters data correctly by search', () => {
    const mockSetSearchTerm = jest.fn();

    mockUseFilter.mockImplementation(() => ({
      searchTerm: '',
      setSearchTerm: mockSetSearchTerm,
      filteredData: mockEmployees,
    }));

    render(<Table />);

    const input = screen.getByPlaceholderText('Pesquisar');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith('John');
    expect(screen.getByText('John Doe')).toBeTruthy();
  });

  test('display message when no results are found', () => {
    mockUseFilter.mockImplementation(() => ({
      searchTerm: 'XYZ',
      setSearchTerm: jest.fn(),
      filteredData: [],
    }));

    render(<Table />);
    expect(screen.getByText('Nenhum funcionário encontrado.')).toBeTruthy();
  });
});