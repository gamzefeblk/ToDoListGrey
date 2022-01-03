 const inputText = document.querySelector(".input")
 const onClickBtn = document.querySelector(".button")
 onClickBtn.addEventListener("click", addElement)
 const ulElement = document.querySelector("ul")


 function addElement() {
     if (inputText.value == "") {
         alert("You must write something")
     } else {
         const newLiElement = document.createElement("li")
         newLiElement.textContent = inputText.value
         const spanButton = document.createElement("span")
         const txt = document.createTextNode("\u00D7");
         spanButton.className = "delete";
         //spanButton.onclick = "remove()"
         spanButton.appendChild(txt);
         newLiElement.appendChild(spanButton)
         ulElement.appendChild(newLiElement)

         const deleteButtons = document.querySelectorAll(".delete")
         Array.from(deleteButtons).forEach(function (btn) {
             btn.addEventListener("click", function (e) {
                 const li = e.target.parentElement
                 li.remove()

             })
         })
         inputText.value = ""

     }
 }

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

 //  const li = document.querySelector("li")
 //  li.forEach(element => {
 //      li.addEventListener("click", function () {

 //      })
 //  })
