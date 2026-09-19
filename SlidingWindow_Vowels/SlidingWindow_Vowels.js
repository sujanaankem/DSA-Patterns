function onClickCheck(){
   debugger;
   const vowels = "aeiouAEIOU";
   let string = document.getElementById("txtString").value;
   let subString = [];
   let vowelWindowCount = 0;
   let k=3;
   for (i=0; i<=(string.length - k); i++){
      let currentWindow = (string.slice(i, i+k));
      subString.push(currentWindow);
      
      if(vowels.includes(currentWindow[0])){
        vowelWindowCount++;
        console.log(`Starts with vowel: ${currentWindow}`);
      }else{
        console.log(`Does not start with vowels: ${currentWindow}`);
      }
   }
       document.getElementById("pResult").innerHTML = "<b>All windows: </b>" + subString.join(", ");
       document.getElementById("pMax").innerHTML="<b>Total starting with vowels: </b>" + vowelWindowCount;
}