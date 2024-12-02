import tstyle from './expenseTable.module.css'
import { useFilter } from '../useFilter'
import ContextMenu from './contextMenu'
import { useState } from 'react'
const ExpenseTable = ({ expenses, setExpenses, setExpense, setEditingRowId }) => {

    const [position, setPosition] = useState({})
    const [rowId, setRowId] = useState('')

    const [filterData, setQuery] = useFilter(expenses, (data) => data.category)

    const total = filterData.reduce((acc, cur) => {
        return (acc + parseInt(cur.amount))
    }, 0)

    return (
        <>
            <ContextMenu
                position={position}
                setPosition={setPosition}
                setEditingRowId={setEditingRowId}
                setExpenses={setExpenses}
                setExpense={setExpense}
                expenses={expenses}
                rowId={rowId}
            />
            <section className={tstyle.tableSection}>
                <table className={tstyle.table}>
                    <thead className={tstyle.thead}>
                        <tr>
                            <th>Title</th>
                            <th>
                                <select
                                    className={tstyle.selectCategory}
                                    onChange={(e) => (setQuery(e.target.value.toLocaleLowerCase()))}
                                >
                                    <option value=''>All</option>
                                    <option value='clothes'>Clothes</option>
                                    <option value='grocery'>Grocery</option>
                                    <option value='education'>Education</option>
                                    <option value='medicine'>Medicine</option>
                                    <option value='bills'>Bills</option>
                                </select>
                            </th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody
                        onClick={() => {
                            if (position.left) {
                                setPosition({})
                            }
                        }}
                    >
                        {
                            filterData.map((expense) => (
                                <tr key={expense.id} onContextMenu={(e) => {
                                    e.preventDefault()
                                    setPosition({ left: e.clientX, top: e.clientY })
                                    setRowId(expense.id)
                                }}>
                                    <td>{expense.title}</td>
                                    <td>{expense.category}</td>
                                    <td>₹{expense.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><b>Total</b></td>
                            <td></td>
                            <td><b>₹{total}</b></td>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </>
    )
}

export default ExpenseTable