import { Box, SxProps, Theme } from "@mui/material";
import { Title } from "./parts/Title";
import service_guild_img from "../../resources/images/service_guild.png";
import service_element_img from "../../resources/images/service_element.png";
import service_education_img from "../../resources/images/service_education.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Service = () => {
  return (
    <Box className="Service" sx={sx}>
      <Title head="S" title="ERVICE" sub_title="事業内容"></Title>
      <Box className="introductions_area">
        <Box className="introduction_area d-flex">
          <Box className="service_guild_img_zone">
            <img src={service_guild_img} alt="画像" />
          </Box>
          <Box className="letter_area">
            <h3 className="furigana_h3">プログラマーズギルド</h3>
            <h3 className="h3 color_22A1B9">Programmers Guild</h3>
            <h3 className="sub_h3">チーム開発の請負サービス</h3>
            <p className="text_area">
            副業人材を主体とした「業務委託サービス」です。
            通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担うフリーランスエンジニアが現在約100名ほど所属しています。
            副業を主体としているため長時間の拘束稼働はできませんが、トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。
            クライアント側のチームメンバーと共同して開発を行うこともできるため、クライアント所属のエンジニアのスキルアップを行うことも可能です。
            </p>
            <Box className="more_button_area d-flex">
              <a href="" className="more_button color_22A1B9 f-bold">MORE</a>
              <button className="more_arrow_button color_22A1B9 f-bold"><ArrowForwardIcon/></button>
            </Box>
          </Box>
        </Box>
        <Box className="second_area introduction_area d-flex row-reverse">
          <Box className="service_guild_img_zone">
            <img src={service_element_img} alt="画像" />
          </Box>
          <Box className="letter_area">
            <h3 className="furigana_h3">テクノエレメント</h3>
            <h3 className="h3 color_22A1B9">Techno Element</h3>
            <h3 className="sub_h3">フレキシブルなSES事業</h3>
            <p className="text_area">
            お客さまのプロジェクトで人手が足りない場合に、「スポットで力を入れるため1ヶ月フルで稼働できるエンジニアが２、３人欲しい」、「特定のスキルを持った人材が1人が欲しい」といった、要望にも対応することができる SES 事業も手がけています。
            弊社は多くの人材をプールしているため、お客様の事業フェーズにあったご要望にフレキシブルにご提供できます。
            事業分野も Web やクライアントアプリの開発からインフラまで、業界・ジャンルに問わずさまざまな人材をご用意しております。
            また、現役の Web/IT エンジニアも多数所属しているため、開発から得た知見や技術も提供することができます。結果として保守性が高く、事業の規模や今後のスケールに合わせて拡張しやすい、高品質な開発のサポートを行うことも可能です。
            </p>
            <Box className="more_button_area d-flex">
              <a href="" className="more_button color_22A1B9 f-bold">MORE</a>
              <button className="more_arrow_button color_22A1B9 f-bold"><ArrowForwardIcon/></button>
            </Box>
          </Box>
        </Box>
        <Box className="introduction_area d-flex">
          <Box className="service_guild_img_zone">
            <img src={service_education_img} alt="画像" />
          </Box>
          <Box className="letter_area">
            <h3 className="furigana_h3">エンジニア教育</h3>
            <h3 className="h3 color_22A1B9">Top engineer <br/> Experience Program</h3>
            <h3 className="sub_h3">トップエンジニアとの開発を体験する</h3>
            <p className="text_area">
            副業人材を主体とした「業務委託サービス」です。
            通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担うフリーランスエンジニアが現在約100名ほど所属しています。
            副業を主体としているため長時間の拘束稼働はできませんが、トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。
            クライアント側のチームメンバーと共同して開発を行うこともできるため、クライアント所属のエンジニアのスキルアップを行うことも可能です。
            </p>
            <Box className="more_button_area d-flex">
              <a href="" className="more_button color_22A1B9 f-bold">MORE</a>
              <button className="more_arrow_button color_22A1B9 f-bold"><ArrowForwardIcon/></button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Service" : {
    width: "100%",
    padding: "66px 0 0 0",
  },
  /* 文字色をつける */
  ".color_22A1B9": {
    color: "#22A1B9"
  },
  /* 要素を横並びにする */
  ".d-flex": {
    "display": "flex"
  },
  /* 横並びの要素を逆順にする */
  ".row-reverse": {
    "flexDirection": "row-reverse"
  },
  /* 横並びの要素を両端寄せにする */
  ".space-between": {
  justifyContent: "space-between"
  },
  /* 文字を中央にする */
  ".t-center": {
    textAlign: "center"
  },
  /* 太文字にする */
  ".f-bold": {
    fontWeight: "bold"
  },
  ".introductions_area .introduction_area": {
    margin: "60px 0",
  },
  ".first-area": {
    margin: "40px",
  },
  // 画像を画面サイズに合わせて50%にしたい

  ".letter_area": {
    padding: "0 6% 0 4%",
  },
  ".second_area .letter_area": {
    padding: "0 4% 0 6%",
  },
  ".furigana_h3": {
    margin: "0",
    fontSize: "16px",
  },
  ".h3": {
    margin: "10px 0",
    fontSize: "48px",
    letterSpacing: "0.05em",
  },
  ".sub_h3": {
    margin: "0",
    fontSize: "24px",
  },
  ".text_area": {
    margin: "30px 10px 30px 0",
    lineHeight: "30px",
  },
  ".second_area .text_area": {
    margin: "30px 0 30px 0px",
  },
  ".more_button_area": {
    justifyContent: "start",
    alignItems: "center",
  },
  ".more_button": {
    margin: "auto 30px auto 0",
    textDecoration: "none",
    letterSpacing: "0.1em",
    verticalAlign: "middle",
  },
  ".more_arrow_button": {
    width: "50px",
    height: "50px",
    // margin: "auto 0",
    borderRadius: "100%",
    border: "2px solid #22A1B9",
    backgroundColor: "#ffffff"
  },
};