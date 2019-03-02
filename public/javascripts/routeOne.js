
function changeColor() {
  var div = document.getElementById('color').style.backgroundColor;

  div.addEventListener('click', function() {
    div.style.backgroundColor = 'blue';
  });

  div.addEventListener('click', function() {
    div.style.backgroundColor = 'red';
  });
};
div.addEventListener('click', function(changeColor));
