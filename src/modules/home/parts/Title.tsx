// タイトルを使い回しするためのファイル

import { Box, SxProps, Theme } from "@mui/material";

type Props = {
  head: string;
  title: string;
  sub_title: string;
}

export const Title = ({head, title, sub_title}:Props) => {
  return (
    <Box className="h2_zone" sx={sx}>
        <h2 className="h2 t-center"><span className="color_22A1B9">{head}</span>{title}</h2>
        <h2 className="sub_h2 t-center">{sub_title}</h2>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.h2_zone": {
      lineHeight: "50px",
    },
  ".h2": {
    margin: "0",
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "64px",
    textAlign: "center",
    letterSpacing: "0.18em",
  },
  ".sub_h2": {
    margin: "0px",
    fontSize: "16px",
    letterSpacing: "0.1em",
  },
  ".color_22A1B9" : {
    color: "#22A1B9",
  },
  ".t-center": {
    textAlign: "center",
  },
};
