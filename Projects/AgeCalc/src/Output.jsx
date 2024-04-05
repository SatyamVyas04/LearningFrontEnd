const Output = ({ day, month, year }) => {
	return (
		<div className="flex flex-col gap-4 px-8 mt-4 sm:mt-0">
			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-6xl text-4xl text-Purple font-PoppinsEBoldItalic">
					{day}
				</h1>
				<h1 className="sm:text-6xl text-4xl text-OffBlack font-PoppinsEBoldItalic">
					Years
				</h1>
			</div>

			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-6xl text-4xl text-Purple font-PoppinsEBoldItalic">
					{month}
				</h1>
				<h1 className="sm:text-6xl text-4xl text-OffBlack font-PoppinsEBoldItalic">
					Months
				</h1>
			</div>

			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-6xl text-4xl text-Purple font-PoppinsEBoldItalic">
					{year}
				</h1>
				<h1 className="sm:text-6xl text-4xl text-OffBlack font-PoppinsEBoldItalic">
					Days
				</h1>
			</div>
		</div>
	);
};

export default Output;
