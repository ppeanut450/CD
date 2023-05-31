var switchBtn = document.getElementById("sw_btn");
var popupAgree = document.querySelector(".popup_agree");
var popupDisagree = document.querySelector(".popup_disagree");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("브라우저에서 위치 정보를 지원하지 않습니다.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // 카카오 지도 생성
    var container = document.getElementById("map_container");
    var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 14,
    };
    var map = new kakao.maps.Map(container, options);
}

function openPopup() {
    // 팝업창 열기
    var popupContainer = document.getElementById("popup_container");
    var switchBtn = document.getElementById("sw_btn");

    if(switchBtn.checked) {
        popupContainer.style.display = "flex";
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        popupContainer.style.display = "none";
    }
}

function closePopup() {
    // 팝업창 닫기
    var popupContainer = document.getElementById("popup_container");
    popupContainer.style.display = "none";
}

popupAgree.addEventListener("click", function() {
    switchBtn.checked = true; // 스위치를 체크된 상태로 설정
    openPopup();
    getLocation();
});

popupDisagree.addEventListener("click", function() {
    switchBtn.checked = false; // 스위치를 체크되지 않은 상태로 설정
    closePopup();
});

switchBtn.addEventListener("click", function() {
    if (switchBtn.checked) {
        openPopup();
        getLocation();
    } else {
        closePopup();
    }
});