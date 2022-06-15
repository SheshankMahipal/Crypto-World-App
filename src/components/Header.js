import React from "react";
import {
  AppBar,
  Select,
  Typography,
  Container,
  Toolbar,
  MenuItem,
} from "@material-ui/core";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "orange",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {currency,setCurrency} = CryptoState();
//    console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
             onClick={() => navigate("/")} className={classes.title} variant="h6" >
              Crypto World 💰
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
