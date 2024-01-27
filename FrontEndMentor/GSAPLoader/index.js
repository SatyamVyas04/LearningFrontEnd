const tl = gsap.timeline({
	defaults: { duration: 0.8, ease: "power4.out" },
});

// GSAP Initial Settings
gsap.set("g", {
	autoAlpha: 1,
});

gsap.set("svg", {
	scale: 0.6,
});

// GSAP Main Timeline
tl.to("svg", {
	scale: 0.75,
	duration: 1.6,
	delay: 0.8,
})
	.from(
		"#FinalDiamond .st1",
		{
			yPercent: -125,
			xPercent: -125,
			stagger: 0.4,
			duration: 0.8,
			opacity: 0,
		},
		"<"
	)
	.from(
		"#FinalDiamond .st2",
		{
			yPercent: 125,
			xPercent: -125,
			stagger: 0.4,
			duration: 0.8,
			opacity: 0,
		},
		"<"
	)
	.from(
		"#SPIT .letter",
		{
			yPercent: -200,
			stagger: 0.4,
			duration: 0.8,
			opacity: 0,
		},
		"-=0.8"
	)
	.from(
		"#CSI .letter",
		{
			xPercent: 200,
			stagger: 0.4,
			duration: 0.8,
			opacity: 0,
		},
		"-=.8"
	)
	.to(
		"svg",
		{
			yPercent: -200,
		},
		"+=1.2"
	)
	.to(
		".loader-page",
		{
			scaleY: 0,
			transformOrigin: "top",
		},
		"<"
	);
