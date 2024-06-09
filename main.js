// *** common funtion for basic opration *** \\

// empty value
function emptyValue(id){
    document.getElementById(id).value = '';
}

// empty text
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// display none
function displayNone(id){
    // document.getElementById(id).style.display = "none";
    console.log(document.getElementById(id));

}

// display Block 
function displayBlock(id){
    document.getElementById(id).style.display = "block";
}

// generate Pin 
function generateRandomNumber(){
    const  generateNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generated-display").value = generateNumber;

    emptyValue("submit-display");
    displayNone("Match");
    displayNone("not-match");
}

// Inpute value
function keyBtn(id){
    let previousValue = document.getElementById("submit-display").value;
    let keyNumber = document.getElementById(id).innerHTML;
    document.getElementById("submit-display").value = previousValue + keyNumber;
}

// clear value
function clearKey(){
    document.getElementById("submit-display").value = '';
}

// remove value one by one
function ClearAtLast(){
    let disValue = document.getElementById("submit-display").value;
    let removeValue = disValue.slice(0, disValue.length -1);
    document.getElementById("submit-display").value = removeValue;
}

// Submit Button if pin match and did't match condition 

function submitBtn(){
    let generatedNum = document.getElementById("generated-display").value;
    let typeNum = document.getElementById("submit-display").value;

   if(generatedNum == typeNum){
        displayBlock("Match");
        displayNone("not-match");
   }else{
    displayBlock("not-match");
    displayNone("match");
   }
}
