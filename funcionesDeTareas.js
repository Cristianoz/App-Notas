const fs = require('fs');
//const path = require('path');

bTareas = (n) => {


tareasFunciones ={
    leer: metodoLeer = ()=> {
        console.log(`
                ~~~~~~~~~~~~~Listando tareas~~~~~~~~~~~~`)
        propiedad.forEach( (value, i, array) => 
        // imprimir comentarios y hora de creacion 5 tab
        console.log(`${i}. ${propiedad[i].tarea} - ${propiedad[i].estado}`)); 
        console.log(`.....      ===>End<===`); console.log(`\n-----Tareas Leidas-----`)},
    // hacer funcion de imprimir 
    escribirJson: escribirJson = (arrayt) => {
        let arraytJSON = JSON.stringify(arrayt, null, 2);
        fs.writeFileSync("./tareas.json", arraytJSON, 'utf-8');
        console.log(arraytJSON) // imprimir previsuUAL DE LA TAREA
        return '\ntareas guardadas'},

    guardarTareas: guardarTareas = (objetot) => {
        propiedad.push(objetot);
        this.escribirJson(propiedad);},

    filtrar: filtarPorEstado = () => {
        let filtrado = propiedad.filter((value) => value.estado == filtra);
        console.log(`\n`);
        filtrado.forEach( (value, i, array) => console.log(`${i}. ${filtrado[i].tarea} - ${filtrado[i].estado}`))
        console.log (`\nTareas filtradas con estado: "${filtra}"`); }

}


let propiedad = JSON.parse( fs.readFileSync(__dirname + "/tareas.json", "utf-8"));

objetot ={
    tarea: " ",
    estado: "pendiente"
    // poner comentarios a la tarea.
    // poner la fecha de creacion.
}



/*let metodoLeer = ()=> {
    propiedad.forEach( (value, i, array) => console.log(`${i}. ${propiedad[i].tarea} - ${propiedad[i].estado}`)); // imprimir comentarios y hora de creacion 
    console.log(`.....      ===>End<===`); console.log(`\n-----Tareas Leidas-----`)}*/

switch (n){
    case 'listar':
    tareasFunciones.leer()       
    break;

   

    case 'crear':
       // let crea = process.argv[3] // ingresar por consola el estado y nombre de la tarea
        /*let escribirJSON = (arrayt) => {
            let arraytJSON = JSON.stringify(arrayt, null, 2);
            fs.writeFileSync("./tareas.json", arraytJSON, 'utf-8');
            console.log(arraytJSON)
            return '\ntareas guardadas'
        }
        
        /*let guardarTareas = (objetot) => {
        propiedad.push(objetot);
        escribirJSON(propiedad);
        }

        objetot ={
            tarea: crea,
            estado: "pendiente"
            // poner comentarios a la tarea.
            // poner la fecha de creacion.}*/

    tareasFunciones.guardarTareas(objetot)
       // guardarTareas(objetot)
    console.log(`\n------Tarea creada------`);
    break;

    case 'filtrar':
    
        /*let filtra = process.argv[3]
        let filtarPorEstado = () => {
        let filtrado = propiedad.filter((value) => value.estado == filtra);
        console.log(`\n`);
        filtrado.forEach( (value, i, array) => console.log(`${i}. ${filtrado[i].tarea} - ${filtrado[i].estado}`))
        console.log (`\nTareas filtradas con estado: "${filtra}"`); }*/
      
    tareasFunciones.filtar()
     
    break; 

    case undefined:
    console.log('\nAtención - Tienes que pasar una acción');
    break; 

    default: 
    console.log('no entiendo que quieres hacer');
}

}





module.exports = bTareas;