
const SkeletonTableBody = () => {
  const skeletonRows = Array(4).fill(null);

  return (
    <>
      {skeletonRows.map((_, rowIndex) => (
        <tr key={rowIndex} className="skeleton-row" data-testid="skeleton-table">
          <td className="skeleton-cell">
            <div className="skeleton-photo"></div>
          </td>
          <td className="skeleton-cell">
            <div className="skeleton-content"></div>
          </td>
          {/* Colunas ocultas em mobile */}
          <td className="skeleton-cell collapsible">
            <div className="skeleton-content"></div>
          </td>
          <td className="skeleton-cell collapsible">
            <div className="skeleton-content"></div>
          </td>
          <td className="skeleton-cell collapsible">
            <div className="skeleton-content"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default SkeletonTableBody;