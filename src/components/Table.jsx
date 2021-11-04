import { v4 as uuidv4 } from 'uuid';
import db from './dataset.json';

function Table() {
  const tableHeader = () => {
    const getColumnName = Object.values(db.data.Total)[0];

    return Object.keys({ brand_name: '', ...getColumnName }).map((value) => (
      <th scope="col" key={uuidv4()}>
        {value}
      </th>
    ));
  };

  const tableBody = () =>
    Object.keys(db.data.Total).map((brand) => (
      <tr className={brand} key={uuidv4()}>
        <td>{brand}</td>
        {Object.entries(db.data.Total[brand]).map(([key, value]) => (
          <td key={uuidv4()}>{value}</td>
        ))}
      </tr>
    ));

  return (
    <table className="table">
      <thead className="table-dark text-center">
        <tr>{tableHeader()}</tr>
      </thead>
      <tbody>{tableBody()}</tbody>
    </table>
  );
}

export default Table;
