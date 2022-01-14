const errMsg = document.querySelector(".error-msg");
const numContainer = document.querySelector(".num-container");

let v1;
let v2;

function showNum(num) {
	numContainer.style.display = "block";
	numContainer.innerHTML = `Your Number is <h3>${num}<h3>`;
	// numContainer.classList.add("err");
}

function getnum(v1, v2) {
	let diff = +v2 - +v1;

	let randomNum = +Math.floor(Math.random() * diff) + +v1;

	showNum(randomNum);
}

function validate_inputs() {
	errMsg.style.display = "none";
	const n1 = document.querySelector("#n1");
	const n2 = document.querySelector("#n2");
	let iv1 = +n1.value;
	let iv2 = +n2.value;
	dv = iv2 - iv1;
	if (!(iv2 - iv1)) {
		v1 = iv2;
		v2 = iv1;
	} else {
		v1 = iv1;
		v2 = iv2;
	}

	if (v1 == 0 || v2 == 0) {
		errMsg.style.display = "block";
		errMsg.innerHTML = "The number should not be 0";
		errMsg.classList.add("err");
	} else if (v1 == v2) {
		errMsg.style.display = "block";
		errMsg.classList.add("warning");
		errMsg.innerHTML =
			"The difference between the numbers should be more than or equal to 2";
		// console.log("diff");
	} else if (v1 == "" || v2 == "") {
		errMsg.style.display = "block";
		errMsg.innerHTML = "Please Enter a number";
		errMsg.classList.add("warning");
	} else {
		getnum(v1, v2);
	}
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	validate_inputs();
});
