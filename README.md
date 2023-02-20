# 쇼핑몰

H&M 클론코딩  
https://jeonga-yeon.github.io/shopping-mall/
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

<br />

## 문제 해결

1. 로컬 스토리지에 redux state 저장하기

   redux-persist를 설치

   ```
   npm install redux-persist
   ```

   persist의 설정을 작성

   ```
   const persistConfig = {
      key: "root",
      storage,
      whiteList: [
      "userReducer",
      "authenticateReducer",
      "heartReducer",
      "cartReducer",
      ],
    };
   ```

   persistConfig와 rootReducer를 내보낸다.

   ```
   const rootReducer = combineReducers({
      user: userReducer,
      auth: authenticateReducer,
      product: productReducer,
      heart: heartReducer,
      cart: cartReducer,
    });

    export default persistReducer(persistConfig, rootReducer);
   ```

   createStore에 persistStore를 넣는다. persistor는 localStorage를 관리한다.

   ```
   import store from "./redux/store";
   import { persistStore } from "redux-persist";

   const persistor = persistStore(store);

   <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
   </Provider>
   ```

2. 즐겨찾기 기능 적용

   하트를 누른 상품들을 idList에 넣고 product api에서 idList에 있는 id를 가진 것들로 객체를 간추림 -> 그러나 바로 적용되지 않음

   ```
    onClick={() => {
      dispatch({ type: "HEART", payload: { id: item?.id } });
          dispatch(heartAction.heartList(idList));
    }}
   ```

   이 코드가 잘못되었다. onClick 함수에는

   ```
   dispatch({ type: "HEART", payload: { id: item?.id } })}
   ```

   이 코드만 남겨두고

   ```
    useEffect(() => {
      dispatch(heartAction.heartList(idList));
    }, [idList]);

   ```

   useEffect에 코드를 옮겨주니 해결됐다.

   <br />
   <br />

## 파일구조

    - src
      - components
        - CartCard.js
        - Footer.js
        - Navbar.js
        - ProductCard.js
      - pages
        - Cart.js
        - Heart.js
        - Join.js
        - Login.js
        - ProductDetail.js
        - ProductsAll.js
      - redux
        - actions
          - heartAction.js
          - productAction.js
        - reducers
          - authenticateReducer.js
          - cartReducer.js
          - heartReducer.js
          - index.js
          - productReducer.js
          - userReducer.js
        - store.js
      - App.js
      - index.tsx

<br />

## 사용 기술

```
React, Redux, styled-components
```

<br />
