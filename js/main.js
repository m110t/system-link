var bookMarkName = document.getElementById("bookMarkName");
var webSiterUrl = document.getElementById("webSiteLink");
var buttonVisit = document.querySelectorAll(".move")
var linkList = [];

if(localStorage.getItem("links") != null) {
  linkList = JSON.parse(localStorage.getItem("links"))
 displayLinks()
 }else {
  linkList = [];
 }



function addLink(){
var firstInputName = bookMarkName.value.trim();
var firstWebSiteUrl = webSiterUrl.value.trim();

if ( firstInputName  === "" || firstWebSiteUrl === ""){
  alert("Please enter both a bookmark name and a URL.");
  return;
}
  
//   var bookmarkName = bookMarkName.value.trim();
//   var websiteUrl = webSiterUrl.value.trim();
//   if (bookmarkName === "" || websiteUrl === "") {
//       alert("Please enter both a bookmark name and a URL.");
//       return;
      
//   } 


  var link = {
    bookMark: bookMarkName.value,
    url: webSiterUrl.value
  }
  linkList.push(link)
  localStorage.setItem("links", JSON.stringify(linkList))
 displayLinks()

}


function displayLinks() {
var temp = " "
for(var i = 0; i < linkList.length; i++){

  temp+= `<tr>
  <td>`+i+`</td>
  
  <td>`+linkList[i].bookMark+`</td>
 

  <td><a href=""  onclick=visitLink(`+i+`) class="btn btn-outline-warning move"><i class="fa-regular fa-eye"></i> Visit</a></td>
  <td>

  <button onclick="deleteLink(`+i+`)" class="btn btn-outline-danger">  <i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>`
}


document.getElementById("myData").innerHTML= temp

}

function deleteLink(x) {
linkList.splice(x,1)
localStorage.setItem("links", JSON.stringify(linkList))

displayLinks()
}

function visitLink(n) {
  window.open(linkList[n].url)
} 


