var popupoverlay = document.querySelector(".popoverlay")
var popupbox = document.querySelector(".popbox")
var addpopupbutton = document.querySelector(".addbutton")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//select cancel button
var cancelbutton = document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault(event)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container,addbook,booktitle,bookauthor,bookdecription
var containers = document.querySelector(".container")
var addbookss = document.getElementById("addbook")
var booktitles = document.getElementById("booktittle")
var bookauthors = document.getElementById("bookauthor")
var bookdecriptions = document.getElementById("bookdesc")

addbookss.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitles.value}</h2>
    <h5>${bookauthors.value}</h5>
    <p>${bookdecriptions.value}</p>
    <button>delete</button>`
    containers.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

     

     

})

function kanna(event){
    event.target.parentElement.remove()
}