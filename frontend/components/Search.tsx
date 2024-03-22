import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

type Props = {
  onChange?: (query: string) => void;
  value: string;
};

export default function Search({ onChange = () => null, value }: Props) {
  return (
    <div className="relative w-40 md:w-96 flex">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          onClick={() => onChange("")}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <ClearIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
