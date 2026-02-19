# Personal Skills Directory System

> 모든 프로젝트에서 재사용 가능한 개인 기술 라이브러리

## 개요

`personal-skills/` 디렉토리는 여러 프로젝트에서 사용할 수 있는 개인 기술, 유틸리티, 도구를 중앙에서 관리하는 시스템입니다.

## 구조

```
personal-skills/
├── README.md                          # 개요 및 사용법
├── config.json                        # 설정 파일
├── backend/                           # 백엔드 기술
│   └── (database-utilities, auth-middleware, etc.)
├── frontend/                          # 프론트엔드 기술
│   └── (react-hooks, css-utilities, etc.)
├── devops/                            # DevOps 및 인프라
│   └── (docker-configs, kubernetes, etc.)
├── tools/                             # 개발 도구
│   └── (build-scripts, linters, etc.)
└── utilities/                         # 공통 유틸리티
    └── string-utils/                  # 예시: 문자열 유틸리티
        ├── README.md
        └── index.js
```

## 빠른 시작

### 1. 새로운 기술 추가하기

```bash
# 백엔드 카테고리에 새로운 기술 추가
mkdir -p personal-skills/backend/my-utility
cd personal-skills/backend/my-utility
```

### 2. 필수 파일 생성하기

- `README.md` - 사용 설명서
- `index.js` (또는 `index.ts`) - 메인 구현
- `package.json` - 필요한 경우 의존성 관리

### 3. 프로젝트에서 참조하기

```javascript
// 상대 경로를 사용하여 참조
const myUtil = require('../../personal-skills/backend/my-utility');

// 또는 TypeScript
import { MyClass } from '../../../personal-skills/devops/my-tool';
```

## 카테고리별 가이드

### Backend (`personal-skills/backend/`)
- 데이터베이스 유틸리티
- 인증/인가 미들웨어
- API 클라이언트
- 검증 스키마
- 에러 핸들링

**예시:**
```
personal-skills/backend/
├── database-utilities/
├── auth-middleware/
└── api-clients/
```

### Frontend (`personal-skills/frontend/`)
- React/Vue 커스텀 훅
- CSS 유틸리티
- 폼 핸들러
- UI 컴포넌트
- 상태 관리 패턴

**예시:**
```
personal-skills/frontend/
├── react-hooks/
├── css-utilities/
└── form-helpers/
```

### DevOps (`personal-skills/devops/`)
- Docker 설정
- Kubernetes 매니페스트
- CI/CD 워크플로우
- 모니터링 설정
- 배포 스크립트

**예시:**
```
personal-skills/devops/
├── docker-configs/
├── kubernetes-manifests/
└── github-actions/
```

### Tools (`personal-skills/tools/`)
- 빌드 스크립트
- 린터 설정
- 포매터 설정
- 번들러 설정
- 코드 생성기

**예시:**
```
personal-skills/tools/
├── build-scripts/
├── eslint-config/
└── prettier-config/
```

### Utilities (`personal-skills/utilities/`)
- 문자열 처리 (`string-utils`)
- 배열 헬퍼
- 날짜 포매팅
- 에러 처리
- 유효성 검사

**예시:**
```
personal-skills/utilities/
├── string-utils/
├── array-helpers/
└── date-utils/
```

## 베스트 프랙티스

### 1. 명확한 네이밍
```
✓ Good: personal-skills/backend/database-utilities
✗ Bad: personal-skills/backend/utils
```

### 2. 문서화
각 기술 폴더는 반드시 `README.md`를 포함해야 합니다:
- 용도 설명
- 사용 예시
- API 문서
- 버전 변경사항

### 3. 독립성
각 기술은 가능한 한 독립적이어야 합니다:
- 최소한의 의존성
- 다른 personal-skills 참조 최소화

### 4. 테스트
테스트 파일을 포함하세요:
```
my-skill/
├── index.js
├── index.test.js
└── README.md
```

### 5. 버전 관리
변경사항을 문서화하세요:
```markdown
## Changelog

### v1.1.0
- Added feature X
- Fixed bug Y

### v1.0.0
- Initial release
```

## 프로젝트에서 활용하기

### Node.js/JavaScript 프로젝트

```javascript
// api-server 프로젝트
const stringUtils = require('../../../personal-skills/utilities/string-utils');

const formatted = stringUtils.toCamelCase('user-profile-name');
// 'userProfileName'
```

### TypeScript 프로젝트

```typescript
// web-app 프로젝트
import { Logger } from '../../../personal-skills/devops/logger';

const logger = new Logger('MyComponent');
logger.info('Component initialized');
```

### 다중 프로젝트 구조

```
/projects
├── personal-skills/     # 중앙 저장소 (이곳)
├── project-1/
│   └── src/
│       └── utils.ts → ../../personal-skills/utilities/...
├── project-2/
│   └── src/
│       └── helpers.js → ../../personal-skills/backend/...
└── project-3/
    └── src/
        └── styles.css → ../../personal-skills/frontend/...
```

## 업데이트 및 유지보수

### 기술 업그레이드
1. 해당 폴더에서 변경사항 적용
2. `README.md`의 Changelog 업데이트
3. 영향을 받는 모든 프로젝트 테스트
4. Git 커밋

### 폐기된 기술 관리
더 이상 사용하지 않는 기술:
1. `README.md`에 "Deprecated" 표시
2. 마이그레이션 가이드 제공
3. 일정 기간 후 삭제

## 예시: 새로운 기술 추가

### Logger 유틸리티 추가하기

```bash
mkdir -p personal-skills/tools/logger
cd personal-skills/tools/logger
```

**index.js**
```javascript
class Logger {
  constructor(name) {
    this.name = name;
  }

  info(message) {
    console.log(`[${this.name}] ${message}`);
  }

  error(message) {
    console.error(`[${this.name}] ERROR: ${message}`);
  }
}

module.exports = Logger;
```

**README.md**
```markdown
# Logger

프로젝트 전체에서 사용할 수 있는 로깅 유틸리티입니다.

## 사용 방법

const Logger = require('../../../personal-skills/tools/logger');
const logger = new Logger('MyModule');
logger.info('Hello');
```

그 다음 프로젝트에서 바로 사용 가능!

## 도움말

- 질문이나 피드백이 있으신가요? 각 기술의 `README.md`를 확인하세요.
- 새로운 기술을 추가할 때는 이 가이드를 참고하세요.
- 모든 변경사항은 Git으로 추적되므로 안전하게 관리됩니다.
