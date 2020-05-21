const fs = require('fs');
let toDoList = [];
const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) =>{
        if(err) throw new Error('No se pudo grabar ', err);
    })
}
const loadDB = () => {
    try{
        toDoList = require('../db/data.json');
    }catch(err){
        toDoList = []; 
    }
}
const create = (descripcion) => {
    loadDB();
    let toDo = {
        descripcion,
        completado: false
    };
    toDoList.push(toDo);
    saveDB();
    return toDo; 
}
const getWorks = () => {
    loadDB();
    return toDoList;
}
const updateList = (descripcion, completado=true)  => {
    loadDB();
    let index = toDoList.findIndex(work => work.descripcion === descripcion);
    if(index >= 0){
        toDoList[index].completado = completado;
        saveDB();
        return true;
    }else{
        return false;
    }
}
const deleted = (descripcion) => {
    loadDB();
    let newList = toDoList.filter(work => work.descripcion !== descripcion);
    // devolveremos todos los elementos que no coincidan
    if(newList.length === toDoList.length){
        return false;
    }else{
        toDoList = newList; // se actualiza el archivo toDoList cargado en loadDB()
        saveDB();
        return true;
    }
}
module.exports = {
    create,
    getWorks,
    updateList,
    deleted
}