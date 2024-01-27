const Proverb = ({ proverb, isUpdating }) => {
	if (!proverb) {
		return null; // or return a loading indicator or some default content
	}

	if (!isUpdating) {
		return (
			<div className=" mx-auto flex max-w-[90%] grow flex-col justify-center gap-y-3">
				<p className=" text-2xl font-bold text-primary sm:text-3xl">
					{proverb.Luganda}
				</p>
				<p className=" text-lg text-gray-700  sm:text-xl">{proverb.English}</p>
			</div>
		);
	}

	if (isUpdating) {
		return (
			<div className=" mx-auto flex w-full max-w-[90%] grow flex-col justify-center gap-y-3">
				<SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="5" />
				<SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
			</div>
		);
	}
};

export default Proverb;
s;
