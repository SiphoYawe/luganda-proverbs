import { SkeletonText, Skeleton } from "@chakra-ui/react";

const Proverb = ({ proverb }) => {
	{
		if (proverb) {
			return (
				<div className=" mx-auto flex max-w-[90%] grow flex-col justify-center gap-y-3">
					<p className=" text-2xl font-bold text-primary sm:text-3xl">
						{proverb.Luganda}
					</p>
					<p className=" text-lg text-gray-700  sm:text-xl">
						{proverb.English}
					</p>
				</div>
			);
		}
		if (!proverb) {
			return (
				<div className=" mx-auto flex w-full max-w-[90%] grow flex-col justify-center gap-y-3">
					<SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="5" />
					<SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
				</div>
			);
		} else {
		}
	}
};

export default Proverb;
