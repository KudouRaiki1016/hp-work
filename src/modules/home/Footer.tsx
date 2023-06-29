import { Box, SxProps, Theme } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      {/* ↓一旦アイコンなしで文字としている */}
      <h2>テクノスタンダード</h2>
      <Box className="address_zone">
        <p>〒000-0000</p>
        <p>東京都渋谷区渋谷3-10-15 YKビル7F</p>
      </Box>
      <ul className="nav_zone">
        <li>ABOUT</li>
        <li>SERVICE</li>
        <li>COMPANY</li>
        <li>CONTACT</li>
      </ul>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    fontFamily: "Noto Sans JP",
    width: "100%",
    backgroundColor: "#373636",
    color: "#ffffff",
    padding: "70px 0 40px",
  },
  "h2": {
    fontSize: "30px",
    textAlign: "center",
  },
  ".address_zone p": {
    textAlign: "center",
    lineHeight: "10px",
    letterSpacing: "0.1em"
  },
  ".nav_zone": {
    display: "flex",
    justifyContent: "center",
  },
  ".nav_zone li": {
    listStyle: "none",
    paddingLeft: "0",
    margin: "30px 40px",
    text: "10px",
    letterSpacing: "0.1em",
  },
};
