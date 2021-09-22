const fs = require('fs');
//const path = require('path');

bTareas = (n) => {

let opcion = process.argv[2];
let propiedad = JSON.parse( fs.readFileSync(__dirname + "/tareas.json", "utf-8"));

let metodoLeer = ()=> {
    propiedad.forEach( (value, i, array) => console.log(`${i}. ${propiedad[i].tarea} - ${propiedad[i].estado}`));
    console.log(`.....      ===>End<===`); console.log(`\n-----Tareas Leidas-----`)}

switch (n){
    case 'listar':
    metodoLeer()        
    break;

    case undefined:
    return '\nAtención - Tienes que pasar una acción';

    case 'crear':
        let crea = process.argv[3]
        let escribirJSON = (arrayt) => {
            let arraytJSON = JSON.stringify(arrayt, null, 2);
            fs.writeFileSync("./tareas.json", arraytJSON, 'utf-8');
            console.log(arraytJSON)
            return '\ntareas guardadas'
        }
        
        let guardarTareas = (objetot) => {
        propiedad.push(objetot);
        escribirJSON(propiedad);
        }

        objetot ={
            tarea: crea,
            estado: "pendiente"
        }
        guardarTareas(objetot)
    return `\n------Tarea creada------`

    case 'filtrar':
    
        let filtra = process.argv[3]
        let filtarPorEstado = () => {
        let filtrado = propiedad.filter((value) => value.estado == filtra);
        console.log(`\n`);
        filtrado.forEach( (value, i, array) => console.log(`${i}. ${filtrado[i].tarea} - ${filtrado[i].estado}`))
        console.log (`\nTareas filtradas con estado: "${filtra}"`); }
      
         filtarPorEstado();
     
    break;
    default: 
    return 'no entiendo que quieres hacer';
}

}





module.exports = bTareas;