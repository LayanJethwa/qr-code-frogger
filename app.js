vw = window.innerWidth;
vh = window.innerHeight;
j = 0;
s = document.getElementById("s");
document.getElementById("h").innerHTML = "High score: " + (localStorage['h'] | "0");

function r(m) {
	return Math.floor(Math.random() * m)
};

function w(o, d, t, v) {
	c = document.createElement("div");
	c.setAttribute('class', 'c');
	c.style.background = ["red", "orange", "yellow", "green", "blue", "purple", "pink"][r(7)];
	c.style.setProperty('--d', d);
	c.style.setProperty('--v', v);
	if (d == 1) {
		c.style.right = '-1vw'
	} else {
		c.style.left = '-1vw'
	}
	c.style.top = t + 'px';
	o.appendChild(c)
};

function q(x) {
	o = document.createElement("div");
	o.style.bottom = ((vw * 0.02) + (x * vw)) + 'px';
	o.setAttribute('class', 'r');
	for (j = 0; j < 3; j++) {
		d = r(2);
		v = (r(5) + 1) * 2;
		for (i = 0; i < (vw / 300); i++) {
			setTimeout(w, (3000 * i) + r(2000), o, d, (j / 50) * vw, v)
		}
	}
	document.body.appendChild(o)
};
for (x = 0; x < (vh / (vw * 0.08)); x++) {
	q(x * 0.08)
};

function a() {
	document.querySelectorAll('div.c').forEach((i) => {
		v = parseInt(getComputedStyle(i).getPropertyValue('--v'));
		l = parseFloat(getComputedStyle(i).left) + v;
		g = parseFloat(getComputedStyle(i).right) + v;
		d = getComputedStyle(i).getPropertyValue('--d');
		if (d == 0) {
			i.style.left = l + 'px'
		} else {
			i.style.right = g + 'px'
		}
		if (l > vw || g > vw) {
			w(i.parentElement, d, parseFloat(getComputedStyle(i).top), v);
			i.remove()
		};
		c = i.getBoundingClientRect();
		p = document.getElementById('p').getBoundingClientRect();
		if (Math.abs(c.x - p.x) < (c.x < p.x ? p.width : c.width) && Math.abs(c.y - p.y) < (c.y < p.y ? p.height : c.height)) {
			h = Math.max(j, Number(localStorage['h']) | 0);
			if (h == j) {
				m = "new "
			} else {
				m = ""
			}
			alert(`Oh no, you died!\nYour score was ${j}.\nReload the page to play again.\nYou have a ${m}high score of ${h}!`);
			localStorage['h'] = h;
			clearInterval(n);
			location.reload()
		}
	})
}
document.body.onkeyup = function(e) {
	if (e.code == "Space") {
		j++;
		s.innerHTML = "Score: " + j;
		if (j % 4 == 1) {
			q(0.8)
		}
		document.querySelectorAll('div.r').forEach((i) => {
			i.style.bottom = (parseFloat(getComputedStyle(i).bottom) - (vw * 0.02)) + 'px'
		})
	}
};
n = window.setInterval(a, 50)