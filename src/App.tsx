import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import BedIcon from "@mui/icons-material/Bed";
import "./App.css";

const App = () => {
  return (
    <Box sx={{ minWith: "100vw", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Header
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <IconButton>
              <AccountBalanceIcon />
            </IconButton>
            <IconButton>
              <AllInboxIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconButton>
              <AudioFileIcon />
            </IconButton>
            <IconButton>
              <BedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <BottomNavigation
        showLabels
        sx={{ position: "fixed", bottom: 0, width: "100vw", borderWidth: 1, borderColor: "gray", borderStyle: "solid" }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default App;
