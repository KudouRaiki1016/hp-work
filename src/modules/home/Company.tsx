import { Box, SxProps, Theme } from "@mui/material";

export const Company = () => {
  return (
    <Box className="Company" sx={sx}>
      <Box className="h2_zone">
          <h2 className="h2 t-center"><span className="f-bold">C</span><span className="h2_head">OMPANY</span></h2>
          <h2 className="sub_h2 t-center">会社概要</h2>
      </Box>
      <table className="table01" id="table01">
        <dl className="table_dl border_buttom">
          <th className="table_th">会社名</th>
          <td className="table_td">株式会社テクノスタンダード</td>
        </dl>
        <dl className="table_dl border_buttom">
          <th className="table_th">設立日</th>
          <td className="table_td">2022年6月</td>
        </dl>
        <dl className="table_dl border_buttom">
          <th className="table_th">所在地</th>
          <td className="table_td">東京都渋谷区渋谷3-10-15 YKビル7F</td>
        </dl>
        <dl className="table_dl border_buttom">
          <th className="table_th">資本金</th>
          <td className="table_td">100万円</td>
        </dl>
        <dl className="table_dl border_buttom">
          <th className="table_th">代表取締役</th>
          <td className="table_td">加藤拓也</td>
        </dl>
        <dl className="table_dl">
          <th className="table_th">取引銀行<br/>取引先</th>
          <td className="table_td">三菱UFJ銀行<br/>SBIネット銀行<br/>株式会社バンタン<br/>株式会社ジョブクラウン<br/>株式会社メルメクス<br/>マナルカ合同会社</td>
        </dl>
      </table>
  </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Company" : {
    width: "100%",
    backgroundColor: "#22A1B9",
    color: "#ffffff",
    padding: "80px 0 60px",
  },
  ".h2_zone": {
    lineHeight: "50px",
    marginBottom: "50px",
  },
  ".h2": {
    margin: "0",
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "64px",
    letterSpacing: "0.18em",
    opacity: "100%",
  },
  ".h2_head": {
    opacity: "60%",
  },
  ".sub_h2": {
    margin: "0px",
    fontSize: "16px",
    letterSpacing: "0.1em",
  },
  ".t-center": {
    textAlign: "center",
  },
  ".f-bold": {
    fontWeight: "bold",
  },

  "#table01": {
    margin: "0 auto",
    width: "70%",
  },
  "#table01 .border_buttom": {
    borderBottom: "1px solid #ffffff",
  },
  "#table01 .table_dl": {
    display: "flex",
    justifyContent: "flex-start",
    padding: "20px 0",
    margin: "0",
  },
  ".table_th": {
    display: "block",
    fontSize: "20px",
    marginLeft: "20px",
    width: "110px",
    textAlign: "start",
  },
  "#table01 .table_td": {
    display: "block",
    margin: "0 auto 0 100px",
    fontSize: "20px",
  },
};