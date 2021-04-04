import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

import { useSnackbar } from "notistack";

import Header from "./Header";
// import Notfication from "./Notification";
import SideBar from "./SideBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listitem: {
    marginLeft: 8,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function LayoutComponent(props) {
  const classes = useStyles(props.theme);

  // state properties
  // [state property name, set state property method name = useState(default property value)]
  const [sideBarExpand, setSideBarExpand] = React.useState(false);

  // snack bar notification
  const { enqueueSnackbar } = useSnackbar();
  enqueueSnackbar("Hello from LayoutComponent", {
    variant: "success",
  });

  // handle expand of side bar
  const handleSideBarExpand = () => {
    setSideBarExpand(true);
  };

  // handle collapse of side bar
  const handleSideBarCollapse = () => {
    setSideBarExpand(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Top navigation bar */}
      <Header
        sideBarExpand={sideBarExpand}
        handleSideBarExpand={handleSideBarExpand}
        handleSideBarCollapse={handleSideBarCollapse}
      />

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: sideBarExpand,
          [classes.drawerClose]: !sideBarExpand,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: sideBarExpand,
            [classes.drawerClose]: !sideBarExpand,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleSideBarCollapse}>
            {props.theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <SideBar />
      </Drawer>

      {/* Main content */}
      <main className={classes.content}>
        {/* toolbar div to start the main content after header */}
        <div className={classes.toolbar} />

        {/* main content goes here */}
        <div id="main"></div>
      </main>
    </div>
  );
}
