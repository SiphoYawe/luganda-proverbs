import React from "react";
import ProverbsCard from "./ProverbsCard";
import { supabase } from "../lib/supabaseAPI";
import { useState } from "react";

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
	return (
		<section className="bg-pattern z-0 flex grow items-center bg-gray-100 bg-cover py-9">
			<div className=" mx-auto flex w-[95%] max-w-2xl flex-col items-center justify-center gap-y-8 ">
				<h1 className="  text-center text-3xl font-bold text-primary sm:text-4xl">
					Luganda Proverb Generator
				</h1>

				<ProverbsCard
					getProverb={getProverb}
					proverb={proverb}
					isUpdating={isUpdating}
				/>

				<div className="relative">
					<button
						className="relative z-30 flex h-14 w-52 flex-row items-center justify-center rounded-full bg-primary  font-semibold text-white transition-all ease-in-out hover:bg-hover  active:left-2 active:top-2"
						onClick={getProverb}>
						Generate Proverb
					</button>
					<div className="absolute left-2 top-2 z-0 flex h-14 w-52 flex-row items-center justify-center rounded-full border-2 border-primary bg-white font-semibold text-white">
						Generate Proverb
					</div>
				</div>
			</div>
		</section>
	);
};

export default Layout;
