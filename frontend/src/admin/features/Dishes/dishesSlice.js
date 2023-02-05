import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDishes,
  fetchAddDish,
  fetchDeleteDish,
  fetchModifyDish,
} from "../../../services/dishes";

const initialState = {
  dishes: [],
  activeDish: null,
  filtersDishes: {
    phrase: "",
    category: "",
    isRecommended: "",
  },
  checkedDishes: [],
  loading: false,
  error: null,
};

export const fetchDishes = createAsyncThunk("dishes/getDishes", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return await fetchAllDishes();
});

const dishesSlice = createSlice({
  name: "dishes",
  initialState: initialState,
  reducers: {
    addDish: (state, { payload }) => {
      fetchAddDish(payload);
      state.dishes.push(payload);
    },
    deleteDish: (state, { payload }) => {
      fetchDeleteDish(payload);
      state.dishes = state.dishes.filter((dish) => payload.id !== dish.id);
      state.activeDish = null;
    },
    modifyDish: (state, { payload }) => {
      fetchModifyDish(payload);
      state.dishes = state.dishes.map((dish) =>
        dish.id === payload.id ? payload : dish
      );
    },
    clearDishes: () => initialState,
    setActiveDish: (state, { payload }) => {
      state.activeDish = payload;
    },
    updateCheckedDishes: (state, { payload }) => {
      state.checkedDishes = payload;
    },
    updateFilterDishes: (state, { payload }) => {
      state.filtersDishes = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dishes = payload;
    });
    builder.addCase(fetchDishes.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export const {
  addDish,
  deleteDish,
  clearDishes,
  modifyDish,
  setActiveDish,
  updateCheckedDishes,
  updateFilterDishes,
} = dishesSlice.actions;

export default dishesSlice.reducer;
