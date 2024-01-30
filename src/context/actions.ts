export const fetchAllData = () => (dispatch: any) => {
  dispatch({
    type: "lOADING",
  });

  fetch(
    "https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes&file=yes&gallery=yes"
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "LOADDED_SUCCESS",
        payload: data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "LOADDED_ERROR",
        payload: err,
      })
    );
};
