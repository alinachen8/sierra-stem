import { Formik, Field, Form } from "formik";

const WaiverForm = () => {
    return ( 
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                dob: '',
                pronouns: '',
                height: '',
                weight: ''
            }}
        >   
            {(props) => (
                <Form>
                    <div class='basic-info'>
                    <h3>Basic Information</h3>
                    <div className='name'>
                        <div className='firstname'>
                        <label>First Name</label> <br />
                        <input
                            type="text"
                            class='input firstname-input'
                            required
                        />
                        </div>
                        <div className='lastname'>
                        <label>Last Name</label> <br />
                        <input
                            type="text"
                            class='input lastname-input'
                            required
                        />
                        </div>
                    </div>
                    <div className='personal-info'>
                        <div>
                        <label>Date of Birth:</label> <br />
                        <input 
                            type="date"
                            className='input'
                            required
                        />
                        </div>
                        <div>
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
                        <input 
                            type='number'
                            placeholder='Feet'
                            className='input'
                            required
                        />
                        <input 
                            type="number"
                            placeholder='Inches'
                            className='input'
                            required
                        />
                        </div>
                        <div>
                        <label>Weight: </label> <br />
                        <input 
                            type='number'
                            placeholder='Pounds'
                            className='input'
                            required
                        />
                        </div>
                    </div>
                    </div>
                    <div class="Insurance">

                    </div>
                </Form>
            )}
        </Formik>
     );
}
 
export default WaiverForm;