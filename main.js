import { kulcsLista, KUTYALISTA } from "./adat.js";
import { adatMegjelenit } from "./megjelenit.js";
import { rendezes } from "./rendez.js";

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
    console.log(kulcs.slice(3))
    rendezes(KUTYALISTA, kulcs.slice(3));
    init()
  });
}