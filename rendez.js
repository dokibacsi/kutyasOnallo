export function rendezes(lista, kulcs){
    lista.sort(a,b, ()=>{
        return a[kulcs].localeCompare(b[kulcs]);
    })
}