const inputBox = document.querySelector(".inputDiv input");
const addBtn = document.querySelector(".inputDiv button");
const toDoList = document.querySelector(".toDoList");

inputBox.onkeyup = ()=>{
    left userData = inputBox.value;
    if(userData.trim()!=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = ()=>{
    left userData = inputBox.value;
    let getlocalStorage = localStorage.getItem("New Task");
    if(getlocalStorage == null){
        alert("Kosong");
        listArr = [];
    }else{
        listArr = JSON.parse(getlocalStorage);
        alert(userData + ' berhasil ditambahkan, anda memiliki ' +listArray.length+ ' tugas lainnya');
    }
    listArr.push(userData);
    localStorage.setItem("New Task", JSON.stringify(listArr));
}
function showTasks(){
    let getlocalStorage = localStorage.getItem("New Task");
    if(getlocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getlocalStorage);
    }
    let newLiTag = '';
    listArr.forEach((element, index)=>){
        newLiTag = '<li> ${element} <span><i class="fas fa-trash"></i></span><li>';
    });
}