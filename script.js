var capturaFormulario = document.getElementById("formulario")
capturaFormulario.addEventListener('submit',function(e){
    e.preventDefault()
})



var precio = document.getElementById("total").textContent
cantidad = document.getElementById("cantidad");
//categoria = document.getElementById(categoria).value
//console.log(categoria)

/*function resumen(){
    var total = 200 * cantidad.value
    console.log(total)
    document.getElementById("total").innerText = "Total a pagar: $" + Number(total)
}





var total = 0
var precio = document.getElementById("total").textContent
cantidad = document.getElementById("cantidad")*/
categoria = document.getElementById("categoria")

var enviar = document.getElementById("enviar")
enviar.addEventListener('click',resumen)


function resumen(){
    var total = 200 * cantidad.value
    switch (categoria.value){
        case "Estudiante":
            total = total * 20 / 100
            break;

        case "Trainee":
            total = total * 50 / 100
            break;

        case "Junior":
            total = total * 85 / 100
            break;

        default:
            break;
    }
    document.getElementById("total").innerText = "Total a pagar: $" + Number(total)
    console.log(total)
}









