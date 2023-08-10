import React from "react";
import { useField } from "formik";
import classnames from "classnames";
import { StyledQuestionLabel, StyledAnswer } from "../styles/FormStyles";
import TableInput from "./TableInput";

const MedicationInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  const detailName = `${field.name}Details`;

  // Create separate field object for conditional input
  const [detailField, detailMeta] = useField(detailName);

  return (
    <div>
      {/* question label */}
      <StyledQuestionLabel>{label}</StyledQuestionLabel>
      <StyledAnswer>
        <input
          {...field}
          {...props}
          className={classnames(className, {
            "input-error": meta.touched && meta.error
          })}
          type="radio"
          value="yes"
        />
        Yes
      </StyledAnswer>
      <StyledAnswer>
        <input
          {...field}
          {...props}
          className={classnames(className, {
            "input-error": meta.touched && meta.error
          })}
          type="radio"
          value="no"
        />
        No
      </StyledAnswer>
      
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      
      {field.value === "yes" && (
        <>
        <TableInput 
            name={detailName}
            label="Please provide details about these medications"
            headerNames={['Medication Name', 'Condition', 'Dosage/Frequency', 'Administration (pill, injection, etc)', 'Self Administered? (yes/no)']}
        />
        </>
      )}
    </div>
  );
};

export default MedicationInput;
