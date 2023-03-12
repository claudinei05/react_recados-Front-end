import { combineReducers } from "@reduxjs/toolkit";

import recados from "./ListaRecadosSlice";

import login from "./LoginSlice";

export default combineReducers({
  login,
  recados,
});
