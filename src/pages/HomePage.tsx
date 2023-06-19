// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
// import { Header } from "../modules/sample/Header";
// import { Mainvisual } from "../modules/sample/Mainvisual";
// import { MainContent } from "../modules/sample/MainContent";
// import { Footer } from "../modules/sample/Footer";
import { About } from "../modules/home/About";
import { Company } from "../modules/home/Company";
import { Footer } from "../modules/home/Footer";
import { Header } from "../modules/home/Header";
import { Mainvisual } from "../modules/home/Mainvisual";
import { Service } from "../modules/home/Service";

// サンプルページのメインの実装
export const HomePage = () => {
  return (
    <Box className="HomePage" sx={sx}>
      <Header />
      <Mainvisual />
      <About />
      <Service />
      <Company />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.HomePage": {
    width: "100%",    
  }
};
