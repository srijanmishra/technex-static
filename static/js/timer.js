dateFuture1 = new Date(2012,1,13,23,59,59); 
function GetCount(ddate,iid){ 
 
 dateNow = new Date();
 amount = dateFuture1.getTime() - dateNow.getTime();
 delete dateNow; 
  if(amount < 0){ 
  document.getElementById(iid).innerHTML="Now!"; 
 } 
 else{ 
  days=0;hours=0;mins=0;secs=0;out=""; 
 
  amount = Math.floor(amount/1000);
 
  days=Math.floor(amount/86400);
  amount=amount%86400; 
 
  hours=Math.floor(amount/3600);
  amount=amount%3600; 
 
  mins=Math.floor(amount/60);
  amount=amount%60; 
 
  secs=Math.floor(amount);
 
  if(days != 0){out += days +" "+((days==1)?"D":"Days")+" left";} 
  //out += (hours<=9?'0':'')+hours +" "+((hours==1)?"":"Hours")+": "; 
  //out += (mins<=9?'0':'')+mins +" "+((mins==1)?"":"")+": "; 
  //out += (secs<=9?'0':'')+secs +" "+((secs==1)?"":""); 
  //out = out.substr(0,out.length); 
  out = '';
  document.getElementById(iid).innerHTML=out; 
 
  setTimeout(function(){GetCount(ddate,iid)}, 1000); 
 } 
} 
 
window.onload=function(){ 
 GetCount(dateFuture1, 'timer'); 
 }; 
