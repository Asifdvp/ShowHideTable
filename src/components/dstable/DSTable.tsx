import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";
import ShowIcon from "./ShowIcon";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { ListItemIcon } from "@mui/material";
import TextField from "@mui/material/TextField";

function createData(
  id: number,
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string
) {
  return { id, name, calories, fat, carbs, protein };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const rows = [
  createData(
    1,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    2,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    3,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    4,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    5,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    6,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    7,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    8,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    9,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    10,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
  createData(
    11,
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı",
    "Sura Suralı"
  ),
];

export default function DSTable() {
  const showHideTableColumn = () => {
    console.log("ShowHideColumnEvent");
    setOpen(!open);
    console.log(open);
  };
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleCLick:any = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <TableContainer component={Paper} className="dstable-root">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tarix aralığı</TableCell>
            <TableCell align="right">KYS</TableCell>
            <TableCell align="right">Həkim</TableCell>
            <TableCell align="right">FİN</TableCell>
            <TableCell align="right">Pasientin adı</TableCell>
            <TableCell align="right">Pasientin soyadı</TableCell>
            <TableCell align="right">Çağırış ünvanı</TableCell>
            <TableCell align="right">Rayon</TableCell>
            <TableCell align="right">
              <FormControl>
                <Select
                  native={false}
                  open={open}
                  onOpen={ handleCLick}
                  onClose={handleCLick}
                  //  onOpen={onOpen}
                  //  onClose={onClose}
                  // onClick={handleCLick}
                
                  multiple
                  value={personName}
                  onChange={handleChange}
                  // input={<ShowIcon/>}
                  //  IconComponent={ShowIcon}
                  // IconComponent={ShowIcon}
                  // inputComponent={<ShowIcon onClick={handleCLick} />}
                  renderValue={() => null}
                   input={<OutlinedInput label="Tag" />}
                  MenuProps={MenuProps}
                  // SelectDisplayProps={<ShowIcon/>}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name} >
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
                <ShowIcon onClick={handleCLick} />
              </FormControl>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
