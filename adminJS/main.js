import { KUTYALISTA } from "../adat.js";
import { adatMegjelenit } from "./megjelenit.js";
import { rendezes } from "./rendez.js";
import { szures } from "./szures.js";

let irany = 1

$(() => {
  init()
});

export function init(){
  const HELY = $("#tbl");
  HELY.html(adatMegjelenit(KUTYALISTA));
  adatMegjelenit(KUTYALISTA);
  const FEJLEC = $('th');

  $(FEJLEC).on("click", () => {
    let kulcs = event.target.id;
    kulcs = kulcs.slice(3)
    rendezes(KUTYALISTA, kulcs, irany);
    
    irany *= -1
    
    init()
    
  });
  funkciok(KUTYALISTA)
}

function funkciok(lista){
  if(typeof torles === 'function') {
    torles(lista)
  }
  if(typeof szuresekNevre === 'function'){
    szuresekNevre(lista)
  }
  if(typeof szuresekFajtara === 'function'){
    szuresekFajtara(lista)
  }
  if(typeof szuresekKorra === 'function'){
    szuresekKorra(lista)
  }
  if(typeof felivtel === 'function'){
    felivtel(lista)
  }
}

/*if($.isFunction(torles)) {
  torles(lista)
}
if($.isFunction(szuresekNevre)){
  szuresekNevre(lista)
}
if($.isFunction(szuresekFajtara)){
  szuresekFajtara(lista)
}
if($.isFunction(szuresekKorra)){
  szuresekKorra(lista)
}
if($.isFunction(felivtel)){
  felivtel(lista)
}*/


function szuresekNevre(lista){
  const NEVRE = $('#nev')
  $('#nev').on("keyup", ()=>{
    let nevErtek = NEVRE.val()
    let szurtLista = szures(lista, "nev", nevErtek)
    let tartalom = adatMegjelenit(szurtLista)
    $('table').replaceWith(tartalom)
  })
}

function szuresekFajtara(lista){
  const FAJTA = $('#fajta')
  $('#fajta').on("keyup", ()=>{
    let fajErtek = FAJTA.val()
    let szurtLista = szures(lista, "fajta", fajErtek)
    let tartalom = adatMegjelenit(szurtLista)
    $('table').replaceWith(tartalom)
  })
}

function szuresekKorra(lista){
  const KORRA = $('#kor')
  $('#kor').on("keyup", ()=>{
    let korErtek = KORRA.val()
    let szurtLista = szures(lista, "kor", korErtek)
    let tartalom = adatMegjelenit(szurtLista)
    $('table').replaceWith(tartalom)
  })
}

function torles(lista){
  for (let index = 0; index < lista.length; index++) {
    let TOROLELEM = $(`#t-${index}`)
    
    $(TOROLELEM).on("click", function(){
      let toroltElem = event.target.id
      toroltElem = toroltElem.slice(2)
      $(`#sor-${index}`).hide()
      lista.splice(index, 1)
    });
  }
}

function felivtel(lista){
  const KOR = $('#korBe')
  const NEV = $('#nevBe')
  const FAJTA = $('#fajtaBe')
  $('#felvisz').on('click', ()=>{
    let nevErtek = NEV.val()
    let korErtek = KOR.val()
    let fajErtek = FAJTA.val()
    lista.push({nevErtek, fajErtek, korErtek})
    let tartalom = adatMegjelenit(lista)
    $('table').replaceWith(tartalom)
  })
}
