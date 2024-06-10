import Pagination from "@mui/material/Pagination";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CustomPagination = ({ setPage, numofPages = 10 }) => {
  const handlepagechange = (Page) => {
    setPage(Page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numofPages}
          onChange={(e) => handlepagechange(e.target.textcontent)}
          color="primary"
          //   hideNextButton
          //   hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
