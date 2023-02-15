function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('btn-generate').addEventListener('click',function(){
    const pin =getPin();
    const inputField = document.getElementById('input-field');
    inputField.value = pin;
})


document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
       
        
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value =newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('input-field');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinWrongMessage = document.getElementById('pin-wrong');
    
    if(currentPin === typedNumbers){
     
       pinSuccessMessage.style.display = 'block';
       pinWrongMessage.style.display = 'none';
    }
    else{
      
       pinWrongMessage.style.display = 'block';
       pinSuccessMessage.style.display = 'none'
    }
})