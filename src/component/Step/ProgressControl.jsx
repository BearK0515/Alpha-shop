import "../Style/ProgressControl.modules.scss"
import rightArrow from "../icons/right-arrow.svg"
import leftArrow from "../icons/left-arrow.svg"

export default function ProgressControl (props) {
  
  const Step = props.step

  function NextBtn () {
    if (Step < 3) {
      props.onClick(Step + 1)
    } else if (Step === 3) {
      alert('訂單已送出')
    }
  }

  function PrevBtn () {
    props.onClick(Step - 1)
  }

  return (
    <section className="progress-container step-control col col-lg-6 col-sm-12">
      {props.step === 1 && 
      <section className="button-group col col-12"  data-phase="address">
        <button className="next" onClick={NextBtn}>
          下一步
          <img src={rightArrow} alt=""/>
        </button>
      </section>}
      {props.step === 2 && <section className="button-group  col col-12"  data-phase="shipping">
        <button className="prev" onClick={PrevBtn}>
          <img src={leftArrow} alt=""/>
          上一步
        </button>
        <button className="next" onClick={NextBtn}>
          下一步
          <img src={rightArrow} alt=""/>
        </button>
      </section>}
      {props.step === 3 && 
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={PrevBtn}>
          <img src={leftArrow} alt=""/>
          上一步
        </button>
        <button className="next" onClick={NextBtn}>
          確認下單
        </button>
      </section>}
    </section>
  )
}
