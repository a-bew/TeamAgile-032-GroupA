import React, { useContext } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../../components/Page";
import Post from "./Post";
import RecentFirstRespondents from "./RecentFirstRespondents";
import RecentEmergencyRequest from "./RecentEmergencyRequest";
import FirstRespondents from "./FirstRespondents";
import Emergency from "./Emergency";
import TotalUsers from "./TotalUsers";
import Crime from "./Crime";
import TrafficByDevice from "./TrafficByDevice";
import AppContext from "../../../context/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const context = useContext(AppContext);

  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {(context) => (
        <Page className={classes.root} title="Dashboard">
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Post stat={context.postcountState} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <TotalUsers stat={context.usercountState} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Emergency stat={context.emergencycountState} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Crime stat={context.crimecountState} />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <FirstRespondents stat={context.firstRespondercountState} />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <TrafficByDevice stat={context.trafficByDevicecountState} />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <RecentEmergencyRequest
                  stat={context.recentEmergencyRequestcountState}
                />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <RecentFirstRespondents
                  stat={context.recentFirstRespondentcountState}
                />
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </AppContext.Consumer>
  );
};

export default Dashboard;
