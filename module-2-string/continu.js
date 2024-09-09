let x = 1;
for(x; x < 30; x++){
    if(x % 2 == 0){
        console.log(x);
        continue;
    }
    // console.log(x);
}

let z = 0;
while(z < 30){
    z++;
    if(z % 5 == 0){
        // console.log(z);
        continue;  
    }
    console.log(z);
    
}