import submitImg from "./assets/icon-arrow.svg";
import Output from "./Output";
import { useState } from "react";
import dayjs from "dayjs";

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

	const formSubmitAction = (day, month, year) => {
		let dflag = false;
		let mflag = false;
		let yflag = false;

		if (day === "") {
			setDayError("This field is required");
			setDayErrorView("opacity-100");
			setDayHeaderView("text-LightRed");
		} else if (day > 31 || day < 1) {
			setDayError("Must be a valid date");
			setDayErrorView("opacity-100");
			setDayHeaderView("text-LightRed");
		} else {
			setDayError("Error Placeholder");
			setDayErrorView("opacity-0");
			setDayHeaderView("text-SmokeyGrey");
			dflag = true;
		}

		if (month === "") {
			setMonthError("This field is required");
			setMonthErrorView("opacity-100");
			setMonthHeaderView("text-LightRed");
		} else if (month > 12 || month < 1) {
			setMonthError("Must be a valid month");
			setMonthErrorView("opacity-100");
			setMonthHeaderView("text-LightRed");
		} else {
			setMonthError("Error Placeholder");
			setMonthErrorView("opacity-0");
			setMonthHeaderView("text-SmokeyGrey");
			mflag = true;
		}

		if (year === "") {
			setYearError("This field is required");
			setYearErrorView("opacity-100");
			setYearHeaderView("text-LightRed");
		} else if (year > new Date().getFullYear()) {
			setYearError("Must be in the past");
			setYearErrorView("opacity-100");
			setYearHeaderView("text-LightRed");
		} else {
			setYearError("Error Placeholder");
			setYearErrorView("opacity-0");
			setYearHeaderView("text-SmokeyGrey");
			yflag = true;
		}

		let result = dayjs(
			`${month}/${day}/${year}`,
			"DD/MM/YYYY",
			true
		).isValid();

		if (dflag && mflag && yflag) {
			if (!result) {
				setDayError("Must be a valid date");
				setDayErrorView("opacity-100");
				setDayHeaderView("text-LightRed");
			} else {
				setDayError("Error Placeholder");
				setDayErrorView("opacity-0");
				setDayHeaderView("text-SmokeyGrey");

				let dob = dayjs(`${month}/${day}/${year}`, "DD/MM/YYYY", true);
				let today = dayjs();
				let outputYears = today.diff(dob, "year");
				let outputMonths = today.diff(
					dob.add(outputYears, "year"),
					"month"
				);
				let outputDays = today.diff(
					dob.add(outputYears, "year").add(outputMonths, "month"),
					"day"
				);

				setOutputYear(outputYears.toString().padStart(2, "0"));
				setOutputMonth(outputMonths.toString().padStart(2, "0"));
				setOutputDate(outputDays.toString().padStart(2, "0"));
			}
		}
	};

	return (
		<>
			<article className="flex items-center justify-center w-dvw h-dvh bg-LightGrey">
				<article className="w-full sm:w-[750px] h-[600px] bg-OffWhite sm:rounded-xl rounded-2xl sm:rounded-br-[40%] sm:p-6 p-2">
					<form>
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
									name="date"
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
									name="date"
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
									name="date"
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
								type="button"
								onClick={() =>
									formSubmitAction(
										document.getElementById("DD").value,
										document.getElementById("MM").value,
										document.getElementById("YYYY").value
									)
								}
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
