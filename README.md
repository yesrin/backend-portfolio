# 포트폴리오 웹사이트

현대적이고 반응형 디자인의 개인 포트폴리오 웹사이트입니다. React, TypeScript, Tailwind CSS를 활용하여 제작되었습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **다크모드**: 사용자 선호도에 따른 테마 전환
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브한 UI
- **SEO 최적화**: 검색 엔진 최적화
- **접근성**: 웹 접근성 표준 준수
- **성능 최적화**: 빠른 로딩 속도와 최적화된 번들 크기

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 16.0 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
# 개발 모드로 실행
npm run dev
```

### 빌드
```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Projects.tsx    # 프로젝트 포트폴리오
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 전역 스타일
```

## 🎨 커스터마이징

### 색상 테마 변경
`tailwind.config.js` 파일에서 색상 팔레트를 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 더 많은 색상
  }
}
```

### 콘텐츠 수정
각 컴포넌트 파일에서 다음 내용을 수정하세요:
- 개인 정보 (이름, 이메일, 전화번호)
- 프로젝트 정보
- 기술 스택
- 소셜 미디어 링크

### 이미지 변경
- 프로필 이미지: `About.tsx`에서 이미지 URL 변경
- 프로젝트 이미지: `Projects.tsx`에서 이미지 URL 변경

## 🌟 주요 섹션

### 1. Hero 섹션
- 인상적인 첫인상
- 소셜 미디어 링크
- 행동 유도 버튼

### 2. About 섹션
- 개인 소개
- 통계 정보
- 주요 기술 미리보기

### 3. Skills 섹션
- 기술별 숙련도 표시
- 카테고리별 분류
- 추가 기술 목록

### 4. Projects 섹션
- 주요 프로젝트 하이라이트
- 프로젝트 상세 정보
- 기술 스택 태그

### 5. Contact 섹션
- 연락처 정보
- 문의 양식
- 소셜 미디어 링크

## 📱 반응형 디자인

- **모바일**: 320px - 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: 1024px 이상

## 🚀 배포

### Vercel 배포 (권장)
1. GitHub에 코드 푸시
2. Vercel 계정 생성
3. GitHub 저장소 연결
4. 자동 배포 설정

### Netlify 배포
1. `npm run build` 실행
2. `dist` 폴더를 Netlify에 드래그 앤 드롭
3. 도메인 설정

## 🔧 개발 팁

### 새로운 섹션 추가
1. `src/components/` 폴더에 새 컴포넌트 생성
2. `App.tsx`에 컴포넌트 추가
3. 네비게이션에 링크 추가

### 애니메이션 커스터마이징
Framer Motion의 다양한 애니메이션 옵션을 활용하세요:
- `initial`: 초기 상태
- `animate`: 애니메이션 상태
- `transition`: 애니메이션 설정
- `whileHover`: 호버 효과

## 📄 라이선스

MIT License

## 🤝 기여

프로젝트에 기여하고 싶으시다면:
1. Fork 생성
2. 기능 브랜치 생성
3. 변경사항 커밋
4. Pull Request 생성

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요!

---

**즐거운 코딩 되세요! 🎉**
