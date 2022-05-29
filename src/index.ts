let nameArray = new Array(2);
let numArray: number[] = new Array(3);
let i: number;

for (i = 0; i < 2; i++) {
  nameArray[i] = prompt(
    "ingrese el nombre de la persona asignado a la posicion " + i
  );
}
for (i = 0; i < 3; i++) {
  numArray[i] = Number(
    prompt("ingrese el valor numerico asignado a la posicion " + i)
  );
}
for (i = 0; i < 2; i++) {
  console.log("el nombre ingresado en la posicion " + i, "es: " + nameArray[i]);
}
for (i = 0; i < 3; i++) {
  console.log("el numero ingresado en la posicion " + i, "es: " + numArray[i]);
}
