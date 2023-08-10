import React, { useState } from "react";
import { useField } from "formik";
import classnames from "classnames";
import { StyledQuestionLabel, StyledAnswer } from "../styles/FormStyles";

const TableComponent = ({name, label, className, headerNames, options, ...props}) => {
    // Initial table data with header and empty rows
    const initialTableData = {
      header: [...headerNames],
      rows: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    };
  
    const [tableData, setTableData] = useState(initialTableData);
    const [rowCount, setRowCount] = useState(3);
  
    const handleDeleteRow = () => {
      if (tableData.rows.length === 1) {
        return;
      }

      const newRows = [...tableData.rows];
      newRows.pop();

      setTableData({
        ...tableData,
        rows: newRows,
      });
      
      setRowCount((prevRowCount) => prevRowCount - 1);
    };

    const handleAddRow = () => {
      console.log(tableData);
      setTableData({
        ...tableData,
        rows: [...tableData.rows, ["", "", "", "", ""]],
      });
      setRowCount((prevRowCount) => Math.max(prevRowCount + 1));
    };
  
    return (
      <div>
        <StyledQuestionLabel>{label}</StyledQuestionLabel>
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
        <button type="button" onClick={handleDeleteRow}>Delete Row</button>

        <button type="button" onClick={handleAddRow}>Add Row</button>
      </div>
    );
  };
  
  export default TableComponent;
  