function add(x, y){
    return x + y
}


function subtract(x, y){
    return x - y
}

function divide(x, y){
    return x / y
}


function multiply(x, y){
    return x * y
}

function modulus(x, y){
    return x % y 
}


console.log("Select operation.")
console.log("1.Add")
console.log("2.Subtract")
console.log("3.Multiply")
console.log("4.Divide")
console.log("5.Modulus")

    // take input from the user
while (true){
  
    console.log (' ')
    choice = prompt("Enter choice\n1.Add \n2.Subtract \n3.Multiply \n4.Divide \n5.Modulus: ")
    var cases = ['1', '2', '3', '4', '5', '6']
    
    if(cases.includes(choice)){
    		var num1 = parseFloat(prompt("Enter first number: "))
    		var num2 = parseFloat(prompt("Enter second number: "))
        switch (choice){
            case '1':
                console.log(num1, "+", num2, "=", add(num1, num2))
                break;
            case '2':
                console.log(num1, "-", num2, "=", subtract(num1, num2))
                break;
            case '3':
                console.log(num1, "*", num2, "=", multiply(num1, num2))
                break;
            case '4':
                console.log(num1, "/", num2, "=", divide(num1, num2)) 
                break;
            case '5':
                console.log(num1, "%", num2, "=", modulus(num1, num2))    
                break;
        }
    }
  	else{
            console.log("Invalid Input ")
            console.log(' ')
            console.log("Please select a valid operation.")
            console.log("1.Add")
            console.log("2.Subtract")
            console.log("3.Multiply")
            console.log("4.Divide")
            console.log("5.Modulus");
    }

    var next_calculation = prompt("Let's attempt a calculation? (yes/no): ")
  	var quit_options = ['no', 'exit', 'end', 	'quit', 'terminate', 'close', 	'destroy', 'kill']
    if (quit_options.includes(next_calculation)){
      	alert('You have closed the program, bye')
        break;
    }
}

