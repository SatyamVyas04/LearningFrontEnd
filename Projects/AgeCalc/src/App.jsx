import { useState, useRef } from "react";
import Output from "./Output";
import NextField from "./NextField";
import formSubmitAction from "./FormSubmit";
import submitImg from "./assets/icon-arrow.svg";

function App() {
	const [dayError, setDayError] = useState("Error Placeholder");
	const [monthError, setMonthError] = useState("Error Placeholder");
	const [yearError, setYearError] = useState("Error Placeholder");

	const [dayErrorView, setDayErrorView] = useState("opacity-0");
	const [monthErrorView, setMonthErrorView] = useState("opacity-0");
	const [yearErrorView, setYearErrorView] = useState("opacity-0");

	const [dayHeaderView, setDayHeaderView] = useState("text-SmokeyGrey");
	const [monthHeaderView, setMonthHeaderView] = useState("text-SmokeyGrey");
	const [yearHeaderView, setYearHeaderView] = useState("text-SmokeyGrey");

	const [OutputDate, setOutputDate] = useState("- -");
	const [OutputMonth, setOutputMonth] = useState("- -");
	const [OutputYear, setOutputYear] = useState("- -");

	const dayRef = useRef();
	const monthRef = useRef();
	const yearRef = useRef();
	const buttonRef = useRef();

	return (
		<>
			<article className="flex items-center justify-center w-dvw h-dvh bg-LightGrey">
				<article className="w-full sm:w-[720px] h-[550px] bg-OffWhite rounded-2xl rounded-br-[200px] sm:rounded-br-[300px] sm:p-6 p-2">
					<form
						onSubmit={(event) => {
							event.preventDefault();
							document.activeElement.blur();
							formSubmitAction(
								document.getElementById("DD").value,
								document.getElementById("MM").value,
								document.getElementById("YYYY").value,
								setOutputDate,
								setOutputMonth,
								setOutputYear,
								setDayError,
								setMonthError,
								setYearError,
								setDayErrorView,
								setMonthErrorView,
								setYearErrorView,
								setDayHeaderView,
								setMonthHeaderView,
								setYearHeaderView,
								dayRef,
								monthRef,
								yearRef
							);
						}}
					>
						<fieldset className="flex w-full sm:w-[80%] items-center justify-center gap-2 p-4">
							<label className="flex flex-col gap-2">
								<p
									className={`font-PoppinsBold ${dayHeaderView} text-xs sm:text-base`}
								>
									Day
								</p>
								<input
									className="InputField"
									type="text"
									pattern="[0-9]{2}"
									name="day"
									id="DD"
									maxLength={2}
									placeholder="DD"
									autoComplete="off"
									ref={dayRef}
									onChange={() => {
										NextField({
											data: document.getElementById("DD")
												.value,
											length: 2,
											nextfieldref: monthRef,
										});
									}}
								/>
								<p
									className={`font-PoppinsItalic text-LightRed text-[8px] sm:text-[12px] ${dayErrorView}`}
								>
									{dayError}
								</p>
							</label>
							<label className="flex flex-col gap-2">
								<p
									className={`font-PoppinsBold ${monthHeaderView} text-xs sm:text-base`}
								>
									Month
								</p>
								<input
									className="InputField"
									type="text"
									pattern="[0-9]{2}"
									name="month"
									id="MM"
									maxLength={2}
									placeholder="MM"
									autoComplete="off"
									ref={monthRef}
									onChange={() => {
										NextField({
											data: document.getElementById("MM")
												.value,
											length: 2,
											nextfieldref: yearRef,
										});
									}}
								/>
								<p
									className={`font-PoppinsItalic text-LightRed text-[8px] sm:text-[12px] ${monthErrorView}`}
								>
									{monthError}
								</p>
							</label>
							<label className="flex flex-col gap-2">
								<p
									className={`font-PoppinsBold ${yearHeaderView} text-xs sm:text-base`}
								>
									Year
								</p>
								<input
									className="InputField"
									type="text"
									pattern="[0-9]{4}"
									name="year"
									id="YYYY"
									maxLength={4}
									placeholder="YYYY"
									autoComplete="off"
									ref={yearRef}
									onChange={() => {
										NextField({
											data: document.getElementById(
												"YYYY"
											).value,
											length: 4,
											nextfieldref: buttonRef,
										});
									}}
								/>
								<p
									className={`font-PoppinsItalic text-LightRed text-[8px] sm:text-[12px] ${yearErrorView}`}
								>
									{yearError}
								</p>
							</label>
						</fieldset>
						<section className="flex items-center sm:-mt-8 -mt-2">
							<section className="flex-grow bg bg-LightGrey h-[1.5px]"></section>
							<button
								type="submit"
								ref={buttonRef}
								className="p-4 rounded-full bg-Purple hover:bg-OffBlack focus:bg-OffBlack"
							>
								<img src={submitImg} alt="SubmitButton" />
							</button>
							<section className="flex-grow bg bg-LightGrey h-[1.5px] sm:hidden"></section>
						</section>
					</form>
					<Output
						day={OutputDate}
						month={OutputMonth}
						year={OutputYear}
					/>
				</article>
			</article>
		</>
	);
}

export default App;
