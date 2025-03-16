import React, { useContext, useRef } from 'react'
import { IoRefresh } from 'react-icons/io5'
import { DataContext } from './DataProvider'

export const InputField = () => {
    const { data, dispatch } = useContext(DataContext)
    function handleClick() {
        if (inputRef !== '') {
            dispatch(
                {
                    type: 'ADD_TASK',
                    payload: { task: inputRef.current.value }
                }
            )
            inputRef.current.value = ''
        }
    }
    const inputRef = useRef()
    return (
        <div className='flex justify-center items-center py-6 mx-auto '>
            <input type="text" ref={inputRef} className='border w-full outline-0 p-2 rounded' />
            <button onClick={handleClick} className='rounded p-2 ml-4 w-36 bg-slate-900 text-white'>Add Task</button>
        </div>
    )
}
