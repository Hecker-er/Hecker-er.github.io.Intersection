const API_URL = '127.0.0.1:8000'

export async function getData() {
	const response = await fetch("127.0.0.1:8000/func");
	const data = response.json();
	console.log(data);
	return data;
}
