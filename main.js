import { KUTYALISTA } from "./adat.js";
import { adatMegjelenit } from "./megjelenit.js";
import { rendezes } from "./rendez.js";
let irany = 1

$(() => {
  init()
});

function init(){
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
  torles(KUTYALISTA)
}

function torles(lista){
  for (let index = 0; index < lista.length; index++) {
    let TOROLELEM = $(`#t-${index}`)
    
    console.log(TOROLELEM)
    $(TOROLELEM).on("click", function(){
      let toroltElem = event.target.id
      toroltElem = toroltElem.slice(2)
      $(`#sor-${index}`).remove()
      console.log(toroltElem)
    });
  }
}