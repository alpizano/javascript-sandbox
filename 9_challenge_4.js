"use strict";

// DATA
// underscore_case
// first_name
// Some_Variable
// caculate_AGE
// delayed_departure

const txtElement = document.createElement("textarea");
txtElement.className = "form-control";

const btnElement = document.createElement("button");
btnElement.className = "btn btn-primary myButton";
btnElement.innerHTML = "CLICK ME";

//document.body.append(txtElement);
//document.body.append(btnElement);

document.querySelector(".xs-12").insertAdjacentElement("beforeend", txtElement);
document.querySelector(".xs-12").insertAdjacentElement("beforeend", btnElement);

document.querySelector(".myButton").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);

  const textArray = text.split("\n");
  console.log(textArray);

  for (const [i, word] of textArray.entries()) {
    let emoji = "✅";

    const _index = word.indexOf("_");
    const segment = word.slice(_index, _index + 2);
    const newWord = word
      .replace(segment, word[_index + 1].toUpperCase())
      .replace(
        word.slice(word[0], _index),
        word.slice(word[0], _index).toLowerCase()
      )
      .replace(word.slice(_index + 2), word.slice(_index + 2).toLowerCase());

    console.log(`${newWord.padEnd(20, " ")} ${emoji.repeat(i + 1)}`);
  }
});
