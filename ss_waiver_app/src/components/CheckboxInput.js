import { useField } from "formik";
import classnames from "classnames"

const CheckboxInput = ({label, className, options, ...props}) => {
    const [field, meta] = useField(props);
    const detailName = `{field.name}-details`;

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