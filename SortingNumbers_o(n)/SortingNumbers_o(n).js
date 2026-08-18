let array = [];
function onClickPush(){
    let numbers = Number(document.getElementById("txtNumbers").value);
    array.push(numbers);
    document.getElementById("pPush").innerHTML = array;
    document.getElementById("txtNumbers").value = "";
}

function onClickSort(){
     debugger;
    let sort = array.sort((a,b) => a-b);
    document.getElementById("pSort").innerHTML = sort;
}

function onClickLoopAdd(){
     debugger;
    let target = 10;
    let left = 0;
    let rigth = array.length -1;
    let sum = [];
    let count = 0;
    while (left<rigth){
        sum = (array[left]+array[rigth])
        if(sum == target){
            left ++;
            rigth --;
            count ++;
        }
        else if(sum > target){
            rigth --;
        }
        else if(sum < target){
            left ++;
        }
    }
   
   document.getElementById("pSum").innerHTML = count;
}

function onClickLoopSub(){
    debugger;
   let target = 10;
    let left = 0;
    let rigth = array.length -1;
    let sub = [];
    let count = 0;
    while (left<rigth){
        sub = (array[rigth]-array[left])
        if(sub == target){
            left ++;
            rigth --;
            count ++;
        }
        else if(sub > target){
            rigth --;
        }
        else if(sub < target){
            left ++;
        }
    }
    document.getElementById("pSub").innerHTML = count;
}
function onClickLoopMultiply(){
 let target = 5;
    let left = 0;
    let rigth = array.length -1;
    let Multiply = [];
    let count = 0;
    while (left<rigth){
        Multiply = (array[left]*array[rigth])
        if(Multiply == target){
            left ++;
            rigth --;
            count ++;
        }
        else if(Multiply > target){
            rigth --;
        }
        else if(Multiply < target){
            left ++;
        }
    }
   
   document.getElementById("pMultiply").innerHTML = count;
}

function onClickLoopDivide(){
     let target = 2;
    let left = 0;
    let rigth = array.length -1;
    let Divide = [];
    let count = 0;
    while (left<rigth){
        Divide = (array[rigth] / array[left])
        if(Divide == target){
            left ++;
            rigth --;
            count ++;
        }
        else if(Divide > target){
            rigth --;
        }
        else if(Divide < target){
            left ++;
        }
    }
   
   document.getElementById("pDivide").innerHTML = count;
}