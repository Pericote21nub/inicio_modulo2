// Bucles
// Un ciclo repetitivo, puede tener límite o puede ser
// infinito

// for - por
// parámetros / argumento: cuando la función necesita
// expresiones, variables, para poder funcionar

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("----------------")

// Usa un for para mostrar en consola
// los números que sean pares del 1 al 10

// Forma 1
console.log("Forma 1:")
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}

// Forma 2
console.log("Forma 2:")
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("--------------")

for (let i = 10; i > 0; i -= 4) {
    console.log(i)
}

console.log("---------")

let suma = 0

for (let i = 1; i <= 4; i++) {
    suma += i * 2
}

console.log(suma)

console.log("---------")

let contador = 0
while (contador < 10) {
    console.log(contador)
    contador++
}