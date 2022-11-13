import React, { useEffect } from "react";
import styles from "./About.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ProfileIcon from "../../images/undraw_dog_re_k4uk.svg";
import HTMLIcon from "../../images/317755_badge_html_html5_achievement_award_icon.svg";
import CSSIcon from "../../images/317756_badge_css_css3_achievement_award_icon.svg";
import DjangoIcon from "../../images/django-icon.svg";
import ReactIcon from "../../images/react.svg";
import ReduxIcon from "../../images/redux.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
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
    <div className={styles.about} id="about">
      <div className={styles.about_blur_1}></div>
      <div className={styles.about_blur_2}></div>
      <div className={styles.about_blur_3}></div>
      <div className={styles.about_container}>
        <img src={ProfileIcon} alt="" className={styles.about_img} />
        <h1 className={styles.about_heading}>About</h1>
        <h1
          className={styles.about_me_text}
        >
          大学3年生時に受けた講義でHTMLとCSSに触り、そこでプログラミングに興味を持つ。その後、PythonのフレームワークであるDjangoと、JavacriptのライブラリであるReact.jsを独学し、WEBアプリを開発、プログラミングにやりがいを感じました。最近はReact、Typescriptなど、主にフロントエンドの方を勉強しています。
        </h1>
      </div>
      <h1 className={styles.about_skill}>Skill</h1>
      <motion.div ref={ref} animate={animation}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          columns={8}
          spacing={1}
        >
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card
                sx={{
                  "&:hover": { scale: "1.1", transition: "0.5s" },
                  width: 600,
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
                  <img
                    src={HTMLIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <h1>HTML</h1>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card
                sx={{
                  "&:hover": { scale: "1.1", transition: "0.5s" },
                  width: 600,
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
                  <img
                    src={CSSIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <h1>CSS</h1>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card
                sx={{
                  "&:hover": { scale: "1.1", transition: "0.5s" },
                  width: 600,
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
                  <img
                    src={ReactIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <h1>React</h1>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card
                sx={{
                  "&:hover": { scale: "1.1", transition: "0.5s" },
                  width: 600,
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
                  <img
                    src={ReduxIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />

                  <h1>Redux</h1>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8} sm={2.7}>
            <Box display="flex" justifyContent="center" p={3}>
              <Card
                sx={{
                  "&:hover": { scale: "1.1", transition: "0.5s" },
                  width: 600,
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
                  <img
                    src={DjangoIcon}
                    alt=""
                    className={styles.about_skill_logo}
                  />
                  <h1>Django Rest Framework</h1>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default About;
