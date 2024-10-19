let value= ' '
let firstNumber = ' '
let secondNumber = ' '
let operation = ' '
function displayNum(num){
    value += num;
    document.getElementById('result').value = value;
}
function operator(oper){
    if(!isNaN(value)){
        firstNumber = value;
        operation = oper;
        value = ' ';
        document.getElementById('result').value = ' ';
    }else{
        alert('Please enter a valid number!')
    }
}
function calculate(){
    secondNumber = value ;
    if (!isNaN(firstNumber)&& !isNaN(secondNumber)){
        let result = 0;
        if(operation == '+'){
            result =Number(firstNumber) + Number (secondNumber) ;
        }else if(operation == '-'){
            result = Number(firstNumber) - Number (secondNumber) ;
        }else if(operation == '*'){
            result = Number(firstNumber) * Number (secondNumber) ;
        }else if(operation == '%'){
            result = Number(firstNumber) % Number (secondNumber) ;

        }else if(secondNumber != 0) {
            result = (Number(firstNumber)) / ( Number (secondNumber)) ;
            
        }else{
            alert('can not divided on zero')
        }
        document.getElementById('result').value = result;
    }
}
function clr(){
    value = ' ';
    firstNumber = ' ';
    secondNumber = ' ';
    document.getElementById('result').value = '0';
}

