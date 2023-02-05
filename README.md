# 쇼핑몰

H&M 클론코딩  
https://my-shop.herokuapp.com/
<br />
<br />

## 주요 기능

✅ 전체 상품 화면  
모든 상품이 나열되어 있고 하트를 누르면 즐겨찾기에 저장된다.
![main](https://user-images.githubusercontent.com/76932302/216816671-9aee9000-6acf-4ac0-a472-b99329e15c49.gif)

✅ 상품 상세 페이지  
즐겨찾기에 저장할 수 있고 수량과 사이즈를 선택해 장바구니에 담을 수 있다.
![detail](https://user-images.githubusercontent.com/76932302/216816977-c30af915-5160-427f-9102-03c74944c376.gif)

✅ 회원가입

![join](https://user-images.githubusercontent.com/76932302/216817258-6d41f955-14fa-475d-9e36-5b24fc22715d.gif)

✅ 로그인

![shoplogin](https://user-images.githubusercontent.com/76932302/216819101-2c0bcbee-5bcc-4d8d-8ec1-7224b70085cd.gif)

✅ 상품 검색

![search](https://user-images.githubusercontent.com/76932302/216819291-2f7b650c-6f01-4296-8ca9-5bb7d73a9e2e.gif)

✅ 즐겨찾기  
하트를 누르면 즐겨찾기에 추가되고 다시 한 번 더 누르면 삭제된다.

![heart](https://user-images.githubusercontent.com/76932302/216819585-c16e4ce9-3068-4103-972a-b2b40e1bfe79.gif)

✅ 장바구니
수량과 사이즈를 결정해서 장바구니에 담을 수 있다. 로그인을 한 상태에서만 결제를 진행할 수 있다.

![cart](https://user-images.githubusercontent.com/76932302/216821389-748a3025-dfb2-4cda-842c-12b82daf5dcb.gif)

## 파일구조

    - src
      - components
        * CartCard.js
        * Footer.js
        * Navbar.js
        * ProductCard.js
      - pages
        * Cart.js
        * Heart.js
        * Join.js
        * Login.js
        * ProductDetail.js
        * ProductsAll.js
      - redux
        - actions
          * heartAction.js
          * productAction.js
        - reducers
          * authenticateReducer.js
          * cartReducer.js
          * heartReducer.js
          * index.js
          * productReducer.js
          * userReducer.js
        * store.js
      * App.js
      * index.tsx

<br />

사용 기술

```
React, Redux, styled-components
```

<br />
