import { useField } from "formik";
import classnames from "classnames";
const TextInput = ({label, className, ...props}) => {
  const [field, meta] = useField(props);
  // const inputClassName = `${className} ${meta.touched && meta.error ? "input-error" : ""}`;
  // const inputClassNames = classnames(className, {
  //   "input-error": meta.touched && meta.error,
  // });

  return ( 
    <>
      {/* {console.log(meta.touched)} */}
      <label>{label}</label>
      <input
      // spread in the props (name, type, placeholder)
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
 
export default TextInput;