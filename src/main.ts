import "./style.css";
import solve from "./solve";

// select elements
const solveBtn = document.querySelector<HTMLButtonElement>("button")!;
const textarea = document.querySelector<HTMLTextAreaElement>("textarea")!;
const main = document.querySelector<HTMLElement>("main")!;

// a function used to respond to user input with a solution
function respond(): void {
	const input = textarea.value;

	main.innerHTML += `<div class="right"><div>${input.replace(/\n/g, "<br/>")}</div></div>`;

	const answer = solve(input);

	main.innerHTML += `<div class="left"><div>${answer}</div></div>`;

	main.scrollTo(0, main.scrollHeight);

	textarea.value = "";
}

// trigger response when user clicks the button
solveBtn.addEventListener("click", () => {
	if (!textarea.value.length) {
		return;
	}

	respond();
});

// capture CTRL+Enter to trigger the click event on the button
textarea.addEventListener("keyup", (ev) => {
	if (ev.ctrlKey && ev.key.toLowerCase() === "enter") {
		ev.preventDefault();

		solveBtn.click();
	}
});
