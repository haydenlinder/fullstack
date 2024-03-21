import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/MessageRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@mui/material";
import Search from "./Search";
import Link from "next/link";
import { useQueryStore } from "@/state/store";
import { useApolloClient } from "@apollo/client";
import { SEARCH_POSTS } from "@/gql/posts";

export const drawerWidth = 240;

export default function ResponsiveDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar />
    </Box>
  );
}

const Header = () => {
  const { handleDrawerToggle } = useDrawer();
  const { query, update } = useQueryStore();
  const client = useApolloClient();

  const onChange = (q: string) => {
    update(q);
    client.refetchQueries({
      include: [SEARCH_POSTS],
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar className="flex justify-between">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <div></div>
        <div className="mr-5">
          <Search value={query} onChange={onChange} />
        </div>
        <div className="w-24">
          <SignedOut>
            <SignInButton>
              <Button variant="contained">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const SideBar = () => {
  const { mobileOpen, handleDrawerClose, handleDrawerTransitionEnd } =
    useDrawer();

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerInner}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawerInner}
      </Drawer>
    </Box>
  );
};

const listMap = [
  {
    title: "Home",
    route: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Messages",
    route: "/messages",
    icon: <MessageIcon />,
  },
];

const drawerInner = (
  <div>
    <Toolbar>
      <Link className="-ml-2" href="/">
        <Typography variant="h6">Band App</Typography>
      </Link>
    </Toolbar>
    <Divider />
    <List>
      {listMap.map(({ title, icon, route }) => (
        <Link href={route} key={title}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
);

const useDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return {
    window,
    mobileOpen,
    setMobileOpen,
    setIsClosing,
    handleDrawerClose,
    handleDrawerToggle,
    handleDrawerTransitionEnd,
  };
};
