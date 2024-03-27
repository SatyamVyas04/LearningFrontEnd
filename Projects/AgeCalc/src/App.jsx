import submitImg from "./assets/icon-arrow.svg";

function App() {
	return (
		<>
			<article className="flex items-center justify-center w-dvw h-dvh bg-LightGrey">
				<article className="w-full sm:w-[600px] h-[500px] bg-OffWhite sm:rounded-xl rounded-2xl sm:rounded-br-[40%] p-6">
					<form>
						<fieldset className="flex w-full sm:w-[80%] items-center justify-center gap-2 p-4">
							<label className="flex flex-col gap-2">
								<p className="font-PoppinsBold text-SmokeyGrey text-xs sm:text-sm">
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
									required
								/>
								<p className="font-PoppinsItalic text-LightRed text-[8px] opacity-0">
									Error Placeholder
								</p>
							</label>
							<label className="flex flex-col gap-2">
								<p className="font-PoppinsBold text-SmokeyGrey text-xs sm:text-sm">
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
									required
								/>
								<p className="font-PoppinsItalic text-LightRed text-[8px] opacity-0">
									Error Placeholder
								</p>
							</label>
							<label className="flex flex-col gap-2">
								<p className="font-PoppinsBold text-SmokeyGrey text-xs sm:text-sm">
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
									required
								/>
								<p className="font-PoppinsItalic text-LightRed text-[8px] opacity-0">
									Error Placeholder
								</p>
							</label>
						</fieldset>
						<div class="flex items-center sm:-mt-8 -mt-4">
							<div class="flex-grow bg bg-LightGrey h-[1.5px]"></div>
							<button
								type="button"
								className="p-4 rounded-full bg-Purple hover:bg-black"
							>
								<img src={submitImg} alt="SubmitButton" />
							</button>
							<div class="flex-grow bg bg-LightGrey h-[1.5px] sm:hidden"></div>
						</div>
					</form>
				</article>
			</article>
		</>
	);
}

export default App;
