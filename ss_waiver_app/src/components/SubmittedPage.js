import React from 'react'

export const SubmittedPage = ({submitNewForm}) => {
  return (
    <div style={{backgroundColor: "lightblue"}}>
        <p>
            Your information has been successfully submitted! Click the button below
            to go back and make another entry if needed. 
        </p>
        <button type="submit" onClick={submitNewForm}>Submit New Form</button>
    </div>
  )
}
