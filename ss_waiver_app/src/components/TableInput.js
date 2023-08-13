import React, { useEffect, useState } from "react";
import { useField } from "formik";
import classnames from "classnames";
import { StyledQuestionLabel, StyledAnswer } from "../styles/FormStyles";

const TableComponent = ({name, label, headerNames, options, ...props}) => {
    // Initial table data with header and empty rows
    // can probably remove bc redundant with initial value, keep incase of issue rendering field.value
    const initialTableData = {
      header: [...headerNames],
      rows: [{medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""},
                           {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""}, 
                           {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""}],
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
        rows: [...value.rows, {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""}],
      });
      setRowCount((prevRowCount) => Math.max(prevRowCount + 1));
    };
    
    const handleCellChange = (e, rowIndex, cellKey) => {
      const updatedRows = value.rows.map((row, idx) => {
        if (idx === rowIndex) {
          return {
            ...row, 
            [cellKey]: e.target.value
          };
        }
        return row;
      });

      helpers.setValue({
        ...value, 
        rows: updatedRows
      });
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
                {/* {console.log(rowIndex)} */}
                {Object.entries(row).map(([cellKey, cellValue], cellIndex) => (
                  <td key={`${rowIndex}-${cellKey}`}>
                    {/* {console.log(cellIndex)} */}
                    <input
                      type="text"
                      value={cellValue}
                      onChange={(e) => handleCellChange(e, rowIndex, cellKey)}
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
  