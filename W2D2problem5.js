5.   <!





    //Print all prime numbers occurring in 1st 50 natural numbers
	//HINT1: google how to check if a number is prime or not
    //HINT2: use nested loops

	for(let number=2 ; number<=50; number++){
		let isPrime = true;
	
	for (let i=2; i<= number-1;i++){
		if(number%i===0){
			isPrime = false;
			break
		}
 	}
if (isPrime) console.log(number);
 	}
	