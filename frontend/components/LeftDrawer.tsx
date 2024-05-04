import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/AddAlert";
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
import { ModalTypes, useModalStore, useStore } from "@/state/store";
import { usePathname } from "next/navigation";
import { OrganizationSwitcher, useAuth } from "@clerk/nextjs";
import { useApolloClient } from "@apollo/client";

export const drawerWidth = 240;

export default function ResponsiveDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
    </Box>
  );
}

export const Header = () => {
  const { query, update } = useStore();
  const client = useApolloClient();
  const { orgId } = useAuth();
  const { update: updateModal, openModal } = useModalStore();
  const onChange = (q: string) => {
    update(q);
  };

  React.useEffect(() => {
    client.resetStore();
  }, [orgId]);

  const p = usePathname();
  const isApp = p.startsWith("/app");

  const styles = isApp
    ? {
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }
    : {};

  return (
    <AppBar position="fixed" sx={styles}>
      <Toolbar className="flex justify-between container">
        {isApp && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => updateModal(openModal ? null : ModalTypes.MENU)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <div></div>
        <div className="mr-5">
          <Search value={query} onChange={onChange} />
        </div>
        <div className="">
          <SignedOut>
            <SignInButton>
              <Button variant="contained">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="m-2 flex">
              <UserButton afterSignOutUrl="/" />
              <div className="mr-2" />
              <OrganizationSwitcher />
            </div>
          </SignedIn>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export const SideBar = ({}) => {
  const { openModal, update } = useModalStore();
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={openModal === ModalTypes.MENU}
        onClose={() => update(null)}
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
    title: "New",
    route: "/new",
    icon: <MessageIcon />,
  },
];

const drawerInner = (
  <div>
    <Toolbar>
      <Link className="-ml-2" href="/">
        <Typography variant="h6">Ship</Typography>
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
