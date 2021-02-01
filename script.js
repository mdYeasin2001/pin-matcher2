// get pin 
function getPin(){
    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];
    if(pin.length == 4){
        return pin;
    }
    else{
        
        return getPin();
    }
}

// display pin
function displayPin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// keypad work
document.getElementById('keypad').addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //Not a Number
        // console.log("Not a Number");
        if(digit =="C"){
            const pin = document.getElementById('typed-pin');
            pin.value = "";
        }
    }
    else{
        const pinNumber = document.getElementById('typed-pin');
        pinNumber.value += digit;
    }
});


// check pin matched or not
function checkPin(){
    const generatedPin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if(generatedPin == ""){
        alert('there is no pin generated yet! please click on generate pin button')
    }
    else if(generatedPin == typedPin){
        getNotification('block', 'none');
    }
    else{
        getNotification('none', 'block');
    }
}

// get notification for pin correct or not
function getNotification(matched, notMatched){
    document.getElementById('correct-pin').style.display = matched;
    document.getElementById('incorrect-pin').style.display = notMatched;
}