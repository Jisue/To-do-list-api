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
    - /edited 	수정 완료 페이지
    - /editing 	수정 페이지 불러옴
    - /todos/:id id값으로 특정 todo를 찾음
- post
    - /todos	list 목록을 추가
- put
    - /todos/:id 	id값으로 특정 list 수정
    - /todos/:id/status  상태 수정
    - /todos/:id/on    	보드on off 수정
    - /trashs/:id  id 값으로 특정 휴지통 리스트 수정
    - /trashs/:id/on
- delete
    - /todos/:id   id값으로 특정 list 제거

