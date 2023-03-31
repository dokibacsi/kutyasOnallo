import { kulcsLista } from "./adat.js";

export function adatMegjelenit(lista) {

  let txt = "<div class = 'table-responsive'>"
  txt += "<table class= 'table table-striped table-bordered table-hover'>";
  txt += "<thead class = 'table-dark'><tr>";
  for (const key in kulcsLista){
    txt += `<th id ='tb-${key}'>${kulcsLista[key]}⇅</th>`; 
  }
  txt += "<th></th></tr></thead>"
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr id='sor-${index}'>`
    const object = lista[index];
    for (const key in object){
      const element = object[key]
      if(key == nev){
        txt += `<th>${element}</th>`
      } else {
        txt += `<td>${element}</td>`
      }
    }
    txt += `<td><button class = 'btn-torol' id="t-${index}"> ❌ </button></td>`;
    txt += `</tr>`    
  }
  txt += '</table>'
  txt += '</div>'
  
  return txt
}
