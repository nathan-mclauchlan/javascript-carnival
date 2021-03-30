  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.getElementById("uni0").onclick = clicked
document.getElementById("uni1").onclick = clicked
document.getElementById("uni2").onclick = clicked

var inflation = [0, 0, 0]
function clicked(event) {
  var unicorn = event.target
  var id = unicorn.id[3]

  
  inflation[id]++
  unicorn.src = "./images/unicorn-" + inflation[id] + ".png"
  if (inflation[id] == 3) {
      inflation[id] = 0
      alert("You Win")
  }     
}
