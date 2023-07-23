import React, { useState } from "react";

const TableComponent = () => {
    // Initial table data with header and empty rows
    const initialTableData = {
      header: ["Column 1", "Column 2", "Column 3", "Column 4", "Column 5"],
      rows: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    };
  
    const [tableData, setTableData] = useState(initialTableData);
    const [rowCount, setRowCount] = useState(3);
  
    const handleAddRow = () => {
      setTableData({
        ...tableData,
        rows: [...tableData.rows, ["", "", "", "", ""]],
      });
      setRowCount((prevRowCount) => prevRowCount + 1);
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              {tableData.header.map((headerCell, index) => (
                <th key={index}>{headerCell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => {
                        const updatedRows = [...tableData.rows];
                        updatedRows[rowIndex][cellIndex] = e.target.value;
                        setTableData({
                          ...tableData,
                          rows: updatedRows,
                        });
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    );
  };
  
  export default TableComponent;
  