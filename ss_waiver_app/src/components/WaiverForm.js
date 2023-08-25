import { Formik, Field, Form } from "formik";
import TextInput from "./TextInput";
import { formSchema } from "../schemas";
import TextareaInput from "./TextareaInput";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import CustomSelect from "./SelectInput";
import TableInput from "./TableInput";
import { addDoc, collection } from "firebase/firestore";
import { db, colRef } from "../Firebase.js";
import MedicationInput from "./MedicationInput";

const WaiverForm = ({ handleFormSubmit }) => {
    const onSubmit = async (values, actions) => {
        console.log("pressed submit");
        console.log(JSON.stringify(values));
    
        // this will need to be dynamic and depend on user input/authentication
        const tripId = 'test-trip'
        const colRef = collection(db, tripId)
    
        addDoc(colRef, values)
            .then(() => {
                console.log("great success!!")
                actions.resetForm();
                handleFormSubmit();
            })
            .catch((error) => {
                console.log("error adding document:", error);
            });
    
    };

    return ( 
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                dob: '',
                pronouns: '',
                pronounsDetails:'',
                heightFeet: '',
                heightInches:'',
                weight: '',
                insurance:'',
                physicalActivityConcerns:'',
                allergies: '',
                allergiesDetails: '',
                dietaryRestrictions: '',
                dietaryRestrictionsDetails: '',
                otherAllergies: [],
                otherAllergiesDetails:'',
                medications: '',
                medicationsDetails: [
                    {medName: "", condition: "", dosageFreq: "", admin: "", selfAdmin: ""},
                ],
                psychConditions: '',
                psychConditionsDetails:'',
                healthDisabilities: '',
                healthDisabilitiesDetails:'',
                medicalConditions: [],
                medicalConditionsDetails: '',
                otherConcerns: '',
                ECFullName: '',
                ECRelationship: '',
                ECNumber: '',
                ECEmail: '',
                consentName: '',
            }}
            validationSchema={(formSchema)}
            onSubmit={(onSubmit)}
        >   
            {(props) => (
                <Form className="form">
                    <h1>Participant Health Form</h1>
                    <div className='basic-info'>
                        <h3>Basic Information</h3>
                        <div className='name'>
                            <div className="firstName">
                                <TextInput 
                                    label="First Name"
                                    className="input firstName-input"
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="lastName">
                                <TextInput 
                                    label="Last Name"
                                    className="input lastName-input"
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                />
                            </div>
                            
                        </div>
                    
                        <div className='personal-info'>
                            <div className="dob">
                                <TextInput 
                                    label="Date of Birth"
                                    className="input"
                                    type="date"
                                    name="dob"
                                />
                            </div>
                            
                            <CustomSelect
                                label="Preferred Pronouns"
                                name="pronouns"
                                placeholder="Preferred Pronouns"
                                className="pronouns-input"
                            >
                                <option value="">Select</option>
                                <option value="she/her">She/Her</option>   
                                <option value="he/him">He/Him</option>
                                <option value="they/them">They/Them</option>
                                <option value="other">Other</option>
                            </CustomSelect>

                            <div>
                                <label>Height: </label> <br />
                                <div className="height-info">
                                    <Field 
                                        type="number" name="heightFeet" placeholder="Feet" min="0"
                                    >   
                                    {({ field, meta }) => (
                                        <div>
                                            <input type="number" name="heightFeet" placeholder="Feet" min="0" {...field} className={meta.touched && meta.error ? 'input-error': ''}/>
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                        
                                    </Field>

                                    <Field 
                                        type="number" name="heightInches" placeholder="Inches" min="0"
                                    >
                                    {({ field, meta }) => (
                                        <div>
                                            <input type="number" name="heightInches" placeholder="Inches" min="0" {...field} className={meta.touched && meta.error ? 'input-error': ''}/>
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                    </div>
                                    )}
                                    </Field>
                                </div>
                            </div>
                            <div className="weight-info">
                                <TextInput
                                    label="Weight"
                                    className="input"
                                    type="number"
                                    name="weight"
                                    min="1"
                                    placeholder="Pounds"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="insurance-phys-activities"> 
                        <div className="insurance">
                            <h3 className="insurance-title">Insurance</h3>
                            <TextInput 
                                label="Each participant must independently have health insurance coverage."
                                className="insurance-input"
                                type="text"
                                name="insurance"
                                placeholder="Name of Health/Medical Insurance Company"
                            />
                        </div>
                        <div className="phys-activities">
                            <h3>Physical and Outdoor Activities:</h3>
                            <TextareaInput 
                                label="Please describe any concerns you have about your participation in any of the physical activities included in this Sierra STEM program (e.g., a hike lasting up to several hours):"
                                name="physicalActivityConcerns"
                                className="physical-activity-input"
                                type="text"
                                placeholder="List your concerns here..."
                            />
                        </div>
                    </div>
                    <div className="dietary-info">
                        <h3>Dietary Information</h3>
                        <div className="dietary-info-questions">
                            <RadioInput 
                                label="Do you have any food allergies?"
                                name="allergies"
                                className="allergies-input"
                            />

                            <RadioInput 
                                label="Do you have any other dietary restrictions?"
                                name="dietaryRestrictions"
                                className="dietary-restrictions-input"
                            />
                        </div>
                    </div>

                    <div className="med-conditions">
                        <h3>Medical Conditions</h3>
                        <div className="med-conditions-questions">

                        
                            <CheckboxInput 
                                label="Other than foods, do you have allergies/reactions to any:"
                                subLabel="(check any/all that apply)"
                                name="otherAllergies"
                                className="other-allergies-input"
                                options = {[
                                    {value: "medications", label: "Medications"},
                                    {value: "plants", label: "Plants"},
                                    {value: "insects", label: "Insects"},
                                    {value: "other", label: "Other"}
                                ]}
                            />

                            <RadioInput 
                                label="Are you experiencing any psychiatric conditions that could impact your participation?"
                                name="psychConditions"
                                className="psych-conditions-input"
                            />

                            <RadioInput 
                                label="Do you have any health disabilities (temporary or permanent) that you or your doctor feel could limit your participation in Sierra STEM’s programs?"
                                name="healthDisabilities"
                                className="health-disabilities-input"
                            />

                            <MedicationInput 
                                label="Are you currently taking any medications?"
                                name="medications"
                                className="medications-input"
                            />

                            <CheckboxInput 
                                label="Do you have any of the following conditions?"
                                subLabel="(check any/all that apply)"
                                name="medicalHistory"
                                className="medical-history-input"
                                options = {[
                                    {value: "asthma", label: "Asthma"},
                                    {value: "diabetes", label: "Diabetes"},
                                    {value: "epilepsy", label: "Epilepsy"},
                                    {value: "pregnancy", label: "Pregnancy"},
                                    {value: "high-blood-pressure", label: "High blood pressure"},
                                    {value: "heart-palpitations", label: "Heart palpitations"},
                                    {value: "chest-pain-or-pressure", label: "Chest pain or pressure"},
                                    {value: "heart-attack", label: "Heart condition"},
                                    {value: "heart-disease", label: "Heart disease"},
                                    {value: "heart-murmur", label: "Heart murmur"},
                                    {value: "stroke", label: "Stroke"},
                                    {value: "seizure", label: "Seizure"},
                                    {value: "medical-implants-devices", label: "Medical implants or devices of any kind"},
                                    {value: "fainting", label: "Vasovagal syncope or other fainting episodes"}
                                ]}
                            />
                        </div>
                    </div>

                    <div>
                        <TextareaInput 
                            label="Please describe any other concerns or conditions that you or your doctor feel may affect your participation in Sierra STEM’s programs."
                            name="otherConcerns"
                            className="other-concerns-input"
                            type="text"
                            placeholder="List your concerns here..."
                        />
                    </div>

                    <div>
                        <h3>Emergency Contact Information</h3>
                        <div className="EC-info">
                            <TextInput
                                label="Full Name"
                                className="input EC-full-name"
                                type="text"
                                name="ECFullName"
                                placeholder="Enter your full name"
                            />

                            <TextInput
                                label="Relationship to Participant"
                                className="input EC-relationship"
                                type="text"
                                name="ECRelationship"
                                placeholder="e.g. Father, Mother, Guardian, etc..."
                            />
                            
                            <TextInput
                                label="Phone Number"
                                className="input EC-number"
                                type="tel"
                                name="ECNumber"
                                placeholder="e.g. +1(123)-456-7890"
                            />

                            <TextInput
                                label="Email Address"
                                className="input EC-email"
                                type="text"
                                name="ECEmail"
                                placeholder="e.g. jdoe@gmail.com"
                            />
                        </div>
                    </div>

                    <div>
                        <h3>Consent to Treat: </h3>
                        <p style={{display: 'inline'}}>Sierra STEM has the right to give first aid to </p>
                        <input 
                            style={{
                                display: 'inline',
                                border: 'none',
                                borderBottom: '1px solid black',
                                outline: 'none'
                            }}
                            name="consentName"
                            placeholder="Participant's Full Name"
                        />
                        <p style={{display: 'inline'}}> 
                            and to engage the service of a physician, emergency room, dentist, 
                            and/or other healthcare provider or to hospitalize if deemed necessary. I further authorize Sierra STEM 
                            to act as the participant’s representative in signing consent for necessary clinical or surgical 
                            procedures when the participant is not able to do so. In the event of an emergency, I will be notified 
                            as soon as possible. The cost of such service will be charged to the participant or parent/guardian 
                            and paid by the same.
                        </p>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </Form>
            )}
        </Formik>
     );
}
 
export default WaiverForm;