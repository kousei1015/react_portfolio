import React, { useEffect } from "react";
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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({rootMargin: "-100px", triggerOnce: false});
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      console.log("True")
      animation.start({
        y:0,
        opacity: 1,
        transition: {
          duration: 1
        }
      })
    }
    if(!inView){
      animation.start({y: "10%", opacity: 0})
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.about}>
      <motion.div className={styles.about_container} animate={animation}>
        <div className={styles.about_blur_1}></div>
        <div className={styles.about_blur_2}></div>
        <div className={styles.about_blur_3}></div>
        <div className={styles.about_blur_4}></div>
        <img src={Image} alt="" className={styles.about_img} />
        <h1 className={styles.about_heading}>About</h1>
        <motion.h1
          className={styles.about_me_text}
          animate={animation}
          transition={{ duration: "1", delay: 0.2 }}
        >
          大学3年生時に受けた講義でHTMLとCSSに触り、そこでプログラミングに興味を持つ。その後、PythonのフレームワークであるDjangoと、JavacriptのライブラリであるReact.jsを独学し、WEBアプリを開発、プログラミングにやりがいを感じるようになる。最近は、特にReact関連のライブラリとコーディングを勉強している。
        </motion.h1>
      </motion.div>
      <h1 className={styles.about_skill}>Skill</h1>
      <div>
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
                    src={CssIcon}
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
      </div>
    </div>
  );
};

export default About;
