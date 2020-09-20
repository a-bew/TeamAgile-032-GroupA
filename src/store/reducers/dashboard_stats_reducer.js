import * as ACTION_TYPES from "../actions/action_types";
import { v4 as uuid } from "uuid";
import moment from "moment";

export const initialState = {
  posts: 100,
  users: { count: 20, percent: "16%" },
  emergencies: 100,
  crimes: 70,
  first_responders: 10,
  traffic_by_devices: 10,
  recent_emergency_request: [
    {
      id: uuid(),
      name: "Port-Harcourt, Nigeria",
      imageUrl: "/static/images/products/product_1.png",
      updatedAt: moment().subtract(2, "hours"),
    },
    {
      id: uuid(),
      name: "Algeria",
      imageUrl: "/static/images/products/product_2.png",
      updatedAt: moment().subtract(2, "hours"),
    },
    {
      id: uuid(),
      name: "South-Africa",
      imageUrl: "/static/images/products/product_3.png",
      updatedAt: moment().subtract(3, "hours"),
    },
    {
      id: uuid(),
      name: "Ghana",
      imageUrl: "/static/images/products/product_4.png",
      updatedAt: moment().subtract(5, "hours"),
    },
    {
      id: uuid(),
      name: "Cairo, Egypt",
      imageUrl: "/static/images/products/product_5.png",
      updatedAt: moment().subtract(9, "hours"),
    },
  ],
  recent_emergency_response: [
    {
      id: uuid(),
      ref: "CDD1049",
      amount: 30.5,
      customer: {
        name: "Ekaterina Tankova",
      },
      createdAt: 1555016400000,
      status: "pending",
    },
    {
      id: uuid(),
      ref: "CDD1048",
      amount: 25.1,
      customer: {
        name: "Cao Yu",
      },
      createdAt: 1555016400000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1047",
      amount: 10.99,
      customer: {
        name: "Alexa Richardson",
      },
      createdAt: 1554930000000,
      status: "refunded",
    },
    {
      id: uuid(),
      ref: "CDD1046",
      amount: 96.43,
      customer: {
        name: "Anje Keizer",
      },
      createdAt: 1554757200000,
      status: "pending",
    },
    {
      id: uuid(),
      ref: "CDD1045",
      amount: 32.54,
      customer: {
        name: "Clarke Gillebert",
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
  ],
};

export const DashboardStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
