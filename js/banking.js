 function douleIt(num){
     const result = num * 2;
     return result;
 }
     const fiveDouble = douleIt(5);
     const sevenDouble = douleIt(7);
 
 
 
function getInputValue(inputId) {
     const depositInput = document.getElementById(inputId);
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText);
     // clear input field

     depositInput.value = '';
     return depositAmount;
 }
  
    
function updeteTotalField(totalFieldId, amount){
     const totalAmount = document.getElementById(totalFieldId);
     const depositTotalText = totalAmount.innerText;
     const previousTotal = parseFloat(depositTotalText);

     totalAmount.innerText = previousTotal +amount;
    
    }
    
function getCurrentBalance(){
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
       return previousBalanceTotal;
     }


function updeteBalance(amount, isAdd){
     const balanceTotal = document.getElementById('balance-total');
    //  const balanceTotalText = balanceTotal.innerText;
    //  const previousBalanceTotal = parseFloat(balanceTotalText);
       const previousBalanceTotal = getCurrentBalance();
     if(isAdd == true){
      balanceTotal .innerText = previousBalanceTotal + amount;
     }
     else{
      balanceTotal .innerText = previousBalanceTotal - amount;
     }
  }
   document.getElementById('deposit-button').addEventListener('click', function(){

    //  get current deposit
    // const totalAmount = document.getElementById('deposit-total');
    // const depositTotalText = totalAmount.innerText;
    // const previousTotal = parseFloat(depositTotalText);

    // totalAmount.innerText = previousTotal + depositAmount;
    // console.log(depositTotalText);

    // updete balance

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal .innerText = previousBalanceTotal + depositAmount;

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
      updeteBalance(depositAmount,true);
      updeteTotalField ('deposit-total', depositAmount);
    }






});
   // handle withdraw button
   document.getElementById('withdraw-button').addEventListener('click',function(){
    // console.log('withdraw button click');
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // // console.log(withdrawAmountText);
    // const withdrawAmount = parseFloat(withdrawAmountText);
   


    // updete withdraw total

    //  const withdrawTotal = document.getElementById('withdraw-total');
    //  const previousWithdrawTotalText = withdrawTotal.innerText;
    //  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    //  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    


     

    //  updete balance after withdraw

    //  const balanceTotal = document.getElementById('balance-total');
    //  const balanceTotalText = balanceTotal.innerText;
    //  const previousBalanceTotal = parseFloat(balanceTotalText );
    //  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    const withdrawAmount= getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0  && withdrawAmount < currentBalance){
      updeteTotalField('withdraw-total', withdrawAmount);
      updeteBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
      console.log('you cnn not withdraw more than what you have in your account');
    }
});