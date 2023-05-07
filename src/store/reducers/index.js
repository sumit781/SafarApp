import { combineReducers } from "redux";
import searchFlightReducer from "./searchFlights";
import { enquiryReducer } from "./enquiry";

export default combineReducers({
    searchFlight:searchFlightReducer,
    enquiry:enquiryReducer
})