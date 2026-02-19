# hjkima

개인 기술 저장소 및 재사용 가능한 스킬 라이브러리

## 📁 구조

```
hjkima/
├── personal-skills/          # 모든 프로젝트에서 사용 가능한 기술 라이브러리
│   ├── backend/              # 백엔드 기술
│   ├── frontend/             # 프론트엔드 기술
│   ├── devops/               # DevOps 및 인프라
│   ├── tools/                # 개발 도구
│   ├── utilities/            # 공통 유틸리티
│   ├── config.json
│   └── README.md
├── PERSONAL_SKILLS_GUIDE.md  # 전체 사용 가이드
└── README.md                 # 이 파일
```

## 🚀 빠른 시작

### Personal Skills 라이브러리 사용하기

개인 기술을 관리하고 모든 프로젝트에서 공유하세요:

```javascript
// 프로젝트에서 personal-skills 참조
const stringUtils = require('../../../personal-skills/utilities/string-utils');

const result = stringUtils.toCamelCase('hello-world');
// 'helloWorld'
```

## 📖 문서

- [`PERSONAL_SKILLS_GUIDE.md`](./PERSONAL_SKILLS_GUIDE.md) - Personal Skills 시스템 완전 가이드
- [`personal-skills/README.md`](./personal-skills/README.md) - Personal Skills 개요
- [`personal-skills/config.json`](./personal-skills/config.json) - 설정 파일

## 🎯 주요 기능

- ✅ 모든 프로젝트에서 공유 가능한 기술 라이브러리
- ✅ 카테고리별로 조직된 구조 (Backend, Frontend, DevOps, Tools, Utilities)
- ✅ 각 기술별 독립적인 문서 및 테스트
- ✅ Git 기반 버전 관리
- ✅ 확장 가능한 아키텍처

## 📝 새로운 기술 추가하기

```bash
# 1. 새 기술 폴더 생성
mkdir -p personal-skills/[category]/[skill-name]
cd personal-skills/[category]/[skill-name]

# 2. 필수 파일 생성
# - README.md (사용 설명서)
# - index.js 또는 index.ts (구현)
# - 필요시 package.json (의존성)

# 3. 프로젝트에서 사용
const mySkill = require('../../../personal-skills/[category]/[skill-name]');
```

자세한 내용은 [`PERSONAL_SKILLS_GUIDE.md`](./PERSONAL_SKILLS_GUIDE.md)를 참조하세요.

## 💡 예시 기술

### String Utilities
```javascript
const stringUtils = require('./personal-skills/utilities/string-utils');

stringUtils.toCamelCase('hello-world');      // helloWorld
stringUtils.toSnakeCase('helloWorld');       // hello_world
stringUtils.capitalize('hello');             // Hello
stringUtils.truncate('Hello World', 8);      // Hello...
```

## 🔄 버전 관리

모든 기술은 Git으로 관리되므로:
- 변경사항이 자동으로 기록됨
- 언제든지 이전 버전으로 되돌릴 수 있음
- 모든 프로젝트에서 최신 버전 사용 가능

## 📚 카테고리

| 카테고리 | 설명 | 예시 |
|---------|------|------|
| **backend/** | 백엔드 기술 | 데이터베이스 유틸, 인증 미들웨어 |
| **frontend/** | 프론트엔드 기술 | React 훅, CSS 유틸 |
| **devops/** | DevOps 및 인프라 | Docker 설정, CI/CD 워크플로우 |
| **tools/** | 개발 도구 | 빌드 스크립트, 린터 설정 |
| **utilities/** | 공통 유틸리티 | 문자열 처리, 배열 헬퍼 |

---

더 자세한 정보는 [`PERSONAL_SKILLS_GUIDE.md`](./PERSONAL_SKILLS_GUIDE.md)를 확인하세요.
