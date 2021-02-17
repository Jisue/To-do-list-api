# To-do-list-api
To-do-list's RESTfull API

# 2021-02-09

## REST
    - 클라이언트-서버 및 상태 비저장
    - GET,POST,PUT,DELETE
    - 리소스 : Todos

## API 설계
- get : 
    - /todos	프론트 파일을 제공, 전체 목록을 불러옴
    - /trashs	휴지통 불러옴
    - /todos/:id id값으로 특정 todo를 찾음
- post
    - /todos	list 목록을 추가
- put
    - /todos/:id 	id값으로 특정 list 수정
        - status : Edit === 목록 값 수정
        - status : Failed === 실패 처리
        - status : Done === 완료 처리
    - /trashs/:id   id 값으로 특정 데이터 복원 처리
- delete
    - /trashs/:id   id값으로 특정 list 영구삭제
    - /todos/:id    id값으로 특정 list 삭제처리


# 실행

- npm run dev : app.ts 실행
- npm run build : js파일로 빌드
- npm start : app.js 실행

# 2021-02-17

- 색상 설정을 위한 sp 변경