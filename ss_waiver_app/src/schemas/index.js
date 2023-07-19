import * as yup from "yup";

export const formSchema = yup.object().shape({
    // firstName: yup
    //     .string()
    //     .required("Required"),
    // lastName: yup
    //     .string()
    //     .required("Required"),
    // dob: yup
    //     .date()
    //     .required("Required"),
    // pronouns: yup
    //     .string()
    //     .oneOf(["she/her", "he/him", "they/them", "other"], "Invalid Answer")
    //     .required("Required"),
    // heightFeet: yup
    //     .number()
    //     .positive()
    //     .integer()
    //     .required("Required"),
    // heightInches: yup
    //     .number()
    //     .positive()
    //     .integer()
    //     .min(0)
    //     .max(12)
    //     .required("Required"),
    // weight: yup
    //     .number()
    //     .positive()
    //     .integer()
    //     .required("Required"),
    // insurance: yup
    //     .string()
    //     .required(),
    // physicalActivityConcerns: yup
    //     .string()
    //     .optional(),
    allergies: yup
        .string()
        .required("Required"),
    allergiesDetails: yup
        .string()
        .when('allergies', {
            is: (allergies) => allergies && allergies.value === "yes", 
            then: yup.string().required("Required")
        }),
    dietaryRestrictions: yup
        .string()
        .required("Required"),
    dietaryRestrictionsDetails: yup
        .string()
        .when('dietaryRestrictions', {
            is: (dietaryRestrictions) => dietaryRestrictions && dietaryRestrictions.value === "yes", 
            then: yup.string().required("Required")
        }),
    // otherAllergies: yup
    //     .string(),
    // medications: yup
    //     .string()
    //     .required("Required"),
    // psychConditions: yup
    //     .string()
    //     .required("Required"),
    // healthDisabilities: yup
    //     .string()
    //     .required("Required"),
    // medicalConditions: yup
    //     .string(),
    // medicalHistory: yup
    //     .string(),
    // otherConcerns: yup 
    //     .string()
    //     .optional(),
    
});