import '@/styles/components/_table.scss';
import useEmployeeData from '../../hooks/useEmployeeData';
import useFilter from '../../hooks/useFilter';
import { formatDate } from '../../utils/formatDate';
import formatPhone from '../../utils/formatPhone';
import SearchInput from '../ui/SearchInput';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import SkeletonTable from './TableSkeleton';

const Table = () => {
  const { employees, loading, error } = useEmployeeData();
  const { searchTerm, setSearchTerm, filteredData } = useFilter(employees);

  return (
    <div className="table-container">
      <div className="table-search">
        <h1>Funcionários</h1>
        <SearchInput
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table">
        <TableHeader />
        <tbody>
          {loading ? (
            <>
              <SkeletonTable />
            </>
          ) : error ? (
            <tr>
              <td colSpan={5}>Erro ao carregar dados.</td>
            </tr>
          ) : filteredData.length > 0 ? (
            filteredData.map((emp) => (
              <TableRow
                key={emp.id}
                photo={emp.photo || '/assets/default-avatar.png'}
                name={emp.name}
                role={emp.role}
                date={formatDate(emp.date)}
                phone={formatPhone(emp.phone)}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5}>Nenhum funcionário encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;