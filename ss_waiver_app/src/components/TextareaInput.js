import { useField } from "formik";
import classnames from "classnames";
import { StyledTextarea } from "../styles/FormStyles";

const TextareaInput = ({label, className, ...props}) => {
    const [field, meta] = useField(props);

    return ( 
        <>
        {/* {console.log(meta.touched)} */}
        <label>{label}</label> <br />

        <StyledTextarea
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