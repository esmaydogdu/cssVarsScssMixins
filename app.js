const changeHue = document.getElementById("hue");
const defaultHueVal = 220;
const changeDarken = document.getElementById("darken");
const defaultDarkenVal = 50;

changeHue.value = defaultHueVal;
changeHue.addEventListener("mousemove", (e) => {
  let x = e.target.value;
  document.querySelector(".hueValue").innerText = x;
  document.documentElement.style.setProperty("--color-primary-h", `${x}`);
});

changeDarken.value = defaultDarkenVal;
changeDarken.addEventListener("mousemove", (e) => {
  let y = e.target.value;
  document.querySelector(".darkenValue").innerText = y;
  document.documentElement.style.setProperty("--color-primary-l", `${y}%`);
});
