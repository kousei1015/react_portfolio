import React, { useEffect } from "react";
import styles from "./Works.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import MapAppImage from "../../images/map-app.svg";
import QuoteAppImage from "../../images/quote-post-app.svg";
import PortfolioImage from "../../images/portfolio.svg";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const Works = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "10%", opacity: 0 });
    }
  }, [inView]);
  return (
    <div ref={ref} className={styles.works} id="works">
      <div className={styles.works_blur_1}></div>
      <div className={styles.works_blur_2}></div>
      <div className={styles.works_blur_3}></div>
      <div className={styles.works_blur_4}></div>
      <h1 className={styles.works_heading}>Works</h1>
      <motion.div animate={animation}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
            <Box display="flex" justifyContent="center" p={0.5}>
              <Card
                sx={{
                  "&:hover": { scale: "1.05", transition: "0.5s" },
                  width: 730,
                  maxWidth: "100%",
                  transiton: "0.5s",
                }}
              >
                <a href="https://mapcollection.tk">
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
                    <h2>名所紹介アプリ</h2>
                  </CardContent>
                </a>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
            <Box display="flex" justifyContent="center" p={0.5}>
              <Card
                sx={{
                  "&:hover": { scale: "1.05", transition: "0.5s" },
                  width: 730,
                  maxWidth: "100%",
                  transition: "0.5s",
                }}
              >
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
                    sx={{ margin: 2 }}
                  />
                  <h2>ポートフォリオサイト</h2>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
            <Box display="flex" justifyContent="center" p={0.5}>
              <Card
                sx={{
                  "&:hover": { scale: "1.05", transition: "0.5s" },
                  width: 730,
                  maxWidth: "100%",
                  transition: "0.5s",
                }}
              >
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
                  <h2>名言投稿アプリ（開発中）</h2>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Works;
