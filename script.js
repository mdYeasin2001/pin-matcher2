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