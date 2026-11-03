# 프로젝트 작업 규칙

이 프로젝트는 Vanilla JavaScript와 Vite를 사용하며, GitHub에 업로드한 뒤 Netlify와 연동해 배포합니다. 코드 작업을 시작하기 전에 이 문서를 확인하고 아래 규칙을 따릅니다.

1. HTML, CSS, JavaScript 코드는 각각 별도 파일로 작성합니다.
2. `index.html`은 프로젝트 루트에 둡니다. 애플리케이션의 CSS와 JavaScript 파일은 `src` 폴더에 두고, `vite.config.js` 등 설정 파일은 프로젝트 루트에 둡니다.
3. JavaScript는 ES 모듈 방식으로 연결합니다. CSS는 JavaScript 진입 파일에서 import하여 Vite 빌드에 포함합니다.
4. 외부 JavaScript 라이브러리는 CDN으로 불러오지 않습니다. 필요하면 `npm install`로 설치하고 모듈로 import합니다.
5. 기존 파일과 설정을 먼저 확인하고, 필요한 부분만 수정합니다.

## 빌드 및 Netlify 배포

- 빌드 명령: `npm run build`
- Vite 기본 빌드 출력 폴더: `dist`
- Netlify Build command: `npm run build`
- Netlify Publish directory: `dist`
