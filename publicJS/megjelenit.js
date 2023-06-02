import { kulcsLista } from "../adat.js";

export function adatMegjelenit(lista) {
    let txt = ''
    for (let index = 0; index < lista.length; index++) {
        txt += '<div class="card ">'
        txt += '<div class= "card-body" >'
        txt += `<h4 class = 'card-title'>${lista[index].nev}</h4>`
        txt += `<p class = 'card-text'>Fajta: ${lista[index].fajta}</p>`
        txt += `<p class = 'card-text'>Kor: ${lista[index].kor}</p>`
        txt += '</div></div></div>'
    } 
    return txt;
  }
  