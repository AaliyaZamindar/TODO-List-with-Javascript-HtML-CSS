function myFunction(event){
    event.preventDefault();
    const inputText= document.getElementById("input").value;
    console.log(inputText);
    const myList= document.getElementById("lists");
  //  <li ><input type="checkbox"><span>go to enrich</span></li>
    const liNode = document.createElement("li");
    const inputNode = document.createElement("input");
  //  var x = document.createElement("INPUT");
    inputNode.setAttribute("type", "checkbox");
    const spanNode = document.createElement("span");
    spanNode.innerHTML = inputText;
    liNode.appendChild(inputNode);
    liNode.appendChild(spanNode);
    myList.appendChild(liNode);

};
  
const deleteFunction = () => {
let checkboxesChecked = document.querySelectorAll("input[type=checkbox]:checked");

const myList= document.getElementById("lists");
for(i=0; i < checkboxesChecked.length; i++) {
myList.removeChild(checkboxesChecked[i].parentNode);
}
};






