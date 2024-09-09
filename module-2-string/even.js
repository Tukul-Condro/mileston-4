let num = 61;

   while(num <= 10){
    console.log(num);
    if(num % 2 === 0){
        console.log('even num is', num);
    }
   
    if(num % 2 === 1){
        console.log('odd num is', num)
    }
    num++;
}

while(num <= 98){
    if(num % 2 === 0){
        console.log('this is even number', num);
        
    }
    num++;
}

for(num = 61; num <= 100; num = num + 2)
    console.log('even num is', num);