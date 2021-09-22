const fs = require('fs');
const readline = require('readline');
const bTareas = require('./funcionesDeTareas')
const rl = readline.createInterface(process.stdin, process.stdout);


const window =`
                <=======================================>
                              App de notas
                <=======================================>\n
                Escoge una de la siguientes opciones:\n
                 1. Listar tareas
                 2. Crear nuevas Tareas
                 3. Filtrar tareas
                 4. salir\n`;

mainScreen()
function mainScreen(){
    process.stdout.write('\033c');

    rl.question(window, answer =>{
        switch(answer.trim()){
            case '1':
            bTareas('listar')
            
            break;
            
            case '2':
            bTareas('crear')
            break;

            case '3':
            bTareas('filtrar')
            break;

            case '4':
            console.log('elegiste 4')
            break;

            case '5':
            rl.close();
            break;

            default: 
            console.log('Ingresa una entreda valida\n')
            mainScreen();


            
        }
    });
}






//bTareas('listar')
//bTareas('crear')
//bTareas('filtrar')