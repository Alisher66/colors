
const items = document.querySelectorAll("td");
const selectEl = document.querySelector("select");
const changeBtn = document.querySelector("#change");
const colorEl = document.querySelector("#color");

items.forEach(item =>{
    let option = document.createElement("option");
    option.innerHTML=item.innerHTML;
    selectEl.append(option);
});

changeBtn.addEventListener("click", () =>{
    items[selectEl.selectedIndex].style.background = colorEl.value;
});