import * as yup from "yup";

export const formSchema = yup.object().shape({
    firstname: yup
        .string()
        .required("Required"),
    lastname: yup
        .string()
        .required("Required"),
    dob: yup
        .date()
        .required("Required"),
    pronouns: yup
        .string()
        .oneOf(["she/her", "he/him", "they/them", "other"], "Invalid Answer")
        .required("Required"),
    height_feet: yup
        .number()
        .positive()
        .integer()
        .required("Required"),
    height_inches: yup
        .number()
        .positive()
        .integer()
        .min(0)
        .max(12)
        .required("Required"),
    weight: yup
        .number()
        .positive()
        .integer()
        .required("Required"),
});