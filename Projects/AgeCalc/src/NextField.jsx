function NextField({ data, length, nextfieldref }) {
	if (data.toString().length === length) {
		nextfieldref.current.focus();
	}
}

export default NextField;
