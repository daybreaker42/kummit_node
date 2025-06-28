const express = require('express'); // Express 프레임워크 import
const app = express(); // Express 애플리케이션 인스턴스 생성
const PORT = 3003; // 서버 포트 설정

// /hello 엔드포인트 정의 - GET 요청 시 "Hello World" 반환
app.get('/hello', (req, res) => {
    res.send('Hello World'); // 클라이언트에게 "Hello World" 문자열 응답
});

// 도전 기록 목록 조회
app.get('/api/users/me', (req, res) => {
  // json data 반환
  const data = {
    "userId": 0,
    "username": "kuit",
    "tier": "SILVER",
    "level": 2,
    "language": "Java",
    "rating": 2,
    "streak_days": 2
  };
  res.json(data);
});

// 서버 시작 및 포트 리스닝
app.listen(PORT, '0.0.0.0', () => { // '0.0.0.0'으로 바인딩하여 모든 인터페이스에서 접근 가능하도록 설정
    console.log(`Server is running on http://localhost:${PORT}`); // 서버 시작 확인 메시지
});
