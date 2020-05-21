const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const {green, red} = require('colors');
let comando = argv._[0];
switch(comando){
    case 'crear':
        let work = toDo.create(argv.descripcion);
        console.log(work);
        break;
    case 'listar':
        let workList = toDo.getWorks();
        for(let work of workList){
            console.log("TO DO".green);
            console.log(work.descripcion);
            console.log('Estado: '.red, work.completado)
            console.log("----------".green);
        }
        break;
    case 'borrar':
        let deleted = toDo.deleted(argv.descripcion);
        console.log(deleted);
        break;
    case 'actualizar':
        let updated = toDo.updateList(argv.descripcion, argv.completado);
        console.log(updated);
        break;
    default:
        console.log('Opciòn invàlida');
}