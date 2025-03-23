import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar.jsx'
import MainContent from './maincontent.jsx'

function App() {
const [pageState, setPageState] = useState("Devices");

  return (
  	<>
		<div class="full-page">
			<div class="sidebar">
				<Sidebar setPage={ setPageState } />
			</div>
			<MainContent content={ pageState } />
		</div>
    </>
  )
}

export default App
