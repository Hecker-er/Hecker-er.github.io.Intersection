import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar.jsx'
import MainContent from './maincontent.jsx'

function App() {
const [pageState, setPageState] = useState("Devices");

  return (
  	<>
		<div className="full-page">
			<div className="sidebar">
				<Sidebar setPage={ setPageState } />
			</div>
			<div className="main-content">
				<MainContent content={ pageState } />
			</div>
		</div>
    </>
  )
}

export default App
