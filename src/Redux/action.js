import { HOME_MOTTO } from "./types";

///// Change HOME_MOTTO
export const changeHomeMotto = (HomeMottoLine1, HomeMottoLine2) => (
  dispatch
) => {
  dispatch({
    type: HOME_MOTTO,
    payload: { HomeMottoLine1, HomeMottoLine2 },
  });
};

///// register show teklif al modal
// export const showTeklifAlModal = (showModal) => (dispatch) => {
//   dispatch({
//     type: SHOW_MODAL,
//     payload: { showModal },
//   });
// };
