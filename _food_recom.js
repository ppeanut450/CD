function setRandomFood() {
    var foods = ["초밥", "돈까스", "냉모밀", "마라탕", "치킨", "짜장면", "짬뽕", "피자", "떡볶이", "김치찌개", "부대찌개", "삼겹살",
    "쫄면", "덮밥", "국수", "냉면", "곱창", "닭발", "족발", "보쌈", "스파게티", "찜닭", "제육볶음", "오징어볶음", "라면", "햄버거"];
    var randomIndex = Math.floor(Math.random()*foods.length);
    var inputField = document.getElementById("randomFood");
    inputField.setAttribute("placeholder", "오늘의 추천 메뉴는 " + foods[randomIndex] + "입니다!");
}

function openPopup() {
    window.open('popup.html', '팝업 제목', 'width=500, height=400');
}