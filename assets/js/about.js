$(".loader").delay(1000).fadeOut("slow");
$("#overlayer").delay(1000).fadeOut("slow");

const hamburgerButton = document.querySelector(".hamburger-button2");
const overlay = document.querySelector(".overlay");

hamburgerButton.addEventListener("click", (e) => {
	e.preventDefault();
	hamburgerButton.classList.toggle("active");
	overlay.classList.toggle("visible");
});

$('a[href^="#"]').on("click", function (event) {
	var target = $(this.getAttribute("href"));
	if (target.length) {
		event.preventDefault();
		$("html, body").stop().animate(
			{
				scrollTop: target.offset().top,
			},
			1000
		);
	}
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
