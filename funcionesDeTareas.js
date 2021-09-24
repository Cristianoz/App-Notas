const fs = require('fs');
//const path = require('path');

bTareas = (n,objetot) => {

tareasFunciones ={

    imprimir: function(){
        propiedad.forEach( (value, i, array) => 
        console.log(`
                ${i}. ${propiedad[i].tarea} - ${propiedad[i].estado} -${propiedad[i].fecha}
                Nota: ${propiedad[i].comentario}`)); 
        console.log(`
        .....      ===>End<===`);},

    leer: function(){ this.imprimir()},
 
    escribirJson: function(arrayt) {
        let arraytJSON = JSON.stringify(arrayt, null, 2);
        fs.writeFileSync("./tareas.json", arraytJSON, 'utf-8');
        console.log(arraytJSON) // imprimir previsuUAL DE LA TAREA
        return '\ntareas guardadas' },

    guardarTareas: function(objetot){
        propiedad.push(objetot);
        this.escribirJson(propiedad);},

    filtrar: function(estado) {
        let filtrado = propiedad.filter((value) => value.estado == estado);
        //console.log(`\n`);
        filtrado.forEach( (value, i, array) => console.log(`
        ${i}. ${filtrado[i].tarea} - ${filtrado[i].estado} -${filtrado[i].fecha}
        Nota: ${filtrado[i].comentario}`)); 
        console.log(`
        .....      ===>End<===`)//console.log(`${i}. ${filtrado[i].tarea} - ${filtrado[i].estado}`))
        console.log (`\nTareas filtradas con estado: "${estado}"`); }

    }
    
    

    



let propiedad = JSON.parse( fs.readFileSync(__dirname + "/tareas.json", "utf-8"));




switch (n){
    case 'listar':
    tareasFunciones.leer()       
    break;

    case 'crear':
    tareasFunciones.guardarTareas(objetot)
    console.log(`\n------Tarea creada------`);
    break;

    case 'filtrar':
    tareasFunciones.filtrar(objetot)
    break; 

    case undefined:
    console.log('\nAtención - Tienes que pasar una acción');
    break; 

    default: 
    console.log('no entiendo que quieres hacer');
}

}






module.exports = bTareas;