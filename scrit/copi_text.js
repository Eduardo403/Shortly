/**funcion para boton de copiar url-short **/
export function buttonCopy() {
  const d = document;
  const $buttonCopy = d.getElementById("copy-button");

  $buttonCopy.addEventListener("click", (e) => {
    let $shorUrl = d.getElementById("copy-short-url").textContent;
    navigator.clipboard.writeText($shorUrl).then(
      (success) => {
        $buttonCopy.textContent = `Copied!`;
        $buttonCopy.style.backgroundColor = "var(--Dark-Violet)";
      },
      (err) => console.log(`error copying text:${err}`)
    );
  });
}
