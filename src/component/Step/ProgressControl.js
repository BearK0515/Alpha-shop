import "../Style/ProgressControl.modules.scss"
import rightArrow from "../icons/right-arrow.svg"
import leftArrow from "../icons/left-arrow.svg"

export default function ProgressControl () {
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase="address">
        <button class="next">
          下一步
          <img src={rightArrow} alt=""/>
        </button>
      </section>
      <section class="button-group d-none col col-12" data-phase="shipping">
        <button class="prev">
          <img src={leftArrow} alt="" />
          上一步
        </button>
        <button class="next">
          下一步
          <img src={rightArrow} alt=""/>
        </button>
      </section>
      <section class="button-group d-none col col-12" data-phase="credit-card">
        <button class="prev">
          <img src={leftArrow} alt="" />
          上一步
        </button>
        <button class="next">
          確認下單
        </button>
      </section>
    </section>
  )
}
