import React from "react";
import { 
  Box,
  Paper,
} from "@mui/material";
import {
  CntsMain
} from "../common/Styled";
import AppHeader from "../components/AppHeader";

const Home: React.FC = () => {
  return (
  <>
    <CntsMain>
      <AppHeader />
      <Box>Home Page</Box>
      <Paper>this contents</Paper>
    </CntsMain>
  </>
  );
};

export default Home;