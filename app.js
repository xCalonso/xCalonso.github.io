const value = document.querySelector("#value")
const input = document.querySelector("#input")
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
input.addEventListener("input", (event) => {
  value.value = event.target.value
  calcularMedicina()
})

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