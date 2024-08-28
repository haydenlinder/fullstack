import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import NewIcon from "@mui/icons-material/AddBox";
import OutboundIcon from "@mui/icons-material/Outbound";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@mui/material";
import Search from "./Search";
import Link from "next/link";
import { ModalTypes, useModalStore, useStore } from "@/state/store";
import { usePathname, useRouter } from "next/navigation";
import { OrganizationSwitcher, useAuth } from "@clerk/nextjs";
import { useApolloClient } from "@apollo/client";
import { Status_Types_Enum } from "@/src/gql/graphql";

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
        <DrawerInner />
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
        <DrawerInner />
      </Drawer>
    </Box>
  );
};

const listMap = [
  {
    title: "Jobs",
    route: "posts",
    icon: <WorkOutlineIcon />,
  },
  {
    title: "Applications",
    route: "applications",
    icon: <OutboundIcon />,
  },
  {
    title: "Your Jobs",
    route: "created",
    icon: <NewIcon />,
  },
];

const DrawerInner = () => {
  const router = useRouter();
  const path = usePathname();

  const onClick = (route: string) => {
    router.push(`/app/${route}`);
  };

  return (
    <div>
      <Toolbar>
        <Link className="-ml-2" href="/app/posts">
          <Typography variant="h6">Jobs</Typography>
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {listMap.map(({ title, icon, route }) => (
          <button
            className={
              path === `/app/${route}` ? "bg-gray-500 w-full" : "w-full"
            }
            onClick={() => onClick(route)}
            key={title}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </button>
        ))}
      </List>
    </div>
  );
};
