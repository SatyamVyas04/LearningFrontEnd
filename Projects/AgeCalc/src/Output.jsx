const Output = ({ day, month, year }) => {
	return (
		<div className="flex flex-col gap-4 px-8 mt-16 sm:mt-4">
			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-7xl text-6xl text-Purple font-PoppinsEBoldItalic min-w-[2.25ch]">
					{year}
				</h1>
				<h1 className="text-5xl sm:text-7xl text-OffBlack font-PoppinsEBoldItalic">
					Years
				</h1>
			</div>

			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-7xl text-6xl text-Purple font-PoppinsEBoldItalic min-w-[2.25ch]">
					{month}
				</h1>
				<h1 className="text-5xl sm:text-7xl text-OffBlack font-PoppinsEBoldItalic">
					Months
				</h1>
			</div>

			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-7xl text-6xl text-Purple font-PoppinsEBoldItalic min-w-[2.25ch]">
					{day}
				</h1>
				<h1 className="text-5xl sm:text-7xl text-OffBlack font-PoppinsEBoldItalic">
					Days
				</h1>
			</div>
		</div>
	);
};

export default Output;
