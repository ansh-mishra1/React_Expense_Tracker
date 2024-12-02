import React, { useState } from 'react'

export function useFilter(dataList, callBack) {
    const [query, setQuery] = useState('')

    const filterData = dataList.filter((expense) => {
        return callBack(expense).toLowerCase().includes(query)
    })
  return [filterData, setQuery]
}
