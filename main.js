const demo = document.getElementById("demo");

function myFunction(e) {
  const x = e.clientX;
  const y = e.clientY;
  demo.classList.remove('reverse-animation');
  demo.classList.add('animation');
  demo.style.transform = `translate(${x}px, ${y}px)`;
}

function clearCoor() {
  console.log(1);
  demo.classList.remove('animation');
  demo.classList.add('reverse-animation');
}