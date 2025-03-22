export function Button({ title }) {
	return <button>{title}</button>
};

export default function Sidebar() {
	return (
	<>
		<Button title="Devices" />
		<Button title="Traffick" />
	</>
	)
};
