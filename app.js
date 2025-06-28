const express = require('express'); // Express 프레임워크 import
const app = express(); // Express 애플리케이션 인스턴스 생성
const PORT = 3000; // 서버 포트 설정

// /hello 엔드포인트 정의 - GET 요청 시 "Hello World" 반환
app.get('/hello', (req, res) => {
    res.send('Hello World'); // 클라이언트에게 "Hello World" 문자열 응답
});

// 서버 시작 및 포트 리스닝
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // 서버 시작 확인 메시지
});
