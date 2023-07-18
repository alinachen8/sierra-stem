import { useField } from "formik";
import { useEffect, useState } from "react";
import classnames from "classnames"

const CheckboxInput = ({label, className, options, ...props}) => {
    const [field, meta] = useField(props);
    const detailName = `{field.name}-details`;
    const [checkedCount, setCheckedCount] = useState(0);

    useEffect(() => {
        setCheckedCount((checkedCount) => {
            console.log('in the loop', checkedCount);
            if (field.value === true) {
              return checkedCount + 1;
            } else if (field.value === false) {
              return checkedCount - 1 < 0 ? 0 : checkedCount - 1;
            }
            return checkedCount;
          });
    }, [field.value, label.key]);


    console.log("checked boxes: ", checkedCount);
    console.log(field.value);
    console.log(label.key);

    return (
        <>
            <label>{label}</label>

            {options.map((option) => 
                <label key={option.value}>
                    <input 
                        type="checkbox"
                        value={option.value}
                        {...field}
                        {...props}
                        className = {classnames(className, {
                            "input-error": meta.touched && meta.error
                            })}
                    />
                    {option.label}
                </label>
                
            )}
            
            {/* need to change logic bc now if uncheck one box is gone even if there are two other checked ones */}
            {field.value && 
            <>
                <br />
                <label>Please provide further details.</label>
                <input 
                    name={detailName}
                    type="text"
                />
            </>
            }
        </>
     );
}
 
export default CheckboxInput;