import { TEST } from "./types";

// register Active Module
export const registerActiveModule = (
  activeModule,
  activeSubModule,
  subModuleComplationRatio
) => (dispatch) => {
  dispatch({
    type: TEST,
    payload: { activeModule, activeSubModule, subModuleComplationRatio },
  });
};
