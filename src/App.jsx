import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar.jsx'
import MainContent from './maincontent.jsx'

function App() {
const [pageState, setPageState] = useState("Devices");

  return (
    <>
		<Sidebar setPage={ setPageState } />
		<MainContent content={ pageState } />
    </>
  )
}

export default App
