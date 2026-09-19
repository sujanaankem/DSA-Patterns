function onClickCheck(){
   debugger;
   let string = document.getElementById("txtString").value;
   let subString = [];
   let k=3;
   for (i=0; i<=(string.length - k); i++){
      subString.push(string.slice(i, i+k).split("a").length-1);
      document.getElementById("pResult").innerHTML ="<b>'A' count in the window: </b>" + subString.join(", ");
   }
       document.getElementById("pMax").innerHTML= "<b>Total highest 'A' count in the window : </b>" + (Math.max(...subString))
}