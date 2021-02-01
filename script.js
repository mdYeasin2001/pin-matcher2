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