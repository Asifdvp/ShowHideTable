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

export default function DSTable() {
  //State

  const [rows, setRows] = React.useState<any>(body);
  const [thead, setThead] = React.useState(head);
  const [open, setOpen] = React.useState(false);

  //Checkbox Select Function
  const handleChange = (id: number) => {
    setThead((prev: any) => {
      return prev.map((item: any) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  //Show hide table column function
  const handleShowHideColumn: any = () => {
    setOpen(!open);
  };

  //Hidden rows
  const hiddenRows = React.useMemo(() => {
    const fieldNames = thead
      .filter((item) => !item.checked)
      .map((item) => item.fieldName);
    const newRows = JSON.parse(JSON.stringify(rows));
    return newRows.map((row: any) => {
      fieldNames.forEach((element) => {
        if (row[element]) {
          delete row[element];
        }
      });
      return row;
    });
  }, [rows, thead]);

  React.useEffect(() => {
    const localThead = JSON.parse(localStorage.getItem("localThead") || "null");
    if (localThead === null) {
      localStorage.setItem("localThead", JSON.stringify(thead));
    } else {
      setThead(localThead);
    }
  }, []);

  React.useEffect(() => {
    thead.every((element: any) => {
      if (!element.checked) {
        localStorage.setItem("localThead", JSON.stringify(thead));
      }
    });
  }, [thead]);

  return (
    <TableContainer component={Paper} className="dstable-root">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {thead.map((item: any) => {
              if (item.checked === true) {
                return (
                  <TableCell key={item.id} align="right">
                    {item.name}
                  </TableCell>
                );
              }
            })}

            <TableCell align="right">
              <FormControl>
                <Select
                  native={false}
                  open={open}
                  onClose={handleShowHideColumn}
                  multiple
                  value={[]}
                  IconComponent={function () {
                    return <ShowIcon onClick={handleShowHideColumn} />;
                  }}
                  renderValue={() => null}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                >
                  {thead.map((name: any) => (
                    <MenuItem key={name.id} value={name}>
                      <Checkbox
                        checked={name.checked}
                        onChange={() => handleChange(name.id)}
                      />
                      <ListItemText primary={name.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hiddenRows.map((item: any, index: any) => {
            return (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.keys(item).map((j: any, i: any) => {
                  if (j !== "id") {
                    return (
                      <TableCell align="right" key={i}>
                        {item[j]}
                      </TableCell>
                    );
                  }
                })}
                <TableCell align="right"></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const head = [
  { id: 1, name: "Tarix aral??????", checked: true, fieldName: "dateTime" },
  { id: 2, name: "KYS", checked: true, fieldName: "kys" },
  { id: 3, name: "H??kim", checked: true, fieldName: "doctor" },
  { id: 4, name: "F??N", checked: true, fieldName: "fin" },
  { id: 5, name: "Pasientin ad??", checked: true, fieldName: "pname" },
  { id: 6, name: "Pasientin soyad??", checked: true, fieldName: "psurname" },
  { id: 7, name: "??a????r???? ??nvan??", checked: true, fieldName: "address" },
  { id: 8, name: "Rayon", checked: true, fieldName: "city" },
];
const body = [
  {
    id: 1,
    dateTime: "22.11.2020",
    kys: 1,
    doctor: "Xasay",
    fin: "45345345",
    pname: "AAAAA",
    psurname: "sdsdsdsd",
    address: "Baku",
    city: "Zaqatala",
  },
  {
    id: 2,
    dateTime: "22.11.2020",
    kys: 2,
    doctor: "Xasay",
    fin: "45345345",
    pname: "AAAAA",
    psurname: "sdsdsdsd",
    address: "Baku",
    city: "Zaqatala",
  },
  {
    id: 3,
    dateTime: "22.11.2020",
    kys: 3,
    doctor: "Xasay",
    fin: "45345345",
    pname: "AAAAA",
    psurname: "sdsdsdsd",
    address: "Baku",
    city: "Zaqatala",
  },
];
