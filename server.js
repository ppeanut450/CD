const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 로그인 요청 처리
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 여기서 로그인 정보를 검증하고, 필요한 경우 데이터베이스 등에 접근하여 확인할 수 있습니다.
  // 검증 결과에 따라 로그인 성공 또는 실패 응답을 보냅니다.
  if (username === 'admin' && password === 'password') {
    res.send('로그인 성공!');
  } else {
    res.status(401).send('로그인 실패!');
  }
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});