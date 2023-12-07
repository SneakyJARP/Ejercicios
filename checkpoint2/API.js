
const usuario = "develhope"
const url = `https://api.github.com/users/${usuario}/repos`

async function repositorio(){
    try{
        const llamada = await fetch(url);
        const repositorio = await llamada.json();
        console.log(repositorio);
        const contenedor = document.querySelector(".container");
        const titulo = document.createElement("h1");
        contenedor.appendChild(titulo);
        titulo.textContent=`El usuario ${usuario} tiene los siguientes repositorios:`
        const listado = document.createElement("ul");
        contenedor.appendChild(listado);
        repositorio.forEach(repos=>{
            const elemento = document.createElement("li");
            elemento.textContent= repos.name;
            listado.appendChild(elemento)
        })


    } catch(err){
        console.error("ERROR",err)
    }
}

repositorio()