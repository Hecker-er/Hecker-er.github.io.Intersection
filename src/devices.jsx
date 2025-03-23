import { useEffect, useState } from 'react';
import { getData } from './data.js';

export function DeviceDescriptor({ipAddress, id}) {
	return (
		<>
			<tr>
				<tr>{ id }</tr>
				<tr>{ ipAddress }</tr>
			</tr>
		</>
	)
}

export default function DevicesPage() {
	const [hasData, setHasData] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		async function fetchData() {
			const fetchedData = await getData();
			setData(fetchedData);
			setHasData(true);
		}
		fetchData();
	}, []); 

	return (
		<>
			<h1>-DEVICES-</h1>
			{hasData ? (
				<p>No Data</p>
			) : (
				<table>{data.map((data) => <DeviceDescriptor ipAddress={ data.ipAddress } id={ data.id } />)}</table>
			)}
		</>
	);
}
