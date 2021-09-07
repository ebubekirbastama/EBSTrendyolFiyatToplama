var syhmhz = new Array();
for (var i = 0; i < $x("//*[@class='pr-mb-mn']").length; i++) 
{

  syhmhz.push($x("//*[@class='pr-mb-mn']/a")[i].getAttribute('title')+" : "+$x("//*[@class='prc-dsc']")[i].innerText);
}
 for (var j = 0; j < syhmhz.length; j++) 
{
  document.write(syhmhz[j]+"<br>");
}
