import axios from "axios";
import { FETCH_RESULT_INBOX } from "../Config/urlApi";

export const getAllChat = () => {
  return axios.get(FETCH_RESULT_INBOX).then((response) => response.data);
};
