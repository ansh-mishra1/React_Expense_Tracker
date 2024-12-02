import React, { useState } from 'react'
import Input from './Input'
import Options from './Options'
import fstyle from './expenseForm.module.css'
import { rules } from 'eslint-plugin-react'

const ExpenseForm = ({ setExpenses, expense, setExpense, editingRowId, setEditingRowId }) => {
  const [error, setError] = useState('')


  const validConfig = {
    title: [{ required: true, message: 'Please Enter Title' }],
    category: [{ required: true, message: 'Please Select Category' }],
    amount: [{ required: true, message: 'Please Enter an Amount' }],
  }

  const formValidation = (formData) => {
    const errorData = {}
    Object.entries(formData).forEach(([key, value]) => {
      validConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message
          return true
          // console.log(errorData[key])
        }
      })
    })
    setError(errorData)
    return errorData
  }

  const handelSubmit = (e) => {
    e.preventDefault()

    const validRuselt = formValidation(expense)

    if (Object.entries(validRuselt).length) return

    if (editingRowId) {
      setExpenses((prevState) => (
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId }
          }
          else {
            return prevExpense
          }
        })
      ))
      setEditingRowId('')
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      return
    }

    setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  const handelChange = (e) => {
    const { name, value } = e.target

    setExpense((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <section className={fstyle.formSection}>
        <form className={fstyle.form} onSubmit={handelSubmit}>

          <Input
            type='text'
            label='Title'
            name='title'
            value={expense.title}
            onChange={handelChange}
            error={error.title}
          />

          <Options
            options={['Clothes', 'Grocery', 'Education', 'Medicine', 'Bills']}
            optionLabel='Select Category'
            name='category'
            value={expense.category}
            onChange={handelChange}
            error={error.category}
          />

          <Input
            type='number'
            label='Aomunt'
            name='amount'
            value={expense.amount}
            onChange={handelChange}
            error={error.amount}
          />

          <div className={fstyle.btnBox}>
            <button className={fstyle.btn} >{editingRowId ? 'Save' : 'Add'}</button>
          </div>

        </form>
      </section>
    </>
  )
}

export default ExpenseForm
