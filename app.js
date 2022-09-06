var w = window.screen.availWidth;
var h = window.screen.availHeight;




addEventListener('resize', (event) => {
  if(w!= window.innerWidth){
      document.getElementById('width').innerHTML = "False";
      document.getElementById('height').innerHTML = "View";
  }else{
        document.getElementById('width').innerHTML = "Correct";
        document.getElementById('height').innerHTML = "View";
  }
});
