import { KUTYALISTA } from "../adat.js";
import { adatMegjelenit } from "./megjelenit.js";


$(() => {
    init()
})

function init(){
    const HELY = $('#ashop')
    HELY.html(adatMegjelenit(KUTYALISTA))
    adatMegjelenit(KUTYALISTA)
}
