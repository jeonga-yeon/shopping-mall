function heartList(idList) {
  return async (dispatch, getState) => {
    try {
      const url = `https://my-shop.herokuapp.com/products`;
      const response = await fetch(url);
      const data = await response.json();
      const heartData = data.filter((item) => idList.includes(item.id));
      dispatch({ type: "HEART_SUCCESS", payload: { heartData } });
    } catch (error) {
      dispatch({ type: "HEART_ERROR", payload: { error } });
    }
  };
}

export const heartAction = { heartList };
