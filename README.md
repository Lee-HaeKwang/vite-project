# 🔥 Vite Project - Production Setup

이 프로젝트는 Vite + React + TypeScript 기반의 실무형 프론트엔드 개발 환경입니다.  
Zustand 상태관리, MUI 컴포넌트 시스템, ESLint + Prettier 포맷터,  
Semantic Release 기반 자동 버전 관리 / 릴리즈를 지원합니다.  

---

## 📦 주요 스택

| 기술 | 설명 |
|------|------|
| Vite | 빠른 번들링을 위한 개발 툴 |
| React | UI 프레임워크 |
| TypeScript | 정적 타입 언어 |
| Zustand | 상태 관리 라이브러리 |
| MUI | UI 컴포넌트 라이브러리 |
| ESLint | 코드 품질 검사기 |
| Prettier | 코드 포맷터 |
| Semantic Release | 자동 버전 관리 + changelog + tag 릴리즈 |

---

## 🛠️ 개발 환경 구성

```bash
pnpm install
pnpm dev


🧼 코드 품질 툴
ESLint: 저장 시 자동 검사
Prettier: 저장 시 자동 정렬 (config: .config/prettier.config.cjs)
lint-staged + husky: 커밋 시 자동 검사 실행

📁 절대 경로 alias
@components/*  => src/components/*
@store/*       => src/store/*
@pages/*       => src/pages/*
@hooks/*       => src/hooks/*
@utils/*       => src/utils/*
@types/*       => src/types/*

🚀 브랜치 전략 및 릴리즈 자동화
브랜치	    설명
develop	    개발용 브랜치 (pre-release: v1.0.0-develop.1 형태)
main	    배포 브랜치 (정식 릴리즈 v1.0.0)

semantic-release 실행
# 시뮬레이션 (예행연습)
pnpm run release:preview

# 실제 릴리즈
pnpm run release

📚 커밋 메시지 컨벤션 (Conventional Commits)
타입	            설명
feat:	            새로운 기능 추가
fix:	            버그 수정
chore:	            설정, 빌드 작업
docs:	            문서 작업
refactor:	        리팩토링
test:	            테스트 코드
BREAKING CHANGE:	호환성 깨지는 변경 → major 릴리즈 유도 

🔐 Git Hook 세팅
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

📦 필수 VS Code 확장 추천
ESLint
Prettier - Code formatter
GitLens
GitHub Copilot (선택)

📸 릴리즈 예시 로그
✔ next release version is 1.0.0
✔ will create tag: v1.0.0
✔ will update CHANGELOG.md
✔ will push to origin/main
