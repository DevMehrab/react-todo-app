import React, { useContext } from 'react'


import { DataContext } from './DataProvider'
import { TaskCard } from './TaskCard'

export const TaskContainer = () => {
    const { data, dispatch } = useContext(DataContext)

    const list = data.map(item => {
        console.log(item);
        return <TaskCard info={item} key={item.id} />

    })
    return (
        <div className='flex flex-col justify-start items-start w-full mx-auto'>
            <h1 className='my-4 text-xl text-slate-600 font-medium'>Recent Tasks</h1>
            <div className="flex flex-col justify-center items-center w-full">
                {list}
            </div>
        </div>
    )
}
