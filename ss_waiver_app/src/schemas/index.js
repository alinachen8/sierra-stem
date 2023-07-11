import * as yup from "yup";

export const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Required"),
    lastName: yup
        .string()
        .required("Required"),
    dob: yup
        .date()
        .required("Required"),
    pronouns: yup
        .string()
        .oneOf(["she/her", "he/him", "they/them", "other"], "Invalid Answer")
        .required("Required"),
    heightFeet: yup
        .number()
        .positive()
        .integer()
        .required("Required"),
    heightInches: yup
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
    insurance: yup
        .string()
        .required(),
});