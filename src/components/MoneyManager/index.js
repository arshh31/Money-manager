import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
    amountTitle: '',
    amountInput: '',
    amountType: 'INCOME',
  }

  onChangeTitle = event => {
    this.setState({amountTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeamountType = event => {
    this.setState({amountType: event.target.value})
  }

  deleteTransaction = (id, amount) => {
    const {transactionList, totalBalance, totalIncome, totalExpense} =
      this.state
    const deletedTransaction = transactionList.filter(
      eachItem => eachItem.id !== id,
    )

    const balanceTransaction = transactionList.find(
      eachItem => eachItem.id === id,
    )
    
    if (balanceTransaction) {
      if (balanceTransaction.type === 'Income') {
        this.setState(prevState => ({
          totalBalance: prevState.totalBalance - amount,
          totalIncome: prevState.totalIncome - amount,
        }))
      } else {
        this.setState(prevState => ({
          totalExpense:prevState.totalExpense - amount,
          totalBalance: prevState.totalBalance + amount,
        }))
      }
    }
    this.setState({transactionList: deletedTransaction})
  }

  addTransaction = event => {
    event.preventDefault()
    const {
      transactionList,
      totalBalance,
      totalIncome,
      totalExpense,
      amountType,
      amountTitle,
      amountInput,
    } = this.state

    const newTransaction = {
      id: uuidv4(),
      title: amountTitle,
      amount: parseInt(amountInput),
      type: amountType === 'INCOME' ? 'Income' : 'Expenses',
    }

    let updatedBalance = 0
    let updatedIncome = 0
    let updatedExpense = 0

    if (newTransaction.type === 'Income') {
      updatedBalance += newTransaction.amount
      updatedIncome += newTransaction.amount
    } else if (newTransaction.type === 'Expenses') {
      updatedBalance -= newTransaction.amount
      updatedExpense += newTransaction.amount
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      totalBalance: prevState.totalBalance + updatedBalance,
      totalIncome: prevState.totalIncome + updatedIncome,
      totalExpense: prevState.totalExpense + updatedExpense,
      amountTitle: '',
      amountInput: '',
      amountType: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {transactionList, amountInput, amountTitle, amountType} = this.state
    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1>Hi Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>

        <MoneyDetails
          totalIncome={this.state.totalIncome}
          totalBalance={this.state.totalBalance}
          totalExpense={this.state.totalExpense}
        />

        <div className="wholeContainer">
          <div className="addTransaction-container">
            <h1>Add Transaction</h1>
            <form className="formContainer" onSubmit={this.addTransaction}>
              <label htmlFor="title" className="labelElement">
                TITLE
              </label>
              <input
                type="text"
                id="amount"
                placeholder="TITLE"
                className="inputElement"
                onChange={this.onChangeTitle}
                value={amountTitle}
              />
              <label htmlFor="title" className="labelElement">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="inputElement"
                onChange={this.onChangeAmount}
                value={amountInput}
              />
              <label className="labelElement">Type</label>
              <select
                className="inputElement"
                onChange={this.onChangeamountType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.id}> {eachItem.displayText}</option>
                ))}
              </select>
              <div>
                <button datatest-id="delete" type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="addTransaction-container">
            <h1>History</h1>

            <ul className="content-Container">
              <div className="heading">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>delete</p>
              </div>
              <div>
                {transactionList.map(eachItem => (
                  <TransactionItem
                    accountObject={eachItem}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
