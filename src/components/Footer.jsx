import React from "react";

export const Footer = () => {
	return (
		<footer className="  border-t-2 border-primary ">
			<div className="mx-auto flex max-w-screen-xl flex-row flex-wrap justify-between gap-y-1 p-4">
				<p className="text-xs text-gray-700 md:text-sm">
					©2023. Made with 💜 by{" "}
					<a
						href="https://twitter.com/siphoyawe"
						className=" font-medium text-primary underline hover:text-hover">
						Sipho Yawe
					</a>
				</p>
				<a
					className="text-xs text-gray-500 hover:underline"
					href="https://github.com/SiphoYawe">
					Contribute to this Project
				</a>
			</div>
		</footer>
	);
};
