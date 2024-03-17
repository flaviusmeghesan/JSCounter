document.getElementById('mySubmit').addEventListener('click', function() {
  var myInput = document.getElementById('myText').value;
  console.log(myInput);
  document.getElementById('h1Text').textContent = "Hello "+myInput;
});
