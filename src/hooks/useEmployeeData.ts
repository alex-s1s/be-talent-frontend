import { useEffect, useState } from 'react';
import { Employee } from '../@types/Employee';
import { fetchEmployees } from '../services/employeeService';

const useEmployeeData = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError('Erro ao carregar os dados dos funcionários.');
        setLoading(false);
      }
    };
    loadEmployees();
  }, []);

  return {
    employees,
    loading,
    error,
  };
};

export default useEmployeeData;