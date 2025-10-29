import './index.css'

const TransactionItem = props => {
  const {accountObject, deleteTransaction} = props
  const {title, amount, type, id} = accountObject

  const onDeleteTransaction = () => {
    deleteTransaction(id, amount)
    console.log('deleted')
  }
  return (
    <li className="detailsContainer">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <button className="dlt-btn" onClick={onDeleteTransaction}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="dlt-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
