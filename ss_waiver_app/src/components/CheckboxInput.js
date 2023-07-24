import { Field, useField } from "formik";
import { useEffect, useState } from "react";
import classnames from "classnames"
import { StyledAnswer } from "../styles/FormStyles";

const CheckboxInput = ({label, className, options, ...props}) => {
    const [field, meta] = useField(props);
    const detailName = `{field.name}Detail`;

    return (
        <div>
            <label>{label}</label>

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
            {field.value.length > 0 && 
            <>
                <br />
                <label>Please provide further details.</label>
                <input 
                    name={detailName}
                    type="text"
                />
            </>
            }
        </div>
     );
}
 
export default CheckboxInput;