import { useState } from 'react'
import appStyle from './App.module.css'
import expenseData from './expenseData'
import ExpenseTable from './components/ExpenseTable'
import ExpenseForm from './components/ExpenseForm'
import { useLocalStorage } from './useLocalStorage'


function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses',expenseData)
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  const [editingRowId, setEditingRowId] = useState('')

  return (
    <>
      <h2 className={appStyle.heading}>Expense Tracker</h2>
      <main className={appStyle.main}>
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </main>
    </>
  )
}

export default App
