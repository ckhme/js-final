const frm = document.querySelector("#frm-name");
const frmSearch = document.querySelector("#frm-search");
const bottomContent = document.querySelector("#bottom-content");
const subContent = document.querySelector(".sub-content");
const loginInput = frm.querySelector("#loginInput");

const LOCAL_STORAGE_KEY = "nickName"; 
const HIDDEN = "hidden";

const logIn = (isLogIn)=>{
    if(!isLogIn){
        frm.classList.remove(HIDDEN);
        frmSearch.classList.add(HIDDEN);
        bottomContent.classList.add(HIDDEN);
        subContent.classList.add(HIDDEN);

    }else {
        frm.classList.add(HIDDEN);

        frmSearch.classList.remove(HIDDEN);
        bottomContent.classList.remove(HIDDEN);
        subContent.classList.remove(HIDDEN);

    }
}


const frmSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem(LOCAL_STORAGE_KEY,loginInput.value)
    logIn(true);
    document.querySelector("h1").innerText = `좋은 하루 보내세요. ${loginInput.value}님`;
}

frm.addEventListener("submit", frmSubmit);

const localStorageNickName = localStorage.getItem(LOCAL_STORAGE_KEY);
if(localStorageNickName){
    logIn(true);
    frm.classList.add(HIDDEN);
    document.querySelector("h1").innerText = `좋은 하루 보내세요. ${localStorageNickName}님`;
}else {
    logIn(false);
}