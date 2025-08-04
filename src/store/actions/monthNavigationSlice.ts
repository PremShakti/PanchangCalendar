import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MonthNavigationState {
  currentMonth: string;
  monthNames: string[];
  monthDisplayNames: string[];
}

const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const monthDisplayNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialState: MonthNavigationState = {
  currentMonth: "january",
  monthNames,
  monthDisplayNames,
};

const monthNavigationSlice = createSlice({
  name: "monthNavigation",
  initialState,
  reducers: {
    setCurrentMonth: (state, action: PayloadAction<string>) => {
      state.currentMonth = action.payload;
    },
    goToPreviousMonth: (state) => {
      const currentIndex = state.monthNames.findIndex(
        (name) => name.toLowerCase() === state.currentMonth.toLowerCase()
      );
      const validIndex = currentIndex !== -1 ? currentIndex : 0;
      const prevIndex = validIndex === 0 ? 11 : validIndex - 1;
      state.currentMonth = state.monthNames[prevIndex];
    },
    goToNextMonth: (state) => {
      const currentIndex = state.monthNames.findIndex(
        (name) => name.toLowerCase() === state.currentMonth.toLowerCase()
      );
      const validIndex = currentIndex !== -1 ? currentIndex : 0;
      const nextIndex = validIndex === 11 ? 0 : validIndex + 1;
      state.currentMonth = state.monthNames[nextIndex];
    },
  },
});

export const { setCurrentMonth, goToPreviousMonth, goToNextMonth } =
  monthNavigationSlice.actions;
export default monthNavigationSlice.reducer;
