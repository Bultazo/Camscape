import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Logo from './partials/Logo';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import PublicIcon from '@material-ui/icons/Public';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import HomeIcon from '@material-ui/icons/Home';

import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from "react-router-dom"
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
const drawerWidth = 220;


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
    },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#434349"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));



const weshStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {




  const classeur = weshStyles();

  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const styly = { button: { margin: 15,}, appBarBackground:{ background : 'black' }};


  const [ouvert, setouvert] = React.useState(true);

  const handleClick = () => {
    setouvert(!ouvert);
  };

  return (
    <div className={classes.root}>
       <HideOnScroll {...props}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        style={styly.appBarBackground}

      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <IconButton>
            <Logo/>
            </IconButton>
          <Typography variant="h6" noWrap>
            CamsCape
          </Typography>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Drawer
        className={{paper: classes.drawer}}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader} >
          <IconButton onClick={handleDrawerClose} style={{color:"white"}} >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List style = {{color:"white"}} subheader={
        <ListSubheader component="div" id="nested-list-subheader" style = {{color:"white"}}>
          Navigation
        </ListSubheader>
      }>
        <ListItem button >
         
          <ListItemIcon style = {{color:"white"}}>
            <HomeIcon />
          </ListItemIcon>
          <Link to="/">Home</Link>
                  </ListItem>
        <ListItem button>
          <ListItemIcon style = {{color:"white"}}>
            <FormatAlignLeftIcon />
          </ListItemIcon>
          <Link to="/Film">FilmMaking</Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon style = {{color:"white"}}>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Web" />
        </ListItem>
        </List>
        <Divider />
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style = {{color:"white"}}>
          Nested List Items
        </ListSubheader>
      }
      className={classeur.root}
    >
      <ListItem button style = {{color:"white"}}>
        <ListItemIcon style = {{color:"white"}}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button style = {{color:"white"}}>
        <ListItemIcon style = {{color:"white"}}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick} style = {{color:"white"}}>
        <ListItemIcon style = {{color:"white"}}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {ouvert ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={ouvert} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classeur.nested} style = {{color:"white"}}>
            <ListItemIcon style = {{color:"white"}}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
      </Drawer>
    </div>
  );
}

