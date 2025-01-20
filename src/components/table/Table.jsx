import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

function createData(name, type, id, date, status) {
  return { name, type, id, date, status };
}

const rows = [
  createData("Dell", "Inspiron 15", "1800456789", "22/11/2024", "Pending"),
  createData("Samsung", "Galaxy S23", "1800123456", "05/12/2024", "Approved"),
  createData("Sony", "Bravia X90J", "1800987654", "18/01/2025", "Delivered"),
  createData("HP", "Pavilion x360", "1800765432", "10/02/2025", "Pending"),
  createData(
    "Microsoft",
    "Surface Pro 9",
    "1800654321",
    "28/03/2025",
    "Approved"
  ),
];

function makeStyle(status) {
  if (status === "Approved") {
    return {
      background: "rgb(145 245 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
}

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029 " }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product </TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Product Id</TableCell>
              <TableCell align="left">Order Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="table-details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
