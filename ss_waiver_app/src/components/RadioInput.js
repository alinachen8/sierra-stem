import React from "react";
import { useField } from "formik";
import classnames from "classnames";
import { StyledQuestionLabel, StyledAnswer } from "../styles/FormStyles";

const RadioInput = ({ label, className, ...props }) => {
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

      {field.value === "yes" && (
        <>
          <label>Please provide further details.</label>
          <input type="text" {...detailField} />
        </>
      )}
    </div>
  );
};

export default RadioInput;
