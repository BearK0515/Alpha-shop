import "../Style/ProgressControl.modules.scss"
import rightArrow from "../icons/right-arrow.svg"
import leftArrow from "../icons/left-arrow.svg"
import { useContext } from "react"
import { CreditCardContext, inputValue } from "../../Context/CreditCardContext"


export default function ProgressControl ({currentStep,setCurrentStep}) {
  const {value, setValue} = useContext(CreditCardContext)

  const nextBtn = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevBtn = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    console.log(value);
    alert("已確認下單！！")
    setValue(inputValue)

  }

  return (
    <section className="progress-container step-control col col-lg-6 col-sm-12">
      {currentStep === 1 && 
      <section className="button-group col col-12"  data-phase="address">
        <button className="next" onClick={nextBtn}>
          下一步
          <img src={rightArrow} alt=""/>
        </button>
      </section>}
      {currentStep === 2 && <section className="button-group  col col-12"  data-phase="shipping">
        <button className="prev" onClick={prevBtn}>
          <img src={leftArrow} alt=""/>
          上一步
        </button>
        <button className="next" onClick={nextBtn}>
          下一步
          <img src={rightArrow} alt=""/>
        </button>
      </section>}
      {currentStep === 3 && 
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={prevBtn}>
          <img src={leftArrow} alt=""/>
          上一步
        </button>
        <button className="next" onClick={handleSubmit}>
          確認下單
        </button>
      </section>}
    </section>
  )
}
