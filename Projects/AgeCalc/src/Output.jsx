import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Output = ({
	day,
	month,
	year,
	OutputDateState,
	OutputMonthState,
	OutputYearState,
}) => {
	const data = useRef();

	useGSAP(
		() => {
			gsap.from(".dataitem", {
				x: -50,
				duration: 0.4,
				stagger: 0.2,
				opacity: 0,
				ease: "power1.inOut",
			});

			gsap.from(".tagline", {
				x: -100,
				duration: 0.4,
				stagger: 0.2,
				opacity: 0,
				ease: "power1.inOut",
			});
		},
		{ dependencies: [OutputDateState, OutputMonthState, OutputYearState] }
	);

	return (
		<div className="flex flex-col gap-4 px-8 mt-16 sm:mt-4">
			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-7xl text-6xl text-Purple font-PoppinsEBoldItalic min-w-[2.25ch] dataitem">
					{year}
				</h1>
				<h1 className="text-5xl sm:text-7xl text-OffBlack font-PoppinsEBoldItalic tagline">
					Years
				</h1>
			</div>

			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-7xl text-6xl text-Purple font-PoppinsEBoldItalic min-w-[2.25ch] dataitem">
					{month}
				</h1>
				<h1 className="text-5xl sm:text-7xl text-OffBlack font-PoppinsEBoldItalic tagline">
					Months
				</h1>
			</div>

			<div className="flex flex-row items-center gap-4">
				<h1 className="sm:text-7xl text-6xl text-Purple font-PoppinsEBoldItalic min-w-[2.25ch] dataitem">
					{day}
				</h1>
				<h1 className="text-5xl sm:text-7xl text-OffBlack font-PoppinsEBoldItalic tagline">
					Days
				</h1>
			</div>
		</div>
	);
};

export default Output;
