import React from "react";
import styles from "./Works.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MapAppImage from "../../images/map-app.svg";
import QuoteAppImage from "../../images/quote-post-app.svg";
import PortfolioImage from "../../images/portfolio.svg";

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={styles.works_blur_1}></div>
      <div className={styles.works_blur_2}></div>
      <div className={styles.works_blur_3}></div>
      <div className={styles.works_blur_4}></div>
      <h1 className={styles.works_heading}>
        <span className={styles.works_line}>Works</span>
      </h1>
      <div>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sx={{marginBottom: "2rem"}}>
            <Box display="flex" justifyContent="center" p={0.5}>
              <Card sx={{ width: 730, maxWidth: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px 0",
                  }}
                >
                  <CardMedia
                    title=""
                    image={MapAppImage}
                    component="img"
                    sx={{ margin: 2, objectFit: "fill" }}
                  />
                  <Typography color="textSecondary" sx={{ marginTop: "1rem" }}>
                    名所紹介アプリ
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" p={0.5}>
              <Card sx={{ width: 730, maxWidth: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    title=""
                    image={QuoteAppImage}
                    component="img"
                    sx={{
                      margin: 2,
                      objectFit: "fill",
                      "@media screen and (max-width:900px)": { height: 200 },
                    }}
                  />
                  <Typography color="textSecondary" sx={{ marginTop: "1rem" }}>
                    名言投稿アプリ（開発中）
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" p={0.5}>
              <Card sx={{ width: 730, maxWidth: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    title=""
                    image={PortfolioImage}
                    component="img"
                    sx={{ margin: 2, objectFit: "fill" }}
                  />
                  <Typography color="textSecondary" sx={{ marginTop: "1rem" }}>
                    ポートフォリオサイト
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Works;
