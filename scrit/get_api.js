import { buttonCopy } from "./copi_text.js";
/* funcion para acortart url opteniendo de api extena */
export function getApi() {
  /*constantes uso externo de el Dom */
  const d = document,
    $root = d.getElementById("root-url"),
    $from = d.getElementById("from-url"),
    $loadin = d.querySelector(".loadin");

  $from.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      /*valiavles para peticion fetch */
      let templateUrl = "";
      let url = e.target.url.value;
      let apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
      $loadin.style.display = "block";
      let res = await fetch(apiUrl);
      let json = await res.json();

      /*insercion en el dom y ejecucion de el boton de copiar */
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      } else {
        templateUrl = `
        
          <div class="conteiner-url">
            <a href="${json.result.original_link}">${json.result.original_link}</a>
            <hr />
            <a id="copy-short-url" href="${json.result.short_link}">${json.result.short_link}</a>
            <button id="copy-button">Copy</button>
          </div>
        
          `;
        $root.innerHTML += templateUrl;
        buttonCopy();
      }

      $loadin.style.display = "none";
    } catch (err) {
      /*programacion en caso de Error  */
      let messger = err.statusText || " Error al obtener los datos";
      $root.innerHTML += `<p class="error">Error:${err.status}:${messger}</p>`;
      console.log(err);
      $loadin.style.display = "none";
    }
  });
}
