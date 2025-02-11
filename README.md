nest.js

# 폴더 구조

`src/main.ts`
코어 함수인 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일.

`app.module.ts`
애플리케이션의 루트 모듈

`app.controller.ts`
단일 라우트를 가진 기본 컨트롤러

`app.service.ts`
단일 메서드를 가진 기본 서비스

---

# Decorators

- nestjs가 클래스와 메서드의 역할을 인식하고 제어할 수 있도록 하는 기능
- nestjs의 핵심 개념은 데코레이터 기반으로 작동 (필수 개념)

---

# Services

nestjs는 controller를 비지니스 로직과 구분 짓고 싶어한다.
컨트롤러는 그냥 url을 가져오는 역할을 할뿐이다.
서비스는 function을 가지고 있는 부분

정리 : controller는 get(url) && return service(function)

# package

class-validator, class-transformer 대신
zod 사용해보겠음
이게 더 간결하다고 생각됨


### postgreSQL, drizzle-orm, zod 

- 테이블 생성
- 테이블 조회
- 테이블 수정
- 테이블 삭제

이렇게 예시 만듬 
내일 좀 정리까지 해놓자 