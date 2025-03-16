import React, { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { IoMdSave } from "react-icons/io";


export const TaskCard = ({ info }) => {
    const { data, dispatch } = useContext(DataContext)
    const titleRef = useRef()
    const { task, time, isDone, isEditable, id } = info
    const [myTask, setMyTask] = useState(task)


    let titleStyle = isDone ? 'px-2 text-slate-400 line-through' : 'text-slate-700 px-2 '
    function handleOnChange(e) {
        setMyTask(e.target.value)
    }

    function handleDone() {
        dispatch(
            {
                type: 'SET_DONE',
                payload: {
                    id: id
                }
            }
        )
    }
    function handleEdit() {
        dispatch(
            {
                type: 'EDIT',
                payload: {
                    id: id
                }
            }
        )

    }
    function handleSave() {
        dispatch({
            type: 'SAVE',
            payload: {
                id: id,
                task: titleRef.current.value
            }
        })
    }
    function handleDelete() {
        dispatch({
            type: 'DELETE',
            payload: {
                id: id,
            }
        })
    }
    useEffect(() => {
        if (isEditable) {
            console.log(titleRef);
            titleRef.current.focus()

        }

    }, [isEditable])
    return (
        <div className='flex w-full justify-center items-center my-2'>
            <div onClick={handleDone}>
                {isDone ? <MdCheckBox className='text-xl text-slate-700' /> : <MdOutlineCheckBoxOutlineBlank className='text-xl' />}
            </div>
            <div className='w-full'>
                {isEditable ? <input ref={titleRef} className='px-2 border border-zinc-700 rounded outline-0' type="text" onChange={handleOnChange} value={myTask} /> : <h2 className={titleStyle} onClick={handleDone}>{task}</h2>}
            </div>
            <div className="flex">
                {isEditable ? <IoMdSave onClick={handleSave} className='bg-teal-700 p-2 rounded text-teal-200 text-4xl' /> : <MdModeEdit onClick={handleEdit} className='bg-indigo-700 p-2 rounded text-indigo-200 text-4xl' />}

                <MdDelete onClick={handleDelete} className='bg-red-700 p-2 rounded text-red-200 text-4xl ml-2' />
            </div>
        </div>
    )
}
