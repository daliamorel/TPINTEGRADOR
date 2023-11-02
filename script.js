var total = 0
var precio = document.getElementById("total").textContent
cantidad = document.getElementById("cantidad")
categoria = document.getElementById("categoria").value

var enviar = document.getElementById("enviar")
enviar.addEventListener('click',calcularPrecio)


function calcularPrecio(){
    switch (categoria){
        case "Estudiante":
    console.log(categoria)

            total = (cantidad * 200) * 20 / 100
            break;

        case "Trainee":
            total = (cantidad * 200) * 50 / 100
            break;

        case "Junior":
            total = (cantidad * 200) * 85 / 100
            break;

        default:
            break;
    }
    precio = "Total a pagar: $" + total
    console.log(total)
}
console.log(cantidad.value)
console.log(cantidad)
console.log(200 * cantidad.value)








