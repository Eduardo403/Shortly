import { buttonCopy } from "./copi_text.js";

export function getApi() {
  const d = document;
  const $root = d.getElementById("root-url");
  const $from = d.getElementById("from-url");
  const $loadin = d.querySelector(".loadin");
  const $submit = d.getElementById("submit");

  $from.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      let templateUrl = "";
      let url = e.target.url.value;
      let apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
      $loadin.style.display = "block";
      let res = await fetch(apiUrl);
      let json = await res.json();

      console.log(json);

      if (res.ok) {
        templateUrl = `
        
          <div class="conteiner-url">
            <a href="${json.result.original_link}">${json.result.original_link}</a>
            <hr />
            <a id="copy" href="${json.result.short_link}">${json.result.short_link}</a>
            <button id="copy-button">Copy</button>
          </div>
        
          `;

        $root.innerHTML += templateUrl;
        buttonCopy();
      }

      $loadin.style.display = "none";
    } catch (err) {
      let messger = err.statusText || "Ocurio un Error";
      $root.innerHTML = +`<p>Error:${messger}</p>`;
      console.log(err);
      $loadin.style.display = "none";
    }
  });
}
