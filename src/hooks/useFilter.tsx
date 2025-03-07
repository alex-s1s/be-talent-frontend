import { useMemo, useState } from 'react';
import { Employee } from '../@types/Employee';

const useFilter = (initialData: Employee[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    return initialData.filter((employee) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        employee.name.toLowerCase().includes(searchLower) ||
        employee.role.toLowerCase().includes(searchLower) ||
        employee.phone.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm, initialData]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
};

export default useFilter;