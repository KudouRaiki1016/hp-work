import { Box, SxProps, Theme } from "@mui/material";
import about_img from "../../resources/images/about_illustration.png"

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Box className="h2_zone">
        <h2 className="h2 t-center"><span className="color_22A1B9">A</span>BOUT</h2>
        <h2 className="sub_h2 t-center">私たちについて</h2>
      </Box>
      <Box className="about_img_zone">
        <img src={about_img} alt="画像" />
      </Box>
      <Box className="about_text t-center">
        <Box className="about_text_mass">
          <p>副業人材を主体とした<span className="color_22A1B9 f-bold">「業務委託サービス」</span>です。 </p>
          <p>通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担うフリーランスエンジニアが<span className="color_22A1B9 f-bold">現在約100名</span>ほど所属しています。</p>
        </Box>
        <Box className="about_text_mass">
          <p>副業を主体としているため長時間の拘束稼働はできませんが、トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。</p>
          <p>クライアント側のチームメンバーと共同して開発を行うこともできるため、<span className="color_22A1B9 f-bold">クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。</p>
        </Box>
      </Box>

    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    padding: "66px 0 0 0",
    backgroundColor: "rgba(34, 161, 185, 0.1)",
  },
  ".color_22A1B9" : {
    color: "#22A1B9",
  },
  ".t-center": {
    textAlign: "center",
  },
  ".f-bold": {
    fontWeight: "bold",
  },
  ".h2_zone": {
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
  ".about_img_zone img": {
    width: "100%",
  },
  ".about_text": {
    padding: "0 23% 80px",
  },
  ".about_text_mass": {
    margin: "35px 0",
  },
  ".about_text_mass p": {
    margin: "6px 0",
  },
};
