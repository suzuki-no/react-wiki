import { 
    Box 
 } from "@mui/material";
 import { styled } from "@mui/material/styles";
 import style from "styled-components";

export const Standard = styled(Box)(() => ({
    position: 'relative',
}));

export const CntsMain = styled(Box)(() => ({
    position: 'relative',
    width: '100vw',
    height: '100dvh',
    fontSize: '1.6rem',
    color: '#3e3e3e',
    backgroundColor: '#f3f3f3',
}));