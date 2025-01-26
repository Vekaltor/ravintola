import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchAddDish, fetchAllDishes, fetchDeleteDish, fetchModifyDish,} from "../../../services/dishes";

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

export const addDishAsync = createAsyncThunk(
    "dishes/addDish",
    async (dish, thunkAPI) => {
      try {
        await fetchAddDish(dish); // Zakładamy, że API zwraca dodany obiekt
        return dish
      } catch (error) {
        return thunkAPI.rejectWithValue("Nie udało się dodać dania");
      }
    }
);

export const deleteDishAsync = createAsyncThunk(
    "dishes/deleteDish",
    async (dish, thunkAPI) => {
      try {
        await fetchDeleteDish(dish);
        return dish;
      } catch (error) {
        return thunkAPI.rejectWithValue("Nie udało się usunąć dania");
      }
    }
);

export const modifyDishAsync = createAsyncThunk(
    "dishes/modifyDish",
    async (dishModified, thunkAPI) => {
      try {
        await fetchModifyDish(dishModified); // Zakładamy, że modyfikacja zakończyła się sukcesem
        return dishModified; // Zwróć obiekt wejściowy jako wynik
      } catch (error) {
        return thunkAPI.rejectWithValue("Nie udało się zmodyfikować dania");
      }
    }
);


const dishesSlice = createSlice({
  name: "dishes",
  initialState: initialState,
  reducers: {
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

    builder.addCase(modifyDishAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(modifyDishAsync.fulfilled, (state, { payload }) => {
      state.loading = false;
      const updatedDish = payload;
      state.dishes = state.dishes.map((dish) =>
          dish.id === updatedDish.id ? updatedDish : dish
      );
      state.error = null;
    });

    builder.addCase(modifyDishAsync.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(addDishAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addDishAsync.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dishes.push(payload);
      state.error = null;
    });
    builder.addCase(addDishAsync.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(deleteDishAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteDishAsync.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dishes = state.dishes.filter((dish) => dish.id !== payload.id);
      state.error = null;
    });
    builder.addCase(deleteDishAsync.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
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
