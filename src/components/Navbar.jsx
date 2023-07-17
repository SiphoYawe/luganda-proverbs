const Navbar = () => {
	return (
		<nav className=" border-b-2 border-primary bg-white dark:bg-gray-900">
			<div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
				<a href="/" className="flex items-center">
					<img
						src="/logo.svg"
						className="mr-3 h-8 md:h-12"
						alt="Luganda Proverbs Logo"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
