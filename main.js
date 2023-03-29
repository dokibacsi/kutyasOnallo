import { KUTYALISTA } from "./adat.js";
import { adatMegjelenit } from "./megjelenit.js";
import { rendezes } from "./rendez.js";

$(()=>{
    adatMegjelenit(KUTYALISTA)

    const NEVELEM = $("#nev");
    NEVELEM = NEVELEM.event.target;
    NEVELEM.on("click", ()=>{
        rendezes(KUTYALISTA, "nev")
    })
})