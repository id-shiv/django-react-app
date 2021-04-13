import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { ContentTitle, ContentBody } from "../BodyTemplate";

const columns = [
  {
    id: "category",
    label: "Category",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "message",
    label: "Message",
    minWidth: 250,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "timestamp",
    label: "Time\u00a0Stamp",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(category, message, timestamp) {
  return { category, message, timestamp };
}

const rows = [
  createData("India", "IN", 1324171354),
  createData("China", "CN", 1403500365),
  createData("Italy", "IT", 60483973),
  createData("United States", "US", 327167434),
  createData("Canada", "CA", 37602103),
  createData("Australia", "AU", 25475400),
  createData("Germany", "DE", 83019200),
  createData("Ireland", "IE", 4857000),
  createData("Mexico", "MX", 126577691),
  createData("Japan", "JP", 126317000),
  createData("France", "FR", 67022000),
  createData("United Kingdom", "GB", 67545757),
  createData("Russia", "RU", 146793744),
  createData("Nigeria", "NG", 200962417),
  createData("Brazil", "BR", 210147125),
];

const Notifications = ({ classes }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const body = (
    <>
      <Paper className={classes.notifications__container}>
        <TableContainer className={classes.table__container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.timestamp}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );

  // Traditional Javascript way
  // const xhr = new XMLHttpRequest();
  // const method = "GET";
  // const url = "http://127.0.0.1:8000/application/notifications/1";
  // const responseType = "json";

  // xhr.responseType = responseType;
  // xhr.open(method, url);
  // xhr.onload = function () {
  //   console.log(xhr.response);
  // };
  // xhr.send();

  return (
    <>
      <ContentTitle classes={classes} child={"Notifications"} />
      <ContentBody classes={classes} child={body} />
    </>
  );
};

export default Notifications;
