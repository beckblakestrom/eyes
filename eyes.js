const balls = document.getElementsByClassName("ball");

document.onmousemove = (event) => {
	const x = (event.clientX * 100) / window.innerWidth + "%";
	const y = (event.clientY * 100) / window.innerHeight + "%";

	for (i = 0; i < 2; i++) {
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].transform = "translate(-" + x + ",-" + y + ")";
	}
};

// 	var div2 = document.createElement("div");
// 	div2.className = "eye";
// document.getElementsByClassName('eyes')[0].appendChild(div2);

// 	var div3 = document.createElement("div");
// 	div3.className = "ball";
// document.getElementsByClassName('eye')[1].appendChild(div3);
