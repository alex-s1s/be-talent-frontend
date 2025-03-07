import { useState } from "react";
import { Employee } from "../../@types/Employee";

const TableRow = (props: Employee) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr >
        <td>
          <img
            src={props.photo}
            alt="Foto do funcionário"
            className="employee-photo"
          />
        </td>
        <td className="employee-name-mobile">
          <span className="nome-texto">{props.name}</span>
          <img
            onClick={toggleExpand}
            className={`rotate-arrow ${isExpanded ? 'rotated' : ''}`}
            src="/assets/icons/charm_chevron-down.svg"
            alt="Seta"
          />
        </td>
        <td className="hide-on-mobile">{props.role}</td>
        <td className="hide-on-mobile">{props.date}</td>
        <td className="hide-on-mobile">{props.phone}</td>
      </tr>
      {isExpanded && (
        <tr className="collapse-row">
          <td colSpan={5}>
            <div className="collapse-content">
              <div>
                <strong>Cargo:</strong>
                <p>
                  {props.role}
                </p>
              </div>
              <div>
                <strong>Data de Admissão:</strong>
                <p>
                  {props.date}
                </p>
              </div>
              <div>
                <strong>Telefone:</strong>
                <p>
                  {props.phone}
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
