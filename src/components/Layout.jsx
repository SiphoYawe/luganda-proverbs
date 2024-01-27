import React, { useEffect } from "react"; // import useEffect

const Layout = () => {
	const [proverb, setproverb] = useState(null);
	const [isUpdating, setisUpdating] = useState(null);

	const getProverb = async () => {
		try {
			setisUpdating(true);
			const { data } = await supabase
				.from("random_proverbs")
				.select("*")
				.single()
				.limit(1);

			setproverb(data);
		} catch (error) {
			console.log(error);
		} finally {
			setisUpdating(false);
		}
	};

	useEffect(() => {
		getProverb(); // call the function when the component mounts
	}, []); // empty dependency array means this effect runs once on mount

	// rest of your component
};
