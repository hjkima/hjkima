# Personal Skills Directory

개인 기술을 프로젝트 간에 공유하고 재사용할 수 있는 디렉토리입니다.

## 디렉토리 구조

```
personal-skills/
├── backend/          # 백엔드 관련 기술 (Node.js, Python, Go 등)
├── frontend/         # 프론트엔드 관련 기술 (React, Vue, 스타일링 등)
├── devops/           # DevOps 및 인프라 기술 (Docker, Kubernetes, CI/CD 등)
├── tools/            # 개발 도구 및 유틸리티
└── utilities/        # 공통 유틸리티 함수 및 헬퍼
```

## 사용 방법

### 기술 추가하기

각 카테고리 폴더에 기술별 폴더를 생성합니다:

```
personal-skills/
└── backend/
    └── database-utilities/
        ├── README.md
        ├── index.js
        └── package.json
```

### 프로젝트에서 사용하기

프로젝트에서 개인 skills를 참조할 때는:

```javascript
// Node.js 프로젝트에서
const { queryBuilder } = require('../../personal-skills/backend/database-utilities');

// TypeScript 프로젝트에서
import { Logger } from '../../personal-skills/devops/logging-service';
```

### 구조 권장사항

각 기술 폴더는 다음을 포함해야 합니다:

- `README.md` - 사용 설명서 및 API 문서
- `index.js` (또는 `index.ts`) - 메인 진입점
- `package.json` - 의존성 관리 (필요한 경우)
- 관련 테스트 파일

## 버전 관리

개인 skills는 Git으로 관리되므로 모든 변경사항이 기록됩니다. 기술을 업그레이드할 때는 README를 업데이트하여 변경사항을 문서화하세요.

## 예시

### 1. 로깅 유틸리티

```
personal-skills/tools/logger/
├── README.md
├── index.js
└── logger.config.js
```

### 2. 데이터베이스 헬퍼

```
personal-skills/backend/db-helpers/
├── README.md
├── index.js
├── migrations.js
└── query-builder.js
```

### 3. 인증 미들웨어

```
personal-skills/backend/auth-middleware/
├── README.md
├── index.js
└── strategies/
```
