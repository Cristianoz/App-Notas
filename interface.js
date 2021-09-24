const fs = require('fs');
const readline = require('readline');
const bTareas = require('./funcionesDeTareas')
const rl = readline.createInterface(process.stdin, process.stdout);
const moment = require('moment');

function interfaceMaster(){

const window =`
                <=======================================>
                              App de notas                  
                <=======================================>\n
                ¿Que quieres hacer? :)\n
                 1. Listar tareas.
                 2. Crear nuevas tareas.
                 3. Filtrar tareas.
                 5. salir.\n
Opcion numero: `;


const comandos =`\n==>Comandos: *x  = Salir, *y = Inicio, *z = Guardar y salir<==
                 
--> `


const comandosCrea =`\n==>Comandos: *n = ingresar otra tarea, *x  = Salir,  *y = Inicio, *z = Guardar y salir<==
                 
--> `

const comandosFiltra =`\n==>Comandos: *n = seguir filtrando, *x  = Salir,  *y = Inicio, *z = Guardar y salir<==
                 
--> `

mainScreen()


function interface(){
    console.log(comandos);
    rl.on('line', answer =>{
        switch(answer.trim()){
            case '*x':
            process.stdin.unref();
            rl.removeAllListeners('line');
            break;
            
            case '*y':
            mainScreen();
            break;

            case '*z':
            process.stdin.unref();
            rl.removeAllListeners('line');
            break;

            default: 
            process.stdout.write('\033c');
            console.log(`${comandos}\nIngresa un comando valido: `);
            interface();

        }
    });
}

function interfaceCrear(){
    console.log(comandosCrea);
    rl.on('line', answer =>{
        switch(answer.trim()){
            case '*n':
            llenarTarea();    
            break;

            case '*x':
            process.stdin.unref();
            rl.removeAllListeners('line');
            break;
            
            case '*y':
            mainScreen();
            break;

            case '*z':
            mainScreen();
            break;

            default: 
            process.stdout.write('\033c');
            console.log(`${comandos}\nIngresa un comando valido: `);
            interfaceCrear();

        }
    });
}

function interfaceFiltrar(){
    console.log(comandosFiltra);
    rl.on('line', answer =>{
        switch(answer.trim()){
            case '*n':
            filtarTarea();    
            break;

            case '*x':
            process.stdin.unref();
            rl.removeAllListeners('line');
            break;
            
            case '*y':
            mainScreen();
            break;

            case '*z':
            mainScreen();
            break;

            default: 
            process.stdout.write('\033c');
            console.log(`${comandos}\nIngresa un comando valido: `);
            interfaceFiltrar();

        }
    });
}






function mainScreen(){
    process.stdout.write('\033c');

    rl.question(window, answer =>{
        switch(answer.trim()){
            case '1':
            process.stdout.write('\033c');    
            bTareas('listar')
            interface();
            break;
            
            case '2':
            process.stdout.write('\033c');
            llenarTarea()
            break;

            case '3':
            process.stdout.write('\033c');  
            filtarTarea()
            
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



let llenarTarea = () => {
    //process.stdout.write('\033c');
    objetot ={
        tarea: " ",
        estado: " ",
        comentario: " ",
        fecha: moment().format('llll')}
        console.log(`
                ~~~~~~~~~~~~~Creando tareas~~~~~~~~~~~~`)
  
    rl.question(`\nIngresa el nombre de la tarea: `, answer =>{
    objetot.tarea=answer
    rl.question(`\nIngresa el estado de la tarea: `, answer =>{
    objetot.estado=answer;       
    rl.question(`\nIngresa un comenatrio a la tarea: `, answer=>{
    objetot.comentario=answer;
    bTareas('crear', objetot);
    interfaceCrear();




    });
        });
            });
       
    }

    let filtarTarea = () =>{
        console.log(`
                ~~~~~~~~~~~~~Filtrando tareas~~~~~~~~~~~~`)
        rl.question(`\nIngresa el estado que deseas filtrar: `, answer =>{
        bTareas('filtrar', answer);
        interfaceFiltrar();
        })

    }
    


}

module.exports =interfaceMaster;