import { Formik, Field, Form } from "formik";
import TextInput from "./TextInput";

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
                height_feet: '',
                height_inches:'',
                weight: ''
            }}
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
                                {/* add code so that an input box will render if other is selected */}
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
                                        type="number" name="height_feet" placeholder="Feet" min="0"
                                    />
                                    <Field 
                                        type="number" name="height_inches" placeholder="Inches" min="0"
                                    />
                                </div>
                            </div>
                            <div className="weight-info">
                                <TextInput
                                    label="Weight"
                                    className="input"
                                    type="number"
                                    name="dob"
                                    min="1"
                                    placeholder="Pounds"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Insurance">

                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
     );
}
 
export default WaiverForm;