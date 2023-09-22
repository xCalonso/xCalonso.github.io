const value = document.querySelector("#value")
const input = document.querySelector("#input")
const circularInput = document.querySelector('.circular');
const solucion = document.querySelector("#solucion")
const scroll = document.querySelector("#scroll");
var audio = document.getElementById("myAudio");

const medicamentos = {Anectine: "1mg·kg",
                      Atropina: "",
                      Dexametasona: "",
                      Fentanilo: "",
                      Lidocaina: "1mg·kg",
                      Ondansetron: "",
                      Propofol: "",
                      Rocuronio: "",
                      Ibuprofeno: "",
                      Enantyum: "",
                      Nolotil: "40mg·kg",
                      Paracetamol: ""
                    }
const formulas = {Anectine: 1,
                  Atropina: "",
                  Dexametasona: "",
                  Fentanilo: "",
                  Lidocaina: 1,
                  Ondansetron: "",
                  Propofol: "",
                  Rocuronio: "",
                  Ibuprofeno: "",
                  Enantyum: "",
                  Nolotil: 40,
                  Paracetamol: ""
                }

value.value = input.value
calcularMedicina()
gradiente()
input.addEventListener("input", (event) => {
  value.value = event.target.value
  calcularMedicina()
  gradiente();
})

value.addEventListener('change', () => {
  gradiente()
});

value.addEventListener("keyup", (event) => {
  if (event.key == "Enter"){
    calcularMedicina()
  }
})

function calcularMedicina(){
  calculos = ""
  for (let i in medicamentos){
    sol = formulas[i] * value.value
    calculos += `<div class="medicamento">
                    <div class="formula">
                      <h3>` + i + `</h3>
                      <p>` + medicamentos[i] + `</p>
                    </div>
                    <div class="calculo">
                      <p id="solucion">` + sol + `</p>
                    </div>
                  </div>`
  }
  scroll.innerHTML = calculos
}

function gradiente(){
  const inputValue = value.value;
  const maxInputLength = 50.01; // Puedes ajustar esto según tus necesidades
  const circleFillPercentage = (inputValue / maxInputLength) * 100;

  circularInput.style.backgroundImage = `conic-gradient(blue 0% ${circleFillPercentage}%, transparent ${circleFillPercentage}% 100%)`;

  // Reproducir el sonido cuando el valor del rango cambia
  //audio.currentTime = 0; // Reiniciar el audio si ya se está reproduciendo
  audio.play();
}