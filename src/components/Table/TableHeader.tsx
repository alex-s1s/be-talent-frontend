const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>FOTO</th>
        <th>NOME

          <span className="chevron" />
        </th>
        <th className="hide-on-mobile">CARGO</th>
        <th className="hide-on-mobile">DATA DE ADMISSÃO</th>
        <th className="hide-on-mobile">TELEFONE</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
