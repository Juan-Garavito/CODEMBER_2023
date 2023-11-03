import { TEXTO_ENCRIPTADO } from "./TEXTO_ENCRIPTADO.js"

let textoSeparado = TEXTO_ENCRIPTADO.toLowerCase().split(" ")
const palabrasUnicas = Array.from(new Set(textoSeparado))
const palabrasConteo = {}

palabrasUnicas.forEach(i=>{
    textoSeparado.forEach(j=>{
        if(i.includes(j)){
            palabrasConteo[`${i}`] = palabrasConteo[`${i}`] == null ? 1 : palabrasConteo[`${i}`]+ 1
        }
    })
})

let result = ""
let cont = 0
palabrasUnicas.forEach(palabra=>{
    result += `${palabra}${palabrasConteo[palabra]}\n`
    cont += palabrasConteo[palabra]
})

document.querySelector(".resultado").innerHTML = result