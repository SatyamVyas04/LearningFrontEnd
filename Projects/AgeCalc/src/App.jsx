import { useState } from "react";
import Output from "./Output";
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

	return (
		<>
			<article className="flex items-center justify-center w-dvw h-dvh bg-LightGrey">
				<article className="w-full sm:w-[750px] h-[600px] bg-OffWhite sm:rounded-xl rounded-2xl sm:rounded-br-[40%] sm:p-6 p-2">
					<form
						onSubmit={(event) => {
							event.preventDefault();
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
								setYearHeaderView
							);
						}}
					>
						<fieldset className="flex w-full sm:w-[80%] items-center justify-center gap-2 p-4">
							<label className="flex flex-col gap-2">
								<p
									className={`font-PoppinsBold ${dayHeaderView} text-xs sm:text-sm`}
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
								/>
								<p
									className={`font-PoppinsItalic text-LightRed text-[8px] sm:text-[12px] ${dayErrorView}`}
								>
									{dayError}
								</p>
							</label>
							<label className="flex flex-col gap-2">
								<p
									className={`font-PoppinsBold ${monthHeaderView} text-xs sm:text-sm`}
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
								/>
								<p
									className={`font-PoppinsItalic text-LightRed text-[8px] sm:text-[12px] ${monthErrorView}`}
								>
									{monthError}
								</p>
							</label>
							<label className="flex flex-col gap-2">
								<p
									className={`font-PoppinsBold ${yearHeaderView} text-xs sm:text-sm`}
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
								className="p-4 rounded-full bg-Purple hover:bg-OffBlack"
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
