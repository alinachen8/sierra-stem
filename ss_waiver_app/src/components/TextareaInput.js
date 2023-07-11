import { useField } from "formik";
import classnames from "classnames";

const TextareaInput = ({label, className, ...props}) => {
    const [field, meta] = useField(props);

    return ( 
        <>
        {/* {console.log(meta.touched)} */}
        <label>{label}</label> <br />

        <textarea
            {...field}
            {...props}
            className = {classnames(className, {
            "input-error": meta.touched && meta.error
            })}
        /> 
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}
 
export default TextareaInput;