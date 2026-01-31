import React from "react";
import "./App.css";
import { Row, Col, Card } from "antd";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

/* ---------------- Fade Menu Component ---------------- */
function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

/* ---------------- Main App ---------------- */
function App() {
  return (
    <div>
      <Row>
        {/* Sidebar */}
        <Col style={{ width: "20%" }}>
          <Card
            style={{
              position: "fixed",
              width: "20%",
              height: "100vh",
            }}
          >
            Sidenavbar
          </Card>
        </Col>

        {/* Main Content */}
        <Col style={{ width: "80%", marginLeft: "20%" }}>
          {/* Top Bar */}
          <Row style={{ marginBottom: "2%" }}>
            <Card
              style={{
                width: "100%",
                position: "sticky",
                top: 0,
                zIndex: 10,
              }}
            >
              <FadeMenu />
            </Card>
          </Row>

          {/* Dashboard Content */}
          <Row>
            <Col style={{ width: "59%", marginRight: "2%" }}>
              <Row style={{ marginBottom: "3%", marginLeft: "2%" }}>
                <Col style={{ width: "49%", marginRight: "2%" }}>
                  <Card>Customers</Card>
                </Col>
                <Col style={{ width: "49%" }}>
                  <Card>Orders</Card>
                </Col>
              </Row>

              <Row>
                <Card
                  style={{
                    width: "100%",
                    marginLeft: "2%",
                    marginBottom: "3%",
                  }}
                >
                  Monthly Sales
                </Card>
              </Row>
            </Col>

            <Col style={{ width: "39%" }}>
              <Card style={{ marginRight: "2%" }}>Monthly Target</Card>
            </Col>
          </Row>

          <Row style={{ marginLeft: "1%", marginBottom: "2%" }}>
            <Card style={{ width: "100%" }}>Statistics</Card>
          </Row>

          <Row>
            <Col style={{ width: "49%", marginRight: "2%" }}>
              <Card style={{ marginLeft: "2%" }}>Customer Demographic</Card>
            </Col>
            <Col style={{ width: "49%" }}>
              <Card>Recent Orders</Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
