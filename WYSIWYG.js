function iFrameOn(){
	richTextField.document.designMode = 'On';
}
function iBold(){
	richTextField.document.execCommand('bold',false,null); 
}
function iUnderline(){
	richTextField.document.execCommand('underline',false,null);
}
function iItalic(){
	richTextField.document.execCommand('italic',false,null); 
}
function iFontSize(){
	var size =document.getElementById("fontS").value;
	richTextField.document.execCommand('FontSize',false,size);
}
function iFontType(){
	var type =document.getElementById("fontN").value;
	richTextField.document.execCommand('FontName',false,type);
}
function iForeColor(){
	var colour = prompt('Define a basic colour or apply a hexadecimal colour code for advanced colours:', '');
	richTextField.document.execCommand('ForeColor',false,colour);
}
function iHilitColor(){
	var colour = prompt('Define a basic colour or apply a hexadecimal colour code for advanced colours:', '');
	richTextField.document.execCommand('hilitecolor',false,colour);
}
function iUnorderedList(){
	richTextField.document.execCommand("InsertOrderedList", false,"newOL");
}
function iOrderedList(){
	richTextField.document.execCommand("InsertUnorderedList", false,"newUL");
}
function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	richTextField.document.execCommand("CreateLink", false, linkURL);
}
function iUnLink(){
	richTextField.document.execCommand("Unlink", false, null);
}
function iImage(){
	var imgSrc = prompt('Enter image location', '');
    if(imgSrc != null){
        richTextField.document.execCommand('insertimage', false, imgSrc); 
    }
}
function SubmitSource() 
{  
    var text =richTextField.document.getElementsByTagName('body')[0].innerHTML;
    var New = text.split('<');
    var l = New[0];
    if(l[1]=='<'){
      l = l.slice(1);
    }

    New[0]='<!DOCTYPE html><html>'+l;
    var arr=[];
    for(x in New){
      if(New[x]==='br>'){
        arr.push(x);
      }

      if(New[x]==="")
      {New.splice(x,1);}


    }
    if(arr[0])
    {
      var x = Number(New.length);
      while(New[x]!=='/div>'){
        x--;
      }
      New[x]='/p>';
    }
    New.push('/html>');
    document.getElementById("div").innerHTML="<input class='newArea' type='text'  id='newArea' >";
    document.getElementById('newArea').value = New.join('<');
    text = New.join('<');
}