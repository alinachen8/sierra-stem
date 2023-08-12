import { Field, useField } from "formik";
import { useEffect, useState } from "react";
import classnames from "classnames"
import { StyledAnswer, StyledConditionalInput } from "../styles/FormStyles";

const CheckboxInput = ({label, subLabel, className, options, ...props}) => {
    const [field, meta] = useField(props);
    const detailName = `${field.name}Details`;

    // Create separate field object for conditional input
    const [detailField, detailMeta] = useField(detailName);
    
    return (
        <div>
            <label>{label}</label>
            {subLabel && <label style={{ fontStyle: 'italic' }}>{subLabel}</label>}

            {options.map((option) => 
                <StyledAnswer key={option.value}>
                    <Field 
                        type="checkbox"
                        value={option.value}
                        name={field.name}
                        className = {classnames(className, {
                            "input-error": meta.touched && meta.error
                            })}
                    />
                    {option.label}
                </StyledAnswer>
                
            )}
            
            {/* need to change logic bc now if uncheck one box is gone even if there are two other checked ones */}
            {field.value && field.value.length > 0 && (
            <>
                <label>Please provide further details.</label>
                <StyledConditionalInput type="text" {...detailField} />
            </>
            )}
        </div>
     );
}
 
export default CheckboxInput;