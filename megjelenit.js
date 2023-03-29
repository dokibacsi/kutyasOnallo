import { kulcsLista } from "./adat.js";

export function adatMegjelenit(lista) {
  /* let hely = $("article");
  let txt = "<section><table class='table-responsive'><tr><th>név</th><th>kor</th><th>fajta</th></tr>";
  for (let index = 0; index < lista.length; index++) {
    txt += "<tr>"
    for (const KULCS in lista[index]) {
      txt += `<td>${lista[index][KULCS]}</td>`;
    }
    txt += "</tr>"
  }
  txt += "</table></section>";
  return hely.append(txt); */
  
  let txt = "<div class = 'table-responsive'>"
  txt += "<table class= 'table table-striped table-bordered table-hover'>";
  txt += "<thead class = 'table-dark'><tr>";
  for (const key in kulcsLista){
    txt += `<th id ='${key}'> ${kulcsLista[key]}</th>`; 
  }
  txt += "<th></th></tr></thead>"
  for (let index = 0; index < lista.length; index++) {
    txt += '<tr>'
    const object = lista[index];
    for (const key in object){
      const element = object[key]
      if(key == nev){
        txt += `<th> ${element} </th>`
      } else {
        txt += `<td> ${element} </td>`
      }
    }
    txt += `<td><button class = 'btn-torol' id="t${index}"> ❌ </button></td>`;
    txt += `</tr>`    
  }
  txt += '</table>'
  txt += '</div>'
  
  let hely = $('article')
  return hely.append(txt);
}
