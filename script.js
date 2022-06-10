function displayTime(){
    var a= new Date();
    var h=a.getHours();
    var m=a.getMinutes();
    var s=a.getSeconds();
    var session = document.getElementById('ap');
  if(h>=12)
  {
      session.innerHTML='&nbsp PM';
  }
  else{
    session.innerHTML='&nbspAM';
  }

  var x='0';
  if(h<10){
      h=x+h;
  }
  if(m<10){
    m=x+m;
}
if(s<10){
    s=x+s;
}
    document.getElementById('hr').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;
}
setInterval(displayTime,1000);