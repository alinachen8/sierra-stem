import { Formik, Field, Form } from "formik";
import TextInput from "./TextInput";
import { formSchema } from "../schemas";
import TextareaInput from "./TextareaInput";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";

const onSubmit = async (values, actions) => {
    console.log("pressed submit")
    console.log({values})

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const WaiverForm = () => {
    return ( 
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                dob: '',
                pronouns: '',
                heightFeet: '',
                heightInches:'',
                weight: '',
                insurance:'',
            }}
            validationSchema={(formSchema)}
            onSubmit={(onSubmit)}
        >   
            {(props) => (
                <Form>
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
                            <div className="pronouns">
                                <label>Preferred Pronouns: </label> <br />
                                <select className='input' required>
                                    <option value='she/her'>She/Her</option>
                                    <option value='he/him'>He/Him</option>
                                    <option value='they/them'>They/Them</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>
                            <div>
                                <label>Height: </label> <br />
                                <div className="height-info">
                                    <Field 
                                        type="number" name="heightFeet" placeholder="Feet" min="0"
                                    />
                                    <Field 
                                        type="number" name="heightInches" placeholder="Inches" min="0"
                                    />
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

                    <div className="insurance">
                        <h3 className="insurnace-title">Insurance</h3>
                        <TextInput 
                            label="Each participant must independently have health insurance coverage."
                            className="insurance-input"
                            type="text"
                            name="insurance"
                            placeholder="Name of Health/Medical Insurance Company"
                        />
                    </div>
                    <div className="phys-acts">
                        <h3>Physical and Outdoor Activities:</h3>
                        <TextareaInput 
                            label="Please describe any concerns you have about your participation in any of the physical activities included in this Sierra STEM program (e.g., a hike lasting up to 8 hours, rock climbing, sleeping in tents outdoors, paddling during whitewater rafting trip):"
                            name="physActsConcerns"
                            className="physActs-input"
                            type="text"
                            placeholder="List your concerns here..."
                        />
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
                                name="allergies"
                                className="allergies-input"
                            />
                        </div>
                    </div>

                    <div className="med-conditions">
                        <h3>Medical Conditions</h3>
                        <div className="med-conditions-questions">

                        
                            <CheckboxInput 
                                label="Other than foods, do you have allergies/reactions to any: (check any/all that apply)"
                                name="otherAllergies"
                                className="other-allergies-input"
                                options = {[
                                    {value: "medications", label: "Medications"},
                                    {value: "plants-insects", label: "Plants or Insects"},
                                    {value: "other", label: "Other"}
                                ]}
                            />

                            <RadioInput 
                                label="Are you currently taking any medications"
                                name="medications"
                                className="medications-input"
                            />
                            
                            <RadioInput 
                                label="Are you experiencing any psychiatric conditions that could impact your participation?"
                                name="psych-conditions"
                                className="psych-conditions-input"
                            />
                            
                            <RadioInput 
                                label="Do you have any health disabilities (temporary or permanent) that you or your doctor feel could limit your participation in Sierra STEM’s programs?"
                                name="allergies"
                                className="allergies-input"
                            />
                            
                            <CheckboxInput 
                                label="Do you have any of the following conditions? (check any/all that apply)
                                "
                                name="medical-conditions"
                                className="medical-conditions-input"
                                options = {[
                                    {value: "asthma", label: "Asthma"},
                                    {value: "diabetes", label: "Diabetes"},
                                    {value: "epilepsy", label: "Epilepsy"},
                                    {value: "pregnancy", label: "Pregnancy"},
                                    {value: "heart-condition", label: "Heart Condition"}
                                ]}
                            />
                            
                            <CheckboxInput 
                                label="Do you have a history of any of the following conditions? (check any/all that apply)
                                "
                                name="medical-history"
                                className="medical-history-input"
                                options = {[
                                    {value: "fainting", label: "Asthma"},
                                    {value: "high-blood-pressure", label: "Diabetes"},
                                    {value: "heart-palpitations", label: "Epilepsy"},
                                    {value: "chest-pain-or-pressure", label: "Pregnancy"},
                                    {value: "heart-attack", label: "Heart Condition"},
                                    {value: "heart-disease", label: "Heart Disease"},
                                    {value: "heart-murmur", label: "Heart Murmur"},
                                    {value: "stroke", label: "Stroke"},
                                    {value: "seizure", label: "Seizure"},
                                    {value: "medical-implants-devices", label: "Medical implants or devices of any kind"}
                                ]}
                            />
                        </div>
                    </div>

                    <div>
                        <TextareaInput 
                            label="Please describe any other concerns or conditions that you or your doctor feel may affect your participation in Sierra STEM’s programs."
                            name="other-concerns"
                            className="other-concerns-input"
                            type="text"
                            placeholder="List your concerns here..."
                        />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
     );
}
 
export default WaiverForm;