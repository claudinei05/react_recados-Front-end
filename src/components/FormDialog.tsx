import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectRecados,
  updateRecados,
} from "../store/modules/ListaRecadosSlice";

interface OpenMessage {
  open: boolean;
  close: () => void;
  id: string;
}
export default function FormDialog({ open, close, id }: OpenMessage) {
  const formRedux = useAppSelector(selectRecados);
  useEffect(() => {
    const recado = formRedux.find((recado) => recado.description === id);
    setDescription(recado?.description);
    setDetailing(recado?.detailing);
  }, [id]);

  const dispatch = useAppDispatch();
  const [description, setDescription] = useState<string | undefined>("");
  const [detailing, setDetailing] = useState<string | undefined>("");
  const [idErrands, setErrands] = useState("");
  const handleClick = () => {
    dispatch(
      updateRecados({
        id: idErrands as string,
        changes: { detailing },
      })
    );
    close();
  };

  return (
    <div>
      <Dialog open={open} onClose={close}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="description"
            fullWidth
            variant="standard"
            onChange={(ev) => setDescription(ev.target.value)}
            value={description}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="detailing"
            fullWidth
            variant="standard"
            onChange={(ev) => setDetailing(ev.target.value)}
            value={detailing}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={() => handleClick()}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
