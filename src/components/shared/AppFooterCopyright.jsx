function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				
					React & Tailwind CSS Portfolio
					Devesh
				
			</div>
		</div>
	);
}

export default AppFooterCopyright;
