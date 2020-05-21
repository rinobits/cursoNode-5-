const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea'
};
const completado = {
    default:true,
    alias:'c',
    desc: 'modifica el estado de una tarea'
};
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {descripcion})
    .command('actualizar','Actualiza  el estado de una tarea', {descripcion, completado})
    .command('borrar', 'Borra una tarea del listado', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
};