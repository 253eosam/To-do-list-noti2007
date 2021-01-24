# 📝 To-do-list

> 할일을 기록하고 수행결과를 표시할 수 있는 **To Do List** 웹 페이지입니다.

-   모바일 버전
-   REST API & AJAX 통신

#### Ref [FE](./frontend/readme.md), [BE](./backend/readme.md)

<br>

## 🔨 사용 기술

![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white)

<br>

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

-   Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
-   Spring boot - [Spring boot](https://start.spring.io/) create new project
-   Docker - docker hub [install](https://hub.docker.com/?overlay=onboarding)

<br>

## 💻 개발 환경 및 라이브러리(dependency)

-   Spring v5.3.2
-   Spring Boot v2.4.1
-   Apache Tomcat v9.0.41 (Embedded)
-   **Mysql 8.0.22**
-   **jdk 1.8.0_261**
-   Hibernate ORM core v5.4.25.Final
-   spring boot starter data-jpa 2.4.1
-   HikariCP 3.4.5
-   springfox swagger2 2.9.2
-   **maven 3.2 이상**

<br>

## ▶ Run

### Docker 설치 후 docker-compose 실행

```bash
    cd ./to-do-list-noti2007
    docker-compose up
```

docker container가 정상적으로 실행되면 로컬에 DB환경 구축 완료 (기존 DB와 port 충돌 조심!!)

### spring server 실행

```bash
    cd backend
    mvn clean package
    java -jar todoapp-0.0.1-SNAPSHOT.jar
```

### Front는 아래 경로로 들어가 브라우저를 통해 열어서 실행

```bash
    cd ./to-do-list-noti2007/frontend
    # index.html 을 실행
```

### swagger

[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

<br>

## 🏞 디자인

![메인 화면](./frontend/assets/feature-guide.gif)

<br>

## 기능 정리

-   회원가입에 기능을 집중시키지않고 To do list 자체 기능을 빨리 만드는 것을 목표로함.

### 할일

-   등록, 삭제, 아이디 별 조회, 완료 상태 숨기기, 필터 값만 보이기

### 유저

-   닉네임을 넣고 조회시 없으면 새롭게 생성, 기존에 존재하면 불러오기
