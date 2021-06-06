

$(function() {
  //  variables
  var mode=0;
  var timeCounter=0;
  var lapCounter=0;
  var action;
  var lapNumber=0;
  var timeMinutes, timeSeconds,timeMiliseconds, lapMinutes, lapSeconds,lapMiliseconds;

  hideshowButtons("#startbutton", "#lapbutton");


  $("#startbutton").click(function(){
    mode=1;
    hideshowButtons("#stopbutton", "#lapbutton");
    startAction();
  
  });
$("#stopbutton").click(function(){
  hideshowButtons("#resumebutton", "#resetbutton");
  clearInterval(action);

});
$("#resumebutton").click(function(){
  hideshowButtons("#stopbutton", "#lapbutton");
  startAction();

});
$("#resetbutton").click(function(){
  location.reload();
});

$("#lapbutton").click(function(){
  if(mode){
    clearInterval(action);
    

    lapCounter=0;
    addLap();
    startAction();
  }
  

});




  function hideshowButtons(x,y){
    $(".control").hide();
    $(x).show();
    $(y).show();
  }
// start the counter
function startAction(){
  action = setInterval(function(){
  timeCounter++;
  lapCounter++;
  updateTime();
},10)
}  
  //update time convert counter to min sec mili sec
function updateTime(){
  //1min=60*100mili=6000milisec
  timeMinutes = Math.floor(timeCounter/6000);
  //1sec=100milisec
  timeSeconds = Math.floor(timeCounter%6000/100);
  timeMiliseconds = Math.floor((timeCounter%6000)%100);

  $("#timemin").text(format(timeMinutes));
  $("#timesec").text(format(timeSeconds));
  $("#timemilisec").text(format(timeMiliseconds));

  
//1min=60*100mili=6000milisec
  lapMinutes = Math.floor(lapCounter/6000);
  //1sec=100milisec
  lapSeconds = Math.floor(lapCounter%6000/100);
  lapMiliseconds = Math.floor((lapCounter%6000)%100);

  $("#lapmin").text(format(lapMinutes));
  $("#lapsec").text(format(lapSeconds));;
  $("#lapmilisec").text(format(lapMiliseconds));
}

//formatnumber
function format(number){
  if(number<10){
  return '0'+number;
}else{
  return number;
}
}

//add lap to print lap details inside lap box
function addLap() {
  lapNumber++;
  var myLap = 
  '<div class="lapre">'+
     '<div class="laptimetitle">'+
     'LAP'+ lapNumber +
     '</div>'+
     '<div class="laptimes">'+
     '<span>'+ format(lapMinutes) +'</span>'+
     ':<span>'+ format(lapSeconds) +'</span>'+
     ':<span>'+ format(lapMiliseconds) +'</span>'+
     '</div>'+

  '</div>';
  $(myLap).prependTo("#laprecord");
}







});

