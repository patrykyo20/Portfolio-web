import { getElement } from "../extensions/getElements.js";

export function Form() {
  const form = getElement(".form");

  form.onSubmit((e) => handleSubmitForm(e));

  function handleSubmitForm(e) {
    e.preventDefault();

    console.log(e.target[3].value);

    if (!e.target[3].checked) {
      e.target[3].setAttribute(
        "data-after",
        "Please confirm that you're not robot"
      );
    } else {
      e.target[3].setAttribute(
        "data-after",
        ""
      );
    }
  }
}
