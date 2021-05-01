//Change background colour
document.body.style.backgroundColor = 'MediumAquaMarine';
//Input event listener for the button
document.getElementById('button').addEventListener ('click',reportResults)
//Define button function to show alert from what ever is typed in the input
function reportResults () {
  alert(document.getElementById('input').value)
}