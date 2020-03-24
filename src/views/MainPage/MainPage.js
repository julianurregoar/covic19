import React, { Fragment, useContext } from "react";
import { Container, CssBaseline, Grid, makeStyles } from "@material-ui/core";

//components
import Header from "./Sections/Header";
import MainPost from "./Sections/MainPost.js";
import General from "./Sections/General";
import CountryFilter from "./Sections/CountryFilter";

//core componets
import Footer from "../../components/Footer/Footer";

//context
import AppContext from "../../AppContext";

const mainPost = {
  title: "Corona Virus in front of you, Canada",
  description: "You can be up to date using federal government information ",
  image:
    "https://images.unsplash.com/photo-1582883040775-f98dd8c04597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  imgText: "Covid19",
  linkText: "Continue reading…",
  link:
    "https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
};

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(1)
  },
  container: {}
}));

const MainPage = props => {
  const classes = useStyles();
  const {
    mainData: {
      general: {
        stats: generalStats,
        loading: generalLoading,
        error: generalError
      },
      countries: {
        stats: countriesStats,
        loading: countriesLoading,
        error: countriesError
      },
      daily: { stats: dailyStats, loading: dailyLoading, error: dailyError },
      isoCountries: {
        stats: isoCountriesStats,
        loading: isoCountriesLoading,
        error: isoCountriesError
      }
    }
  } = useContext(AppContext);

  if (dailyLoading || generalLoading || countriesLoading || isoCountriesLoading)
    return <p>Loading...</p>;
  if (dailyError || generalError || countriesError || isoCountriesError)
    return <p>Error...</p>;
  return (
    <Fragment>
      <CssBaseline />
      <Header title='Cornova Virus 19 - Covid19' />
      <Container maxWidth='lg' className={classes.container}>
        <main>
          <MainPost post={mainPost} />
          <Grid item xs={12}>
            <General
              generalStats={generalStats}
              countriesStats={countriesStats}
              dailyStats={dailyStats}
            />
          </Grid>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item xs={12}>
              <CountryFilter
                generalStats={generalStats}
                countryStats={countriesStats}
                dailyStats={dailyStats}
                isoCountriesStats={!isoCountriesLoading && isoCountriesStats}
              />
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer title='Hello friends!' />
    </Fragment>
  );
};

export default MainPage;
