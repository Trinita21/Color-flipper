function random() {
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  for (i = 0, r = ""; i < 6; i++) {
    r += arr[Math.floor(Math.random() * 16)];
  }
  r = "#" + r;
  console.log(r);
  document.querySelector("body").style.backgroundColor = r;
}
random();

const flip = document.querySelector("#flip-button");
flip.addEventListener("click", random);
