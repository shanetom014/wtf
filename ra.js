function Task1Complete(silentshane)
{
	var bulletstyle = document.getElementById(silentshane).style.textDecoration;

  if(bulletstyle == 'line-through')
  {
		document.getElementById(silentshane).style.textDecoration='none';
  }
  else {document.getElementById(silentshane).style.textDecoration='line-through';}
}


function clearlist(){

names = document.getElementsByClassName("red");
for(i = 0; i<names.length;i++)
{
names[i].style.textDecoration="none";
}
}
