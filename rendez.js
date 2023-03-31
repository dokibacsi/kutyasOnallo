import { adatMegjelenit } from "./megjelenit.js";

export function rendezes(lista, kulcs) {
  if (typeof lista[0][kulcs] === "szam") {
    szamraRendez(lista, kulcs);
  } else {
    szovegreRendez(lista, kulcs);
  }
}

export function szamraRendez(lista) {
  lista.sort((elso, masodik) => {
    return elso.szam - masodik.szam;
  });
}

export function szovegreRendez(lista, kulcs) {
  lista.sort((elso, masodik) => {
    let ertek = 1;
    if (elso[kulcs] < masodik[kulcs]) {
      ertek = -1;
    } else {
      ertek = 1
    }
    return ertek;
  });
}