//import React, { useCallback } from "react";
import React from "react";
import {
  Card,
  Grid,
  Button,
  Paper,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import {
//   deleteRecados,
//   selectRecados,
// } from "../store/modules/ListaRecadosSlice";
import FormMessage from "../components/FormMessage";
// import { updateOne } from "../store/modules/UserSlice";
//import FormDialog from "../components/FormDialog";
// import { set } from "immer/dist/internal";

const ErrandsFile: React.FC = () => {
  //   //O allrecadosRedux ta pegando meu estado do meu ListaRecadosSlice.ts
  // const allrecadosRedux = useAppSelector(selectRecados);
  //   const dispatch = useAppDispatch();
  //   //ESTADO NA LINHA 28 E 29 E DO MEU COMPONENTE FormDialog
  //   const [open, setOpen] = React.useState(false);
  //   const [id, setID] = React.useState<string>("");

  //   //ESTA SENDO DESPARADA QUANDO CLICO NO BOTÃO EDITAR
  //   const handleClickOpen = (id: string) => {
  //     setOpen(true);
  //     setID(id);
  //   };
  //   //TA SENDO DISPARADO NO BOTÃO Cancel NO COMPONENTE FormDialog
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const recDelete = useCallback((description: string) => {
  //     dispatch(deleteRecados(description));
  //   }, []);

  return (
    <Grid container>
      <ResponsiveAppBar />
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          padding: "0 5rem ",
          backgroundColor: "#4253b1",
        }}
        justifyContent="center"
      >
        <Grid>
          <Paper
            square
            elevation={0}
            sx={{
              background: "#ca9a40",
              color: "black",
              borderRadius: "10px ",
              padding: "50px",
              margin: "15px",
            }}
          >
            <Grid container spacing={2}>
              <FormMessage />
              {/* {allrecadosRedux.map((item) => { */}
              return ({/* <Grid item xs={3} sx={{}} key={item.description}> */}
              <Grid item xs={3} sx={{}}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Description
                    </Typography>
                    <Typography variant="h4" component="div">
                      {/* {item.description} */}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Detailing
                    </Typography>
                    <Typography variant="body2">
                      {/* {item.detailing} */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      // onClick={() => handleClickOpen(item.description)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      // onClick={() => recDelete(item.description)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<FolderCopyIcon />}
                      // onClick={() => recDelete(item.description)}
                    >
                      File
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              );
              {/* })} */}
            </Grid>
            {/* <FormDialog open={open} close={handleClose} id={id}></FormDialog> */}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ErrandsFile;
