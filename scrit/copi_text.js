export function buttonCopy() {
  const d = document;

  const $buttonCopy = d.getElementById("copy-button");

  $buttonCopy.addEventListener("click", (e) => {
    e.preventDefault();
    // alert("prueba");
    let $shorUrl = d.getElementById("copy").textContent;
    navigator.clipboard.writeText($shorUrl).then(
      (success) => {
        $buttonCopy.textContent = `Copied!`;
        $buttonCopy.style.backgroundColor = "var(--Dark-Violet)";
      },
      (err) => console.log("error copying text")
    );

    console.log($shorUrl);
  });
}
