import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ControlBarState {
  searchTerm: string;
  filterContinent: string | null;
  sortOption: 'name' | 'distance' | null;
  temperatureUnit: 'metric' | 'imperial';
}

const initialState: ControlBarState = {
  searchTerm: '',
  filterContinent: null,
  sortOption: null,
  temperatureUnit: 'metric',
};

const controlBarSlice = createSlice({
  name: 'controlBar',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilterContinent: (state, action: PayloadAction<string | null>) => {
      state.filterContinent = action.payload;
    },
    setSortOption: (
      state,
      action: PayloadAction<'name' | 'distance' | null>
    ) => {
      state.sortOption = action.payload;
    },
    toggleTemperatureUnit: (state) => {
      state.temperatureUnit =
        state.temperatureUnit === 'metric' ? 'imperial' : 'metric';
    },
  },
});

export const {
  setSearchTerm,
  setFilterContinent,
  setSortOption,
  toggleTemperatureUnit,
} = controlBarSlice.actions;

export default controlBarSlice.reducer;
