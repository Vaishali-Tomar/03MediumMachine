import React, {useState} from 'react'
import './TableComponent.css';

const TableComponent = () => {
    const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);

  const handleRowChange = (e) =>{
    setRows(Number(e.target.value));
  }
  const handleColumnChange = (event) => {
    setColumns(Number(event.target.value));
  };

  const generateTableData = () => {
    let data = [];
    for(let i=0; i<rows; i++){
        let row = [];
        for(let j=0; j<columns; j++){
            row.push(i * columns + j + 1);
        }
        data.push(row);
    }
    return data;
  }
  return (
    <div className="table-component">
      <h1>Dynamic Table Generator</h1>
      <div className="controls">
        <div className="control-group">
          <label>Rows:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="rows" value="2" checked={rows === 2} onChange={handleRowChange} /> 2
            </label>
            <label>
              <input type="radio" name="rows" value="3" checked={rows === 3} onChange={handleRowChange} /> 3
            </label>
            <label>
              <input type="radio" name="rows" value="4" checked={rows === 4} onChange={handleRowChange} /> 4
            </label>
          </div>
        </div>
        <div className="control-group">
          <label>Columns:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="columns" value="2" checked={columns === 2} onChange={handleColumnChange} /> 2
            </label>
            <label>
              <input type="radio" name="columns" value="3" checked={columns === 3} onChange={handleColumnChange} /> 3
            </label>
            <label>
              <input type="radio" name="columns" value="4" checked={columns === 4} onChange={handleColumnChange} /> 4
            </label>
          </div>
        </div>
      </div>
      <table>
        <tbody>
          {generateTableData().map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
