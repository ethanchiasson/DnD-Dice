 //   1 - 4
  function RollD4() {
  
   d4Result = (Math.random().toFixed(3)) * 4;
   d4Result = Math.round(d4Result);
   document.getElementById('rollResult').innerHTML = d4Result
  }

//   1 - 6
function RollD6() {
  
    d6Result = (Math.random().toFixed(3)) * 6;
    d6Result = Math.round(d6Result);
    document.getElementById('rollResult').innerHTML = d6Result
   }

//   1 - 8
function RollD8() {
  
    d8Result = (Math.random().toFixed(3)) * 8;
    d8Result = Math.round(d8Result);
    document.getElementById('rollResult').innerHTML = d8Result
   }

//   1 - 10
function RollD10() {
  
    d10Result = (Math.random().toFixed(3)) * 10;
    d10Result = Math.round(d10Result);
    document.getElementById('rollResult').innerHTML = d10Result
   }

//   1 - 12
function RollD12() {
  
    d12Result = (Math.random().toFixed(3)) * 12;
    d12Result = Math.round(d12Result);
    document.getElementById('rollResult').innerHTML = d12Result
   }

//   1 - 20
function RollD20() {
  
    d20Result = (Math.random().toFixed(3)) * 20;
    d20Result = Math.round(d20Result);
    document.getElementById('rollResult').innerHTML = d20Result
   }

function RollD100() {
  
    d100Result = (Math.random().toFixed(3)) * 100;
    d100Result = Math.round(d100Result);
    document.getElementById('rollResult').innerHTML = d100Result
   }

// 10s Dice
function Roll10s() {
    const myArray = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];  
    let rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById('rollResult').innerHTML = rand;
   }

// 20s Dice
function Roll20s() {
    const myArray = ['20', '40', '60', '80', '100'];  
    let rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById('rollResult').innerHTML = rand;
   }

