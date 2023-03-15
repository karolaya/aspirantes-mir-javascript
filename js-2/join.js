function join (arreglo) {
    let space = "";
    for (let i = 0; i < arreglo.length; i++){
        space = space + " " + arreglo[i];
    }
    return space;
}

console.log(join(["esto", "es", "el", "ejemplo", "1"])) 
console.log(join(["me", "gusta", "comer", "hamburguesa", ":)"]))
console.log(join(["estoy", "feliz", "porque", "funciona"]))