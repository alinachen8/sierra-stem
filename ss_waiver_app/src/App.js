import './App.css';
import WaiverForm from './components/WaiverForm';
import { useState } from 'react';
import { SubmittedPage } from './components/SubmittedPage';
function App() {
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    console.log("yay again!");
  }

  const submitNewForm = () => {
    setIsSubmitted(false);
    console.log("new rodeo")
  }

  return (
    <div className="App">
      {!isSubmitted && <WaiverForm handleFormSubmit={handleFormSubmit}/>}
      {isSubmitted && <SubmittedPage submitNewForm={submitNewForm}/>}
    </div>
  );
}

export default App;