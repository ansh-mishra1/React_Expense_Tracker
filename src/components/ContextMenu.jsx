import React from 'react'
import style from './contextMenu.module.css'

const ContextMenu = ({ position, setPosition, rowId, setExpenses, setExpense, expenses, setEditingRowId }) => {
  if (!position.left) return
  return (
    <div className={style.contextMenuBox} style={position}>
      <div
        className={style.div1}
        onClick={() => {
          const {title, category, amount} = expenses.find((expense) => expense.id === rowId)
          setExpense({ title, category, amount })
          setPosition({})
          setEditingRowId(rowId)
        }}
      >Edit</div>
      <div
        onClick={() => {
          setExpenses((prevData) => prevData.filter((expense) => {
            if (expense.id !== rowId) return expense
          }))
          setPosition({})
        }}
      >Delete</div>
    </div>
  )
}

export default ContextMenu
