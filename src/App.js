import Main from "./component/Main"
import { useState } from 'react'

export default function App() {
  
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <Main step={currentStep} onClick={setCurrentStep} />
  );
}