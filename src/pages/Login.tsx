import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Grid, Button, Paper } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../store/modules/LoginSlice";

const ImgBackground = require("../public/assets/imgBack.png") as string;
const ImgUser = require("../public/assets/man.png") as string;
const Login: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    //event.preventDefault();

    const login = {
      user,
      password,
    };
    if (login.user === "" || login.password === "") {
      alert("Fill in the User and Password field!");
    }
    const result = await dispatch(loginActions(login)).unwrap();
    if (!result.ok) {
      alert(result.message);
      return;
    }
    navigate("/errends");
  };

  return (
    <Grid container>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          padding: "0 20px ",
          backgroundColor: "#4253b1",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <img src={ImgBackground} alt="" />
        </Grid>
        <Grid>
          <Paper
            square
            elevation={0}
            sx={{
              background: "#ca9a40",
              color: "black",
              borderRadius: "10px ",
              padding: "50px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={ImgUser} alt="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0px",
              }}
            >
              <h2>Errand List</h2>
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                onChange={(ev) => setUser(ev.target.value)}
                label="User"
                variant="outlined"
                value={user || ""}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                onChange={(ev) => setPassword(ev.target.value)}
                label="Password"
                variant="outlined"
                value={password || ""}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained" onClick={handleLogin}>
                login
              </Button>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Link href="/createaccount" variant="body2">
                {"Do not have an account yet? Create an account!"}
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Login;
