import axios from "axios";
import { FETCH_TODO_LIST } from "../Config/urlApi";

export const getTodoList = () => {
  return axios.get(FETCH_TODO_LIST).then((response) => response.data);
};
