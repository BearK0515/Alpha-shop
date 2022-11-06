import StepProgress from "./Step/StepProgress.js"
import Step1 from './Step/Step1.js';
import Step2 from './Step/Step2.js';
import Step3 from './Step/Step3.js';
import ProgressControl from './Step/ProgressControl.js';

import "./Style/reset.scss"
import "./Style/Main.scss"

export default function Main() {
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
            <StepProgress />
            {/* register-form */}
            <section class="form-container col col-12">
              <Step1 />
              <Step2 />
              <Step3 />
            </section>
          </section>
          {/* progress-control */}
          <ProgressControl />
        </div>
      </main>
    </>
    
  )
}