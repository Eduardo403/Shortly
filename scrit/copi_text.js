export function buttonCopy() {
  const d = document;

  const $buttonCopy = d.getElementById("copy-button");

  $buttonCopy.addEventListener("click", (e) => {
    e.preventDefault();
    alert("pin");
    let $shorUrl = d.getElementById("copy").textContent;
  });
}
