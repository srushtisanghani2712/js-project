const btnEle = document.querySelector(".btn");
const inputele = document.querySelector("#input-field");
const taskele = document.querySelector(".list-item");

btnEle.addEventListener("click", () => {
  //   console.log("click me");
  // console.log(inputele.value)
  if (inputele.value === "") {
    alert("plase  add your task first");
  } else {
    let listele = document.createElement("li");
    listele.textContent = inputele.value;
    taskele.appendChild(listele);

    let spanEle = document.createElement("span");
    spanEle.textContent = "\u00d7";
    listele.appendChild(spanEle);
  }
  inputele.value = "";
  saveEle()

})

taskele.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked")
    saveEle()
  } else if(e.target.tagName == "SPAN") {
    // e.target.parentElement.remove();
    e.target.parentElement.remove()
  }
})

 function saveEle(){
    localStorage.setItem("task",taskele.innerHTML)
}
function getEle(){
    taskele.innerHTML=localStorage.getItem("task")
}
getEle()