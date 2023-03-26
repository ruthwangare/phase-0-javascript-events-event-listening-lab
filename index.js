function addingEventListener(){
  console.log('inside eventlistener');
  const input = document.getElementById('main');
  input.addEventListener('click', clickAlert);
}
function clickAlert() {
  alert('I was clicked!');
}

// addingEventListener()















