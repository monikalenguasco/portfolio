const bg = document.querySelector(".bg");
const textLoading = document.querySelector(".text-loading");

let load = 0;
let int = setInterval(zooming, 30);

function zooming () {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    textLoading.innerHTML = `${load}%`;
    textLoading.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.transform = `scale(${scale(load, 0, 100, 100, 115)}%)`;

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}