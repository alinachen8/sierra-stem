import { useField } from "formik"; 
import classnames from "classnames"

const CustomSelect = ({label, className, ...props}) => {
    const [field, meta, helpers] = useField(props);
    const detailName = `${field.name}Details`;

    return ( 
        <div>
            <label>{label}</label>
            <select 
                {...field} 
                {...props}
                className = {classnames(className, {
                    "input-error": meta.touched && meta.error
                    })}            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
            
            {field.value && field.value === "other" && 
                <input name={detailName} placeholder="Please specify"></input> 
            }
        </div>

     );
}
 
export default CustomSelect;