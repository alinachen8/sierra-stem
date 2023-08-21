import React, { useEffect, useState } from "react";
import { useField } from "formik";
import classnames from "classnames";
import { StyledQuestionLabel, StyledAnswer } from "../styles/FormStyles";

const TableComponent = ({name, label, headerNames, options, ...props}) => {
    // Initial table data with header and empty rows
    // can probably remove bc redundant with initial value, keep incase of issue rendering field.value
    const header = [...headerNames]

    const initialTableData = [
      {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""},
      {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""}, 
      {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""}
    ];
  
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
      if (value.length === 1) {
        return;
      }

      const newRows = [...value];
      newRows.pop();

      helpers.setValue(newRows);
      
      setRowCount((prevRowCount) => prevRowCount - 1);
    };

    const handleAddRow = () => {
      console.log(value);
      const newRows = [...value];
      newRows.push({medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""})
      helpers.setValue(newRows);
      setRowCount((prevRowCount) => Math.max(prevRowCount + 1));
    };
    
    const handleCellChange = (e, rowIndex, cellKey) => {
      const updatedRows = value.map((row, idx) => {
        if (idx === rowIndex) {
          return {
            ...row, 
            [cellKey]: e.target.value
          };
        }
        return row;
      });

      helpers.setValue(updatedRows);
    };

    return (
      <div>
        <StyledQuestionLabel style={{fontStyle: "italic", marginBottom: "5px"}}>{label}</StyledQuestionLabel>
        <table className="medications-table">
          <thead>
            <tr>
              {header.map((headerCell, index) => (
                <th key={index}>{headerCell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(row).map(([cellKey, cellValue], cellIndex) => (
                  <td key={`${rowIndex}-${cellKey}`}>
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
        <div className="table-buttons">
          <button type="button" onClick={handleAddRow}>&#43;</button>
          <button type="button" onClick={handleDeleteRow}>&#8722;</button>
        </div>
        
      </div>
    );
  };
  
  export default TableComponent;
  