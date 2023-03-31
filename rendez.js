export function rendezes(lista, kulcs, irany) {
  if (typeof lista[0][kulcs] === "szam") {
    szamraRendez(lista, irany);
  } else {
    szovegreRendez(lista, kulcs, irany);
  }
}

export function szamraRendez(lista, irany) {
  lista.sort((elso, masodik) => {
    return elso.szam - masodik.szam;
  });
}

export function szovegreRendez(lista, kulcs, irany) {
  lista.sort((elso, masodik) => {
    let ertek = 1;
    if (elso[kulcs] < masodik[kulcs]) {
      ertek = -1;
    }
    ertek *= irany
    return ertek
  });
}