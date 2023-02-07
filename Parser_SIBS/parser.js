//S47404202009080018642020090821004700001011200232490

//S47404202 09080018642020090821004700001011200232490

var input;
let regexS474 = /^(S)([0-9]{50})$/
function treatForm() {
var form = document.getElementById("form")
if (form.style.display === "none") form.style.display = "block"
else form.style.display = "none"
}

function treatString() {
input = document.getElementById("fileTypeInput").value
var fileType = input.substring(0, 4)
switch(fileType) {
case 'S474': 
  var formatValid = regexS474.test(input)
  if(formatValid) {
    var result = document.getElementById("result")
    result.innerHTML = "<i class='fas fa-check' style='color: green; font-size: 32px'></i>"
  } else {
    var errors = []
    var index = input.search(regexS474);
    var mismatch = input.slice(index + 2).search(/\D/);

    if (mismatch !== -1) {
      errors.push("non-numeric character '" + input[index + mismatch + 2] + "' at index " + (index + mismatch + 2))
    }
    if (input.indexOf(" ") !== -1) {
      errors.push("empty character at index " + input.indexOf(" "))
    }
    if (input.length !== 51) {
      errors.push("incorrect number of characters. Expected 51, got " + input.length)
    }
    var result = document.getElementById("result")
    result.innerHTML = "<i class='fas fa-times' style='color: red; font-size: 32px'></i>"
  }
  break;
default:
  var result = document.getElementById("result")
  result.innerHTML = "N/A Message"
}    
}