// 0906 이순
// var wishbtn = document.querySelector(".wishbtn");
// wishbtn.onclick = function(){
//     alert("위시리스트에 추가했습니다.");
// }




function toggleAct (button) {
        button.classList.toggle("act");
  };
  
  
// wishbtn.asddEventListener('click', wishbtn);       


var cartbtn = document.querySelector(".cartbtn");
cartbtn.addEventListener('click', function(){
	alert("장바구니에 추가했습니다.");
    location.href = "/cart/{cartId}/{productId}"; // 장바구기 클릭시 장바구니 이동
});





//
// --------- 경빈님 압도적 감사 ---------
//




// 변경해야하는 +, - 버튼, 수량, 총금액 선언
const p_num = document.querySelector(".p_num");
const minusbtn = document.querySelector(".minusbtn");
const plusbtn = document.querySelector(".plusbtn");
const totalPrice = document.querySelector(".totalPrice");

// 기본 수량
let num = 1;
// DB에서 가져온 가격을 선언
let price = document.querySelector(".price").innerText;

// 수량 변동
p_num.value = num;
// 금액 변동
sumPrice.innerText = price;

// 수량 감소시 금액과 개수 증가
minusbtn.addEventListener('click',function(){


    if(num === 1){
        alert("최소 수량은 1개입니다.")
    }
    else if(num > 1){
        num = num - 1;
        p_num.value = num; // num-1을 대입
        sumPrice.innerText = price*num;
    }

});

// 수량 추가시 금액과 개수 감소
plusbtn.addEventListener('click',function(){
    num = num + 1;
    p_num.value = num; // num+1을 대입
    totalPrice.innerText = price*num;

});
    







 
 
 

//  // 숫자 3자리 콤마찍기
// Number.prototype.formatNumber = function(){
//     if(this==0) return 0;
//     let regex = /(^[+-]?\d+)(\d)/;
//     let nstr = (this + '');
//     while (regex.test(nstr)) nstr = nstr.replace(regex, '$1' + ',' + '$2');
//     return nstr;
// };
      
    
    
    