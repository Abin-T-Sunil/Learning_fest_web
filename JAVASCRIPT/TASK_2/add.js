function findSum(){
  let num1=parseFloat(document.querySelector("#sum1").value) || 0;
  let num2=parseFloat(document.querySelector("#sum2").value) || 0;
  let fresult=num1+num2;
  document.querySelector('#result').textContent = fresult;
}