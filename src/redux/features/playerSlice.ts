import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../services/types";

type PlayerState = {
  currentSongs: any[];
  currentIndex: number;
  isActive: boolean;
  activeSong?: Song;
  genreListId: string;
};

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  genreListId: "",
} as PlayerState;

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state: PlayerState, action) => {
      state.activeSong = action.payload.song;
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state: PlayerState, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state: PlayerState, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, selectGenreListId } =
  playerSlice.actions;

export default playerSlice.reducer;
