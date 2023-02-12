/*計算結果画面を取得*/
var result = document.getElementById("result_display");

/*ボタンをおして数字を表示*/
function edit(elem){
 result.value = result.value + elem;
 }

/*ボタンをおして記号（小数点含む）を表示。※連続入力できないようにする*/
function edit2(elem){
 if(result.value.slice(-1) === "+"
  || result.value.slice(-1) === "-" 
  || result.value.slice(-1) === "*" 
  || result.value.slice(-1) === "/"
  || result.value.slice(-1) === "."){
   result.value = result.value.slice(0,-1);
   result.value = result.value + elem;
  }else{
   result.value = result.value + elem;
 }
}
 
/*最初の数字が0または00の場合非表示に*/
function edit3(elem){
 if(result.value.slice(0) == 0 ){
  result.value = result.value;
  }
  else{
  result.value = result.value + elem;
 }
}

/*「＝」を押すと計算する*/
function cal(){
 result.value = new Function("return " + result.value)();
 }
 
 /*「AC」でリセットする */
 function reset(){
  result.value = "";
 }
 