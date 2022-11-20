import { useContext } from "react"
import { CreditCardContext } from "../../Context/CreditCardContext"
import "../Style/Step3.modules.scss"


export default function Step3 () {

  const {value, setValue} = useContext(CreditCardContext)

  function handleValueChange(e){
    const name = e.target.name
    if(name === 'visaName'){
      setValue({
        ...value,
        name: e.target.value
      })
    } else if (name === 'visaNumber') {
      setValue({
        ...value,
        number: e.target.value
      })
    } else if (name === 'visaDate') {
      setValue({
        ...value,
        term: e.target.value
      })
    } else if (name === 'visaCode') {
      setValue({
        ...value,
        cvc: e.target.value
      })
    }
  }


  return (
    <form className="part credit-card col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="input-container col col-12">
          <div className="input-group visaName input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input type="text" name="visaName" placeholder="John Doe" value={value.name} onChange={handleValueChange}/>
          </div>
        </div>
        <div className="input-container col col-12">
          <div className="input-group visaNumber input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input type="text" name="visaNumber" placeholder="1111 2222 3333 4444" value={value.number} onChange={handleValueChange}/>
          </div>
        </div>
        <div className="input-container col col-12">
          <div className="input-group visaDate input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input type="text" name="visaDate" placeholder="MM/YY" value={value.term} onChange={handleValueChange}/>
          </div>
          <div className="input-group visaCode input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input type="text" name="visaCode" placeholder="123" value={value.cvc} onChange={handleValueChange}/>
          </div>
        </div>
      </section>
    </form>
  )
}