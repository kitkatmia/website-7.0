import Papa from 'papaparse';

type Callback = (data: any) => void;

const useFetch = () => {
	const fetchCsvData = async (filePath: string, callback:Callback) => {
		try {
			const response = await fetch(filePath);
			console.log("fetching file : "+ filePath)
			const reader = response.body!.getReader();
			const result = await reader.read();
			const decoder = new TextDecoder('utf-8');
			const csvString = decoder.decode(result.value!);
			const { data } = Papa.parse(csvString, {
				header: true,
				dynamicTyping: true
			})
			console.log("got : "+ filePath)
			callback(data)
		}
		catch (error) {
			console.error('Error fetching CSV data:', error);
		}
	}
	return {fetchCsvData}
}
export default useFetch;