# 🛠 Vite + React 프로젝트 개발환경 (with GitHub Actions)

> 작성일: 2025-04-02  
> 작성자: **Lee-HaeKwang**  
> 브랜치 전략: `main` (배포), `develop` (기능 개발)

---

## 🧾 프로젝트 개요

이 프로젝트는 다음을 모두 자동화 및 구성한 **모던 React 개발 템플릿**입니다:

- `Vite + React + TypeScript`
- `ESLint`, `Prettier`, `Commitlint`, `Semantic Release`
- `GitHub Actions`를 이용한 자동 릴리즈

---

## 📁 프로젝트 구조

```bash
vite-project/
├── .husky/               # Git hook
├── .config/              # eslint, prettier, commitlint 설정
├── .github/workflows/    # GitHub Actions 워크플로우
├── public/
├── src/                  # React 소스 코드
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
```

---

## 🧑‍💻 개발 환경 세팅

### 1. 패키지 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm dev
```

---

## 📦 주요 라이브러리 및 툴

| 분류 | 사용 기술 |
|------|-----------|
| **번들러** | Vite |
| **프레임워크** | React + TypeScript |
| **스타일** | MUI |
| **정적 분석** | ESLint + Prettier |
| **커밋 검사** | commitlint + husky |
| **버전 릴리즈** | semantic-release |
| **CI** | GitHub Actions |

---

## ✅ Git & 릴리즈 전략

### 브랜치 전략

- `main`: 배포
- `develop`: 기능 개발 및 CI/CD 테스트

### 커밋 메시지 컨벤션 (Conventional Commits)

| 타입 | 설명 |
|------|------|
| `feat:` | 새로운 기능 |
| `fix:` | 버그 수정 |
| `chore:` | 설정 관련 작업 |
| `docs:` | 문서 수정 |
| `refactor:` | 리팩토링 |
| `test:` | 테스트 코드 |
| `BREAKING CHANGE:` | 주요 변경 (버전 `major` 올라감) |

---

## 🔄 릴리즈 자동화 (CI/CD)

### 릴리즈 방식

- `develop` 브랜치에서 `feat:` 등 유효한 커밋 발생 시 자동 릴리즈
- 버전 자동 증가 + `CHANGELOG.md` 생성 + GitHub Release 자동 게시

### GitHub Actions 워크플로우 위치

```
.github/workflows/release.yml
```

---

## 🧰 설정 파일 요약

| 파일 | 역할 |
|------|------|
| `.eslintrc.cjs` | ESLint 설정 |
| `.config/prettier.config.cjs` | Prettier 설정 |
| `.config/commitlint.config.cjs` | Commit message 설정 |
| `release.config.cjs` | semantic-release 설정 |
| `.husky/` | Git hook 스크립트 저장 디렉토리 |

---

## ⚠️ 주의 사항

- `develop` 브랜치에서 커밋 메시지가 잘못되면 릴리즈 안 됨
- semantic-release는 `pnpm` 기준으로 구성됨 (npm X)
- GitHub personal access token은 `GITHUB_TOKEN`으로 자동 처리됨 (Actions 실행만 되면 OK)

---

## 🎉 마무리

이 템플릿으로 프로젝트 시작하면 자동으로 릴리즈되고  
커밋 검사부터 포맷팅까지 알아서 굴러감!

> 세상에 손 안 대고 코드 굴리기, 이제 시작이다 !!
