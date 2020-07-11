import { HOME_MOTTO } from "./types";

const initialState = {
  test: "Hi",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HOME_MOTTO:
      return {
        ...state,
        HomeMottoLine1: action.payload.HomeMottoLine1,
        HomeMottoLine2: action.payload.HomeMottoLine2,
      };
    //   case SHOW_MODAL:
    //     return {
    //       ...state,
    //       showModal: action.payload.showModal,
    //       // hideModal: action.payload.hideModal,
    //     };
    default:
      return state;
  }
}
