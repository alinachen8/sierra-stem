import React, { useEffect, useState } from "react";
import { useField } from "formik";
import classnames from "classnames";
import { StyledQuestionLabel, StyledAnswer } from "../styles/FormStyles";

const TableComponent = ({name, label, headerNames, options, ...props}) => {
    // Initial table data with header and empty rows
    const initialTableData = {
      header: [...headerNames],
      rows: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    };
  
    // const [tableData, setTableData] = useState(initialTableData);
    const [field, meta, helpers] = useField(name);
    const [rowCount, setRowCount] = useState(3);

    const value = field.value || initialTableData;

    useEffect(() => {
      if (field.value) {
        helpers.setValue(field.value);
      }
    }, [value]);

    const handleDeleteRow = () => {
      if (value.rows.length === 1) {
        return;
      }

      const newRows = [...value.rows];
      newRows.pop();

      helpers.setValue({
        ...value,
        rows: newRows,
      });
      
      setRowCount((prevRowCount) => prevRowCount - 1);
    };

    const handleAddRow = () => {
      console.log(value);
      helpers.setValue({
        ...value,
        rows: [...value.rows, ["", "", "", "", ""]],
      });
      setRowCount((prevRowCount) => Math.max(prevRowCount + 1));
    };
  
    return (
      <div>
        <StyledQuestionLabel>{label}</StyledQuestionLabel>
        <table>
          <thead>
            <tr>
              {value.header.map((headerCell, index) => (
                <th key={index}>{headerCell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => {
                        const updatedRows = [...value.rows];
                        updatedRows[rowIndex][cellIndex] = e.target.value;
                        helpers.setValue({
                          ...value,
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
  