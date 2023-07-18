import { useField } from "formik";
import classnames from "classnames";

const RadioInput = ({label, className, ...props}) => {
    const [field, meta] = useField(props);
    const detailName = `{field.name}-details`

    return (
        <div>  
        {/* question label */}
            <label>{label}</label>
            <label>
                <input
                    {...field}
                    {...props}
                    className= {classnames(className, {
                        "input-error": meta.touched && meta.error
                        })}
                    type="radio"
                    value="yes"
                /> 
                Yes
            </label>
            <label>
                <input 
                    {...field}
                    {...props}
                    className= {classnames(className, {
                        "input-error": meta.touched && meta.error
                        })}
                    type="radio"
                    value="no"
                /> 
                No
            </label>
            
            {field.value === "yes" && 
                <>
                    <label>Please provide further details.</label> 
                    <input type="text" name={detailName}/>
                
                </>}

        </div> 
        
     );
}
 
export default RadioInput;