# webpack-example

webpack 생활코딩 (2022-06-18)

- webpack.config.js 파일 내 웹팩 설정값 추가
  -> npx webpack 실행 시 자동으로 설정값 읽어와서 번들링

- 로더
  - css와 같은 파일들도 번들링 해줌
  - 얼마나 자유롭게 사용할 줄 아는지가 핵심임
  - 공식 페이지에 loaders 확인

- output
  - 여러개 설정 가능

- plugin
  - 로더는 모듈을 아웃풋으로 만들어 가는 과정에서 사용되는 것
  - 플러그인은 최종적인 결과물을 변형 (더 자유로운 일들을 할 수 있다)

- npx webpack --watch
  - 소스 변경이 일어나면 자동으로 webpack 번들링

- lodash

- npm 패키지들을 webpack으로 가져와서 쓸 수 있음

- DevServer
  - live reload, 수정된 부분만 바꿀 수 있음 (hot module replacement)

- Code splitting
  - 번들링 하면 파일이 너무 커질 수 있음 -> 이걸 쪼개줌

- Lazy loading
  - 쪼개진걸 필요할때마다 로딩하는 거

공식문서 - https://webpack.js.org/concepts/
