# 💰 Money Manager App

A responsive **Money Manager** web application built using **React.js** to track income, expenses, and overall balance. This project helps practice React fundamentals like components, state management, and event handling.

---

## 📺 Demo

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif" alt="money manager output gif" style="max-width:70%; box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

---

✅ Completion Instructions
<details> <summary>Functionality Overview</summary>

Initial Values:

Balance Amount: 0

Income Amount: 0

Expenses Amount: 0

Transaction Handling:

Income and Expenses are tracked separately

Balance = Total Income − Total Expenses

Transactions can be added with title, amount, and transaction type

Transactions can be deleted, updating totals accordingly

MoneyManager Component:

Uses transactionTypeOptions for selecting type (Income / Expenses)

Resets input fields after adding a transaction

</details>

---

🧩 Components Structure
<details> <summary>Click to view</summary> <br/> <div style="text-align: center;"> <img src="https://assets.ccbp.in/frontend/content/react-js/money-manager-component-structure-breakdown.png" alt="component breakdown structure" style="max-width:100%; box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)"> </div> <br/>

Components:

MoneyManager – Main component handling inputs and transaction list

MoneyDetails – Displays Income, Expenses, Balance

TransactionItem – Individual transaction entry

App.js – Root component

</details>

## 🚀 Set Up Instructions

<details>
<summary>Click to view</summary>

1. Clone the repository:
```bash
git clone https://github.com/arshh31/Money-manager.git
