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
    pronounsDetails: yup
        .string()
        .when('pronouns', {
            is: (pronouns) => pronouns && pronouns.value === "other",
            then: yup.string().required("Required")
        }),
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
        .required("Required"),
    physicalActivityConcerns: yup
        .string()
        .optional(),
    allergies: yup
        .string()
        .required("Required"),
    allergiesDetails: yup
        .string()
        .when('allergies', {
            is: (allergies) => allergies && allergies.value === "yes", 
            then: () => yup.string().required("Required")
        }),
    dietaryRestrictions: yup
        .string()
        .required("Required"),
    dietaryRestrictionsDetails: yup
        .string()
        .when('dietaryRestrictions', {
            is: (dietaryRestrictions) => dietaryRestrictions && dietaryRestrictions.value === "yes", 
            then: () => yup.string().required("Required")
        }),
    otherAllergies: yup
        .array()
        .optional(),
    otherAllergiesDetails: yup
        .string()
        .when('otherAllergies', {
            is: (otherAllergies) => Array.isArray(otherAllergies) && otherAllergies.length !== 0, 
            then: () => yup.string().required("Required")
        }),
    medications: yup
        .string()
        .required("Required"),
    medicationsDetails: yup
        .object()
        .when('medications', {
            is: (medications) => medications && medications.value === "yes", 
            then: () => yup.object().shape({
                header: yup.array(),
                rows: yup.array().of(
                    yup.object().shape({
                        medName: yup.string().required('Required'),
                        condition: yup.string().required('Required'),
                        dosageFreq: yup.string().required('Required'),
                        admin: yup.string().required('Required'),
                        selfAdmin: yup.string().required('Required'),
                    })
                )
            })
        }),
    psychConditions: yup
        .string()
        .required("Required"),
    psychConditionsDetails: yup
        .string()
        .when('psychConditions', {
            is: (psychConditions) => psychConditions && psychConditions.value === "yes", 
            then: () => yup.string().required("Required")
        }),
    healthDisabilities: yup
        .string()
        .required("Required"),
    healthDisabilitiesDetails: yup
        .string()
        .when('healthDisabilities', {
            is: (healthDisabilities) => healthDisabilities && healthDisabilities.value === "yes", 
            then: () => yup.string().required("Required")
        }),
    medicalConditions: yup
        .array()
        .optional(),
    medicalConditionsDetails: yup
        .string()
        .when('medicalConditions', {
            is: (medicalConditions) => Array.isArray(medicalConditions) && medicalConditions.length !== 0, 
            then: () => yup.string().required("Required")
        }),
    otherConcerns: yup 
        .string()
        .optional(),
});