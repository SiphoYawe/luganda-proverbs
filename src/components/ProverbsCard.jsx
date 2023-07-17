import { IoCopy } from "react-icons/io5";

import { FaTwitter } from "react-icons/fa";
import { useToast, Tooltip } from "@chakra-ui/react";
import Proverb from "./Proverb";
import { useEffect } from "react";

const ProverbsCard = ({ getProverb, proverb, isUpdating }) => {
	useEffect(() => {
		getProverb();
	}, []);

	const toast = useToast();
	const id = "copy-toast";

	const copyProverb = async () => {
		try {
			await navigator.clipboard.writeText(
				`Luganda: ${proverb.Luganda} \n English: ${proverb.English}`
			);
			toast({
				id,
				title: "Copied to clipboard",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
			});
		} catch (error) {
			toast({
				id,
				title: "Failed to copy to clipboard",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom-right",
			});
		}
	};

	return (
		<div className="relative w-full">
			<div
				id="card-top"
				className="z-40 flex min-h-[300px]  flex-col rounded-3xl border-2 border-primary bg-white py-5">
				<Proverb proverb={proverb} isUpdating={isUpdating} />
				<div className="mx-auto mt-3 flex w-full max-w-[90%] flex-row justify-start gap-x-2">
					<Tooltip hasArrow label="Copy">
						<button
							type="button"
							className="rounded-lg bg-gray-200 p-2 hover:bg-gray-300"
							onClick={copyProverb}>
							<IoCopy className="text-lg text-primary" />
						</button>
					</Tooltip>
					<Tooltip hasArrow label="Share on Twitter">
						<a
							href={`https://twitter.com/intent/tweet?hashtags=LugandaProverbs&text=${`Luganda: ${proverb} \n English: ${proverb} `}"}&url=www.lugandaproverbs.com`}>
							<button className="rounded-lg bg-gray-200 p-2 hover:bg-gray-300">
								<FaTwitter className="text-lg text-primary" />
							</button>
						</a>
					</Tooltip>
				</div>
			</div>

			<div
				id="card-bottom"
				className=" absolute left-2 top-3 -z-10  min-h-[300px] w-full rounded-3xl border-2 border-primary bg-white">
				<Proverb proverb={proverb} />
				<div className="mx-auto mt-3 flex w-full max-w-[90%] flex-row justify-start gap-x-2">
					<Tooltip hasArrow label="Copy">
						<button
							type="button"
							className="rounded-lg bg-gray-200 p-2 hover:bg-gray-300"
							onClick={copyProverb}>
							<IoCopy className="text-lg text-primary" />
						</button>
					</Tooltip>
					<Tooltip hasArrow label="Share on Twitter">
						<a
							href={`https://twitter.com/intent/tweet?hashtags=LugandaProverbs&text=${""}&url=www.lugandaproverbs.com`}
							rel="canonical">
							<button className="rounded-lg bg-gray-200 p-2 hover:bg-gray-300">
								<FaTwitter className="text-lg text-primary" />
							</button>
						</a>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default ProverbsCard;
