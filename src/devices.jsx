import { useEffect, useState } from 'react';
import { Data, getData } from './data.js';

export function DeviceDescriptor({ipAddress, id}) {
	return (
		<>
			<tr>
				<tr>{id}</tr>
				<tr>{ipAddress}</tr>
			</tr>
		</>
	)
}

export default function DevicesPage() {
	const [hasData, setHasData] = useState(true);
	const [data, setData] = useState<Data[]>();

	

	return (
		<>
			<h1>-DEVICES-</h1>
		</>
	);
}
