function heartList(idList, setLoading) {
  return async (dispatch, getState) => {
    try {
      const url = `http://localhost:5000/products`;
      const response = await fetch(url);
      const data = await response.json();
      const heartData = data.filter((item) => idList.includes(item.id));
      dispatch({ type: "HEART_SUCCESS", payload: { heartData } });
      setLoading(false);
    } catch (error) {
      dispatch({ type: "HEART_ERROR", payload: { error } });
      setLoading(true);
    }
  };
}

export const heartAction = { heartList };
