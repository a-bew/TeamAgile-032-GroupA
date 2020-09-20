import React, { Component, useState, useReducer, useContext } from "react";
import AppContext from "./AppContext";

import * as ACTIONS from "../store/actions/actions";

import * as AuthReducer from "../store/reducers/auth_reducer";

import * as DashboardStatsReducer from "../store/reducers/dashboard_stats_reducer";

const AppProvider = (props) => {
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const handleLogin = () => {
    dispatchAuthReducer(ACTIONS.login_success());
  };

  const handleLogout = () => {
    dispatchAuthReducer(ACTIONS.login_failure());
  };

  const handleAddProfile = (profile) => {
    dispatchAuthReducer(ACTIONS.add_profile(profile));
  };

  const handleRemoveProfile = () => {
    dispatchAuthReducer(ACTIONS.remove_profile());
  };

  /*
      Dashboard Stats Reducer 
    */
  const [stateDashboardStatsReducer, dispatchReducer] = useReducer(
    DashboardStatsReducer.DashboardStatsReducer,
    DashboardStatsReducer.initialState
  );

  return (
    <AppContext.Provider
      value={{
        //Auth Reducer
        authState: stateAuthReducer.is_authenticated,
        profileState: stateAuthReducer.profile,
        handleUserLogin: () => handleLogin(),
        handleUserLogout: () => handleLogout(),
        handleUserAddProfile: (profile) => handleAddProfile(profile),
        handleUserRemoveProfile: () => handleRemoveProfile(),

        //DashboardStats Reducers
        usercountState: stateDashboardStatsReducer.users,
        postcountState: stateDashboardStatsReducer.posts,
        crimecountState: stateDashboardStatsReducer.crimes,
        emergencycountState: stateDashboardStatsReducer.emergencies,
        firstRespondercountState: stateDashboardStatsReducer.first_responders,
        recentEmergencyRequestcountState:
          stateDashboardStatsReducer.recent_emergency_request,
        recentFirstRespondentcountState:
          stateDashboardStatsReducer.recent_emergency_response,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
