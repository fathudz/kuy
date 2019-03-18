
var latestCount=[1];//this array will update the highest count among 5 counters
var counterNumber=[0,0,0,0,0];//this array will count the 5 counters available 
var customerNumber=[1];//this array will update the customerNumber
var queueLeft;
var setTime1;//these variables will hold 5 minutes time for each counter.
function countTime1(){//this function will react after the 300000 miliseconds has done, and trigger the latestCount to update
    latestCount[0]+1;//latestCount will increment by 1 since this counter has done to treat customer
    counterNumber[0]=latestCount;//this array will be updated with the latestCount so that the system will access the available counter
} 
var setTime2;
function countTime2(){
    latestCount[0]+1;
    counterNumber[1]=latestCount;
} 
var setTIme3;
function countTime3(){
    latestCount[0]+1;
    counterNumber[2]=latestCount;
} 
var setTime4;
function countTime4(){
    latestCount[0]+1;
    counterNumber[3]=latestCount;
} 
var setTime5;
function countTime5(){
    latestCount[0]+1;
    counterNumber[4]=latestCount;
} 


//---TO CHECK THE TIME AVAILABILITY----
var d=new Date();
var currentHour=d.getHours();
var currentMinute=d.getMinutes();
var currentTime=currentHour+currentMinute;


//--DO WHILE LOOP TO MAKE SURE THE SYSTEM KEEP PERFORMING--
//----AS LONG AS THE TIME IS WITHIN THE INTENDED HOURS-----
//_________________________________________________________

do{
console.log("Welcome to ABC BANK!");
console.log("Here is your number: "+customerNumber);

customerNumber+1;
queueLeft=customerNumber-latestCount;
console.log("Current number is :"+updateCount);
console.log("Please wait, there are "+queueLeft+" person left");

if(counterNumber[0]=customerNumber){//this line is to check the number inside the specific index, if it is match with customerNumber meaning that customer has privilege
    setTime1=setTimeout(countTime1,300000);//this to trigger the counTime to work after the 300000 milisecond has done
}
else if(counterNumber[1]=customerNumber){
    setTime2=setTimeout(countTime2,300000);
}
else if(counterNumber[2]=customerNumber){
    setTime3=setTimeout(countTime3,300000);
}
else if(counterNumber[3]=customerNumber){
    setTime4=setTimeout(countTime4,300000);
}
else if(counterNumber[4]=customerNumber){
    setTime5=setTimeout(countTime5,300000);
}

}
while(currentTIme>90 && currentTime<1630);//this is to check the duration is between 09.00 AM and 04.30PM