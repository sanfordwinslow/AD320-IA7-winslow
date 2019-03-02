
function changeColor() {
  var div = document.getElementById('divOne');

  if(div.style.background === 'blue') {
    div.style.background = 'red';
  }else{
    div.style.background = 'blue';
  };
};
