<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>회원가입</title>
    <link rel="stylesheet" href="_sign_up_page.css">
</head>
<body>
    <div class="member">
        <%-- 이름 입력란 --%>
        <b>이름 *</b> 
        <div class="field_name">
            <input type="text" id="user_name" placeholder="이름 입력">
            <span class="error_next_box"></span>
        </div>

        <%-- 아이디 & 비밀번호 입력란 --%>
        <b>아이디 *</b> 
        <div class="field_id">
            <input type="text" id="user_id" placeholder="아이디 입력 (6~20자)" minlength="6" maxlength="20">
            <span class="error_next_box"></span>
        </div>

        <b>비밀번호 *</b> 
        <div class="field_password">
            <input class="userpw" type="password" id="user_pw" placeholder="비밀번호 입력 (숫자, 특수문자 포함 8~20자)" minlength="8" maxlength="20">
            <span class="error_next_box"></span>
        </div>

        <b>비밀번호 확인 *</b>
        <div class="field_password_check">
            <input class="userpwck" type="password" id="user_pwck" placeholder="비밀번호 재입력" minlength="8" maxlength="20">
            <span class="error_next_box"></span>
        </div>

        <%-- 생년월일 입력란 --%>
        <b>생년월일</b>
        <div class="field_birth">
            <div class="field_birth_year">
                <select>
                    <option disabled selected>출생년도</option>
                    <%-- 생년도 옵션 값 생성 --%>
                    <% for (int i = 1940; i <= 2023; i++) { %>
                        <option value="<%= i %>"><%= i %>년</option>
                    <% } %>
                </select>   
            </div>

            <div class="field_birth_month">
                <select>
                    <option disabled selected>월</option>
                    <%-- 월 옵션 값 생성 --%>
                    <% for (int i = 1; i <= 12; i++) { %>
                        <option value="<%= i %>"><%= i %>월</option>
                    <% } %>
                </select>
            </div>

            <div class="field_birth_day">
                <select>
                    <option disabled selected>일</option>
                    <%-- 일 옵션 값 생성 --%>
                    <% for (int i = 1; i <= 31; i++) { %>
                        <option value="<%= i %>"><%= i %>일</option>
                    <% } %>
                </select>
            </div>
        </div>

        <%-- 성별 선택 라디오 버튼 --%>
        <b>성별</b>
        <div class="field_gender">
            <input type="radio" id="gender_male" name="gender" value="M">
            <label for="gender_male">남성</label>
            <input type="radio" id="gender_female" name="gender" value="F">
            <label for="gender_female">여성</label>
        </div>

        <%-- 전화번호 입력란 --%>
        <b>전화번호 *</b> 
        <div class="field_phone">
            <input type="text" id="phone_number" placeholder="전화번호 입력 (숫자만)" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}">
            <span class="error_next_box"></span>
        </div>

        <%-- 이메일 입력란 --%>
        <b>이메일 *</b> 
        <div class="field_email">
            <input type="email" id="user_email" placeholder="이메일 입력">
            <span class="error_next_box"></span>
        </div>

        <%-- 가입 버튼 --%>
        <button type="button" id="signup_button">가입</button>

        <%-- 가입 취소 버튼 --%>
        <button type="button" id="signup_cancel_button">취소</button>
    </div>
</body>
</html>
