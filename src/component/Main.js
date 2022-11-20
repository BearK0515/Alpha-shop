import StepProgress from "./Step/StepProgress.jsx"
import Step1 from './Step/Step1.jsx';
import Step2 from './Step/Step2.jsx';
import Step3 from './Step/Step3.jsx';
import ProgressControl from './Step/ProgressControl.jsx';
import Cart from './Cart/Cart.jsx';

import "./Style/reset.scss"
import "./Style/Main.scss"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";


export default function Main() {
  
  const {currentStep, setCurrentStep}=useContext(CartContext)

  return (
    <>
      {/* main */}
      <main className="site-main">
        <div className="main-container">
          {/* register */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={1}
            data-total-price={0}
          >
            {/* register-progress */}
            <StepProgress currentStep={currentStep}/>
            {/* register-form */}
            <section class="form-container col col-12">
              {currentStep === 1 && <Step1/>}
              {currentStep === 2 && <Step2/>}
              {currentStep === 3 && <Step3/>}
            </section>
          </section>
          {/* cart */}
          <Cart />
          {/* progress-control */}
          <ProgressControl currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
      </main>
    </>
  )
}
