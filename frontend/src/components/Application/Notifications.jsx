import React, { useEffect, useState } from "react";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import ContentTitle from "../Components/ContentTitle";
import ContentBody from "../Components/ContentBody";

const Notifications = ({ classes }) => {
  // get and save notifications from backend
  const [notifications, setNotifications] = useState([]);
  // perform side effects (fetching data) with useEffect hook
  useEffect(() => {
    // get notifications from backend and save the state
    const notificationItems = [
      { category: "INFO", message: "notification 1", timestamp: "872987287" },
    ];
    // set the retrieved data to the state
    setNotifications(notificationItems);
  }, []);

  // set the columns of the table to be displayed
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

  // set the pagination details to display notifications
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // handle the change of page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // handle the change of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // set the main content body
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
              {notifications
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((notification, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = notification[column.id];
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
          count={notifications.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );

  // return the main title + body
  return (
    <>
      <ContentTitle classes={classes} child={"Notifications"} />
      <ContentBody classes={classes} child={body} />
    </>
  );
};

export default Notifications;
