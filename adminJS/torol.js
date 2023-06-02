import { init } from "./main.js";
import { adatMegjelenit } from "./megjelenit.js";

export function torles(lista){
    for (let index = 0; index < lista.length; index++) {
      let TOROLELEM = $(`#t-${index}`)
      
      $(TOROLELEM).on("click", function(){
        let toroltElem = event.target.id
        toroltElem = toroltElem.slice(2)
        $(`#sor-${index}`).remove()
        lista.splice(index, 1)
      });
    }
    init(adatMegjelenit(lista))
  }