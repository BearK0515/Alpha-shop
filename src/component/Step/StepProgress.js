import "../Style/StepProgress.modules.scss"
export default function StepProgress () {
  return (
    <section className="stepProgress">
      {/* <!-- register-title --> */}
      <h2 class="register-title col col-12">結帳</h2>
      {/* <!-- register-progress --> */}
      <section class="progress-container col col-12">
        <span class="progress-group" data-phase="address">
          <span class="text done">1</span>
          <span class="progress-label done">寄送地址</span>
        </span>
        <span class="progress-bar done" data-order="1"></span>
        <span class="progress-group" data-phase="shipping">
          <span class="text">2</span>
          <span class="progress-label">運送方式</span>
        </span>
        <span class="progress-bar" data-order="2"></span>
        <span class="progress-group" data-phase="credit-card">
          <span class="text">3</span>
          <span class="progress-label">付款資訊</span>
        </span>
      </section> 
    </section>
      
  )
}