import React from "react";
import { Container, CssBaseline, Grid, makeStyles } from "@material-ui/core";
import Header from "./Sections/Header";
import MainPost from "./Sections/MainPost.js";
import General from "./Sections/General";

const mainPost = {
  title: "Corona Virus in front of you",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image:
    "https://images.unsplash.com/photo-1582883040775-f98dd8c04597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  imgText: "Covid19",
  linkText: "Continue reading…"
};

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(1)
  },
  container: {
    paddingLeft: "30px" + "important!"
  }
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg' className={classes.container}>
        <Header title='Cornova Virus 19 - Covid19' />
        <main>
          <MainPost post={mainPost} />

          <Grid container spacing={5} className={classes.mainGrid}>
            <General />
            {/* <iframe
              width='1080'
              height='720'
              frameborder='0'
              scrolling='no'
              allowfullscreen
              src='https://arcg.is/ynCLG'
            ></iframe> */}
            {/* <Main title='From the firehose' posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      /> */}
    </React.Fragment>
  );
};

export default MainPage;
