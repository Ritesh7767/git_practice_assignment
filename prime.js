function isPrime(number){
    let count = 0
    if(number == 1){
        console.log("1 is neither prime nor composite")
    }
    else if(number == 2){
        console.log("Yes")
    }
    else{
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                count--
            }
        }
    }
    if(count){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}