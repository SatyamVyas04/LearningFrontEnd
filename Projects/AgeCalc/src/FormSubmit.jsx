import dayjs from "dayjs";

const formSubmitAction = (
	day,
	month,
	year,
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
) => {
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

	let result = dayjs(`${month}/${day}/${year}`, "DD/MM/YYYY", true).isValid();

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

export default formSubmitAction;