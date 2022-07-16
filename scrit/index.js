import { getApi } from "./get_api.js";
import menuHamburgesa from "./menu-hamburgesa.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menuHamburgesa();
  getApi();
});
