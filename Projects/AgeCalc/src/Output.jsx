const Output = ({ day, month, year }) => {
	return (
		<div className="flex flex-col gap-4 px-8 mt-8 sm:mt-0">
			<div className="flex flex-row items-center">
				<h1 className="sm:text-7xl text-5xl text-Purple font-PoppinsEBoldItalic sm:min-w-[125px] min-w-[90px]">
					{year}
				</h1>
				<h1 className="sm:text-7xl text-5xl text-OffBlack font-PoppinsEBoldItalic">
					Years
				</h1>
			</div>

			<div className="flex flex-row items-center">
				<h1 className="sm:text-7xl text-5xl text-Purple font-PoppinsEBoldItalic sm:min-w-[125px] min-w-[90px]">
					{month}
				</h1>
				<h1 className="sm:text-7xl text-5xl text-OffBlack font-PoppinsEBoldItalic">
					Months
				</h1>
			</div>

			<div className="flex flex-row items-center">
				<h1 className="sm:text-7xl text-5xl text-Purple font-PoppinsEBoldItalic sm:min-w-[125px] min-w-[90px]">
					{day}
				</h1>
				<h1 className="sm:text-7xl text-5xl text-OffBlack font-PoppinsEBoldItalic">
					Days
				</h1>
			</div>
		</div>
	);
};

export default Output;
