export function SidebarButton({ title, setPage }) {
	return <button onClick={() => setPage(title)}>{title}</button>
};


export default function Sidebar({setPage}) {
	return (
	<>
		<div className="sidebar-buttons">
			<SidebarButton title="Devices" setPage={setPage} />
			<SidebarButton title="Traffic" setPage={setPage} />
			<SidebarButton title="DDOS" setPage={setPage} />
			<SidebarButton title="Drop" setPage={setPage} />
		</div>
	</>
	)
};
