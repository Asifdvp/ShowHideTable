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
import { InputAdornment, ListItemIcon } from "@mui/material";
import TextField from "@mui/material/TextField";
/* Imports */

/* Functions */
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
// Drowdown menu css
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { id: 1, name: "Tarix aralığı",checked:true },
  { id: 2, name: "KYS" ,checked:true},
  { id: 3, name: "Həkim",checked:true },
  { id: 4, name: "FİN",checked:true },
  { id: 6, name: "Pasientin adı" ,checked:true},
  { id: 7, name: "Pasientin soyadı",checked:true },
  { id: 8, name: "Çağırış ünvanı",checked:true },
  { id: 9, name: "Rayon",checked:true },
];

export default function DSTable() {
  const [rows, setRows] = React.useState<any>([
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
  ]);
  const [names,setNames] = React.useState<any>([
    { id: 1, name: "Tarix aralığı",checked:true },
    { id: 2, name: "KYS" ,checked:true},
    { id: 3, name: "Həkim",checked:true },
    { id: 4, name: "FİN",checked:true },
    { id: 6, name: "Pasientin adı" ,checked:true},
    { id: 7, name: "Pasientin soyadı",checked:true },
    { id: 8, name: "Çağırış ünvanı",checked:true },
    { id: 9, name: "Rayon",checked:true },
  ]);
  const [thead,setThead] = React.useState(names);
  // const [thead, setThead] = React.useState([
  //   { id: 1, name: "Tarix aralığı" },
  //   { id: 2, name: "KYS" },
  //   { id: 3, name: "Həkim" },
  //   { id: 4, name: "FİN" },
  //   { id: 6, name: "Pasientin adı" },
  //   { id: 7, name: "Pasientin soyadı" },
  //   { id: 8, name: "Çağırış ünvanı" },
  //   { id: 9, name: "Rayon" },
  // ]);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<any>) => {
  
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    // console.log(personName);
    // console.log(value);
    //Rows filter function
    const new_row = rows.filter((row: any) => {});
console.log(value);
setThead(value)
names.map((item:any)=>{
  
})

//     const new_head = names.map((head: any) => {
//       if (value.length > 0) {
//         value.filter((item: any) => {
//           if (head.id === item.id) {
// const arr = [];
// arr.push(head);
// console.log(arr);

//             setThead([head])
         
//           }
//         });
//       } else {
//         setThead(names);
//       }
//     });


  };
  const handleShowHideColumn: any = () => {
    setOpen(!open);
  };
   const handleChang = (event:any)=>{
 console.log(event.target);
// event.target.cheecked=false

   }
  return (
    <TableContainer component={Paper} className="dstable-root">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {thead.map((item: any) => (
              <TableCell key={item.id} align="right">
                {item.name}
              </TableCell>
            ))}
   
            <TableCell align="right">
              <FormControl>
                <Select
                  native={false}
                  open={open}
                  onClose={handleShowHideColumn}
                  multiple
                  value={personName}
                  onChange={handleChange}
                  IconComponent={function () {
                    return <ShowIcon onClick={handleShowHideColumn} />;
                  }}
                  renderValue={() => null}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                >
                  {names.map((name: any) => (
                    <MenuItem key={name.id} value={name}>
                       {/* checked={personName.indexOf(name) > -1} */}
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
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
