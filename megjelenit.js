export function adatMegjelenit(lista) {
  let hely = $("article");
  let txt = "<section><table><tr><th>név</th><th>kor</th><th>fajta</th></tr>";
  for (let index = 0; index < lista.length; index++) {
    txt += "<tr>"
    for (const KULCS in lista[index]) {
      txt += `<td>${lista[index][KULCS]}</td>`;
    }
    txt += "</tr>"
  }
  txt += "</table></section>";
  return hely.append(txt);
}
