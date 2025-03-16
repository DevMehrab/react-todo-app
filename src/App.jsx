import { useState } from 'react'

import './App.css'
import { InputField } from './InputField'
import { TaskContainer } from './TaskContainer'
import { DataProvider } from './DataProvider'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='bg-slate-50 h-screen w-screen'>
      <DataProvider>
        <div className="p-2 w-full max-w-3xl mx-auto">
          <p className='py-4 mx-auto text-3xl'>ToDo App</p>
          <InputField />
          <TaskContainer />
        </div>

      </DataProvider>

    </div>
  )
}

export default App
