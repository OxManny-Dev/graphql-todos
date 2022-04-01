import { useEffect, useState } from 'react';

export const useQueryHook = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res => {
				if (res.status !== 200) {
					setError('Something broke');
					setLoading(false);
					return;
				}
				return res.json();
			})
			.then(res => {
				setData(res);
				setLoading(false);
			});
	}, []);

	return {
		loading,
		data,
		error,
	}
};
