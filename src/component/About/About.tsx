import React from "react";
import styles from "./About.module.css";
import Image from "../../images/undraw_dog_re_k4uk.svg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HTMLIcon from "../../images/317755_badge_html_html5_achievement_award_icon.svg";
import CssIcon from "../../images/317756_badge_css_css3_achievement_award_icon.svg";
import DjangoIcon from "../../images/django-icon.svg";
import ReactIcon from "../../images/react.svg";
import ReduxIcon from "../../images/redux.svg";
import Nabvar from "../Navbar/Navbar";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_container}>
      <div className={styles.about_blur_1}></div>
      <div className={styles.about_blur_2}></div>
      <div className={styles.about_blur_3}></div>
      <div className={styles.about_blur_4}></div>
        <img src={Image} alt="" className={styles.about_img} />
        <h1 className={styles.about_heading}>
          <span className={styles.about_line}>About</span>
        </h1>
        <h1 className={styles.about_me_text}>
          大学3年生時に受けた講義でHTMLとCSSに触り、そこでプログラミングに興味を持つ。その後、PythonのフレームワークであるDjangoと、JavacriptのライブラリであるReact.jsを独学し、WEBアプリを開発、プログラミングにやりがいを感じるようになる。最近は、特にReact関連のライブラリとコーディングを勉強している。
        </h1>
      </div>
      <h1 className={styles.about_skill}>Skill</h1>
      <div>
        <Grid container alignItems="center" justifyContent="center" columns={8} spacing={1}>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card sx={{width: 600, maxWidth: "100%"}}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={HTMLIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <Typography color="textSecondary" sx={{marginTop: "1rem"}}>HTML</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card sx={{width: 600, maxWidth: "100%"}}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={CssIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <Typography color="textSecondary" sx={{marginTop: "1rem"}}>CSS</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card sx={{ width: 600, maxWidth: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={ReactIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <Typography color="textSecondary" sx={{marginTop: "1rem"}}>React</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card sx={{ width: 600, maxWidth: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={ReduxIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <Typography color="textSecondary" sx={{marginTop: "1rem"}}>Redux</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card sx={{ width: 600, maxWidth: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={DjangoIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <Typography color="textSecondary" sx={{marginTop: "1rem"}}>
                    Django
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

export default About;
