import React from "react";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { listErrands } from "../../services/api.serverce";
import { ListaRecTypes } from "../../types";

export const listErrandsActions = createAsyncThunk(
  "errands/list",
  async (userId: string) => {
    const result = await listErrands(userId);
    if (result.ok) {
      return result.data;
    }
    return [];
  }
);
// export const

const errandAdapter = createEntityAdapter<ListaRecTypes>({
  selectId: (item) => item.description,
});

export const { selectAll: selectRecados, selectById: selectErrandsById } =
  errandAdapter.getSelectors((state: RootState) => state.recados);

const errandsSlice = createSlice({
  name: "recados",
  initialState: errandAdapter.getInitialState(),
  reducers: {
    addRecados: errandAdapter.addOne,
    addMany: errandAdapter.addMany,
    updateRecados: errandAdapter.updateOne,
    deleteRecados: errandAdapter.removeOne,
  },
  extraReducers(builder) {
    builder.addCase(listErrandsActions.fulfilled, errandAdapter.setAll);
  },
});

export const { addRecados, addMany, updateRecados, deleteRecados } =
  errandsSlice.actions;
export default errandsSlice.reducer;
