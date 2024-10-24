function update(){

    var inputBox = document.getElementById("inputbox")
    var charCount = document.getElementById("charcount")
    var warningMsg = document.getElementById("warningmsg")
    var maxLength = 200

    var charLength = inputBox.value.length;

    if(charLength > maxLength){
        warningMsg.textContent = "You have reached the Limit of"+" "+ maxLength +" "  +"characters";
        inputBox.disabled = true;
    }

else{
 charCount.innerHTML = charLength+'/200 characters'

}

var clearBtn = document.getElementById("clearbtn")
clearBtn.addEventListener("click",function(){
    inputBox.value='';
    warningMsg.textContent = '';
    charCount.textContent=' 0/200 Characters '

})


}