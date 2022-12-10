function digitalroot(){
    let sum = n
 while(sum>=10){
     sum=0;
     while(n>0){
         sum+=n%10
         n=Math.floor(n/10)
     }
     n=sum
     console.log('this is next n '+sum)
 }
 return sum
}