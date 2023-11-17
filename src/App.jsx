import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Details from './components/users/Details.jsx'
import Create from './components/users/Create.jsx'
import Edit from './components/users/Edit.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}/>
     <Route path='/users/index' element={<Index />}/>
     <Route path='/users/create' element={<Create />}/>
     <Route path='/users/:id' element={<Details />}/>
     <Route path='/users/edit/:id' element={<Edit />}/>
     <Route path='*' element={<p>Page Not Found</p>}/>
    </Routes>
  )
}
