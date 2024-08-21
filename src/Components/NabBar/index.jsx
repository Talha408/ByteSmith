import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import logo from "../../Pages/Assets/logo.png";
import "./nav.css";
import { pages } from "../../Seed";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="ByteSmith" className="logo" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon className="menuIcon" />
            </IconButton>
            <Menu
              className="menu"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages[0].map((pageName, index) => (
                <Link
                  to={pages[1][index]}
                  key={index} // Using index as a key is not ideal, but works in this simple case
                  onClick={handleCloseNavMenu}
                  className="nav-link secondaryColor link m-10"
                >
                  <Typography textAlign="center">{pageName}</Typography>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages[0].map((pageName, index) => (
              <Link
                to={pages[1][index]}
                key={index}
                onClick={handleCloseNavMenu}
                className="link secondaryColor nav-link"
              >
                {pageName}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
