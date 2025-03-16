import React, { createContext, useEffect, useReducer } from 'react'

export const DataContext = createContext()
const initialData = JSON.parse(localStorage.getItem('data')) || []
// const initialData = [
//     { id: 0, task: 'Do a 30-minute workout', time: '7:01 pm', isEditable: false, isDone: false },
//     { id: 1, task: 'Learn 5 new English words', time: '7:01 pm', isEditable: false, isDone: false },
//     { id: 2, task: 'Buy groceries (milk, eggs, bread)', time: '7:01 pm', isEditable: false, isDone: false },
// ]

function reduce(data, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...data,
                {
                    id: Date.now(),
                    task: action.payload.task,
                    time: new Date().toLocaleTimeString(),
                    isEditable: false,
                    isDone: false
                }
            ]
            break;
        case 'SET_DONE':
            return data.map(element =>
                element.id === action.payload.id
                    ? { ...element, isDone: !element.isDone }
                    : element
            );
            break;
        case ('EDIT'):
            return data.map(element => {
                if (element.id === action.payload.id) {
                    return { ...element, isEditable: !element.isEditable }
                } else {
                    return element
                }
            })
            break;
        case ('SAVE'):
            return data.map(element => {
                if (element.id === action.payload.id) {
                    return { ...element, task: action.payload.task, isEditable: !element.isEditable }
                } else {
                    return element
                }
            })
            break;
        case ('DELETE'):
            return data.filter(el => el.id !== action.payload.id)
            break;
        default:
            break;
    }
}
export const DataProvider = ({ children }) => {

    const [data, dispatch] = useReducer(reduce, initialData)
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])
    return (
        <DataContext.Provider value={{ data, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}
