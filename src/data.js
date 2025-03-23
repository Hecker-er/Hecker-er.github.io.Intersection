const API_URL = ''

export class data {
	constructor(ipAddress, id) {
		this.ipAddress = ipAddress;
		this.id = id;
	}
}

export async function getData() {
	const response = await fetch("/");
	const data = new data();
	console.log(data);
	return data;
}
