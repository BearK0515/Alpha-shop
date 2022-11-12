import "../Style/StepProgress.modules.scss"
import "../icons/pg-complete.svg"



export default function StepProgress (props) {
  return (
    <section className="stepProgress">
      {/* <!-- register-title --> */}
      <h2 className="register-title col col-12">結帳</h2>
      {/* <!-- register-progress --> */}
      <section className="progress-control-container step-control col col-12">
        <span className={props.step === 1 ? "progress-group active":"progress-group" } data-phase="address">
          <span className="text">1</span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className={props.step >= 1 ? "progress-bar bar-active" : "progress-bar"} data-order="1"></span>
        <span className={props.step === 2 ? "progress-group active":"progress-group" } data-phase="shipping">
          <span className="text">2</span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className={props.step >= 2 ? "progress-bar bar-active" : "progress-bar"} data-order="2"></span>
        <span className={props.step === 3 ? "progress-group active":"progress-group" } data-phase="credit-card">
          <span className="text">3</span>
          <span className="progress-label">付款資訊</span>
        </span>
      </section> 
    </section>
  )
}