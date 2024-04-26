document.getElementById("titulo").innerHTML = "modificando el titulo";
document.body.style.color="orange";

// const ntitulo= document.createElement("h1")
// ntitulo.textContent="holia"
// ntitulo.addEventListener("click",function(){
//     this.style.color="orange";
// })
// document.body.appendChild(ntitulo);

const nuevotitulo=document.createElement("h2");
nuevotitulo.textContent="Click para cambiar color!!";
nuevotitulo.addEventListener("click",function(){
    this.style.color="brown";
})
document.body.appendChild(nuevotitulo); //me falta que con el click cambie a cafe