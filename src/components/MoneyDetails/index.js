import './index.css'

const MoneyDetails = ({totalBalance, totalIncome, totalExpense}) => {
  return (
    <div className="transactionDetails-Container">
      <div className="balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="transaction-images"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p className="rupees">Rs {totalBalance}</p>
        </div>
      </div>

      <div className="income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="transaction-images"
            alt="income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p className="rupees">Rs {totalIncome}</p>
        </div>
      </div>

      <div className="expense-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="transaction-images"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expense</p>
          <p className="rupees">Rs {totalExpense}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
