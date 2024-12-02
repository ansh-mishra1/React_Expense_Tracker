import { useEffect, useState } from "react";

export function useLocalStorage(key, intialData){
    const[data, setData] = useState(intialData)

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key))
        if(existingData){
            setData(existingData)
        }
        else{
            localStorage.setItem(key, JSON.stringify(intialData))
        }
    },[])
    const updateLocalStorage = (newData) => {
        if(typeof newData === 'function'){
            localStorage.setItem(key, JSON.stringify(newData(data)))
            setData(newData)
        }
        else{
            localStorage.setItem(key, JSON.stringify(newData))
            setData(newData)
        }
    }
    return[data, updateLocalStorage]
}