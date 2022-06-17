const searchfrm = document.querySelector("#frm-search");
const searchInput = searchfrm.querySelector("#searchInput");

const searchFunc = (e)=>{
    e.preventDefault(); 
    location.href=`https://www.google.com/search?q=${searchInput.value}`
    searchInput.value ="";
}

searchfrm.addEventListener("submit", searchFunc);
