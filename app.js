const value = document.querySelector("#value")
const input = document.querySelector("#input")
const circularInput = document.querySelector('.circular');
const select = document.querySelector("#medicamentos")
const formula = document.querySelector("#formula")
const solucion = document.querySelector("#solucion")

const medicamentos = {anectine: "1mg·kg",
                      atropina: "",
                      dexametasona: "",
                      fentanilo: "",
                      lidocaina: "1mg·kg",
                      ondansetron: "",
                      propofol: "",
                      rocuronio: "",
                      ibuprofeno: "",
                      enantyum: "",
                      nolotil: "40mg·kg",
                      paracetamol: ""
                    }
const formulas = {anectine: 1,
                  atropina: "",
                  dexametasona: "",
                  fentanilo: "",
                  lidocaina: 1,
                  ondansetron: "",
                  propofol: "",
                  rocuronio: "",
                  ibuprofeno: "",
                  enantyum: "",
                  nolotil: 40,
                  paracetamol: ""
                }

value.value = input.value
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

formula.textContent = medicamentos[select.value]
select.addEventListener("change", (event) => {
  formula.textContent = medicamentos[event.target.value]
  calcularMedicina()
})

function calcularMedicina(){
  var aux = formulas[select.value] * value.value
  solucion.textContent = aux
}

function gradiente(){
  const inputValue = value.value;
  const maxInputLength = 50.01; // Puedes ajustar esto según tus necesidades
  const circleFillPercentage = (inputValue / maxInputLength) * 100;

  circularInput.style.backgroundImage = `linear-gradient(0deg, blue 0% ${circleFillPercentage}%, transparent ${circleFillPercentage}% 100%)`;
}