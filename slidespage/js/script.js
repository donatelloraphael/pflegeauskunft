let queObj = {
  1: {
    type: "regular",
    question: "Für wen suchen Sie eine 24 Stunden Pflege?",
    options: [
      {
        title: "Mich selbst",
        image_name: "q1_1.png",
        value: "Mich selbst",
        next: "2",
      },
      {
        title: "Angehörigen",
        image_name: "q1_1.png",
        value: "Angehörigen",
        next: "2",
      },
     
      
    ],
    next: "2",
  },
  2: {
    type: "regular",
    question: "Wie viele Personen leben im Haushalt?",
    options: [
      {
        title: "Eine Person",
        image_name: "q1_1.png",
        value: "Eine Person",
        next: "3",
      },
      {
        title: "Mehrere Personen",
        image_name: "q1_1.png",
        value: "Mehrere Personen",
        next: "3",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        value: "Noch unklar",
        next: "3",
      },
    ],
    next: "3",
  },
  3: {
    type: "form",
    question: "Um was für einen Angehörigen handelt es sich?",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        value: "",
        next: "4",
      },
    ],
    next: "4",
  },
  4: {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        value: "",
        next: "5",
      },
      
    ],
    next: "5",
  },
  5: {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        value: "Pflegegrad 1-2",
        next: "6",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        value: "Pflegegrad 3",
        next: "6",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        value: "Pflegegrad 4",
        next: "6",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        value: "Pflegegrad 5",
        next: "6",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        value: "Beantragt/Unklar",
        next: "6",
      },
    ],
    next: "6",
  },
  6: {
    type: "regular",
    question: "Wie mobil ist die pflegebedürftige Person?",
    options: [
      {
        title: "Uneingeschränkt mobil",
        image_name: "q3_1.png",
        value: "Uneingeschränkt mobil",
        next: "7",
      },
      {
        title: "Leichte Einschränkung",
        image_name: "q3_2.png",
        value: "Leichte Einschränkung",
        next: "7",
      },
      {
        title: "Rollstuhl erforderlich",
        image_name: "q3_3.png",
        value: "Rollstuhl erforderlich",
        next: "7",
      },
      {
        title: "Bettlägerig",
        image_name: "q_bett.png",
        value: "Bettlägerig",
        next: "7",
      },
    ],
    next: "7",
  },
  7: {
    type: "regular",
    question: "Ist die pflegebedürftige Person dement?",
    options: [
      {
        title: "Nein",
        image_name: "q_check.png",
        value: "Nein",
        next: "8",
      },
      {
        title: "ja",
        image_name: "q_check_klein.png",
        value: "ja",
        next: "8",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        value: "Ja, leichte Demenz",
        next: "8",
      },
     {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        value: "Unklar",
        next: "8",
      },
    ],
    next: "8",
    //finish: true,
  },
  8:  {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    options: [
      {
        title: "Nein",
        image_name: "q_check.png",
        value: "Nein",
        next: "9",
      },
      {
        title: "ja",
        image_name: "q_check_klein.png",
        value: "ja",
        next: "9",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        value: "Ja, leichte Demenz",
        next: "9",
      },
     {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        value: "Beantragt/Unklar",
        next: "9",
      },
    ],
    next: "9",
   // finish: true,
  },
  9:  {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        value: "Grundkenntnisse",
        next: "10",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        value: "Mittlere Kenntnisse",
        next: "10",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        value: "Gute Kenntnisse",
        next: "10",
      },
     {
        title: "Noch unklar",
        image_name: "q4_4.png",
        value: "Noch unklar",
        next: "10",
      },
    ],
    next: "10",
    //finish: true,
  },
  10:
   {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        value: "Gästezimmer",
        next: "11",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        value: "Wohnung",
        next: "11",
      },
      
     {
        title: "Nein",
        image_name: "q_x.png",
        value: "Nein",
        next: "11",
      },
    ],
    next: "11",
    /*finish: true,*/
  },
  11:
   {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    options: [
      {
        title: "4-6 Wohnung",
        image_name: "q5_2.png",
        value: "4-6 Wohnung",
        next: "12",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        value: "Länger als 6 Wochen",
        next: "12",
      },
      
     {
        title: "Weniger als 4 Wochen",
        image_name: "q5_2.png",
        value: "Weniger als 4 Wochen",
        next: "12",
      },
    ],
    next: "12",
    /*finish: true,*/
  },
  12:
   {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        value: "Schnellstmöglich",
        next: "13",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        value: "In 2-3 Wochen",
        next: "13",
      },
      
     {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        value: "In 1-2 Monaten",
        next: "13",
      },
       {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        value: "Später/Noch unklar",
        next: "13",
      },
      
    ],
    next: "13",
    //finish: true,
  },
    13: {
    type: "form",
    question: "In welcher Region suchen Sie die 24 Stunden Pflege?",
    inputs: [
      {
        title: "Postleitzahl oder Wohnort:",
        image_name: "map_deutschland.gif",
        value: "",
        next: "14",
      },
      
    ],
    next: "14",
  },
  14:
   {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        value: "Schnellstmöglich",
        next: "15",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        value: "In 2-3 Wochen",
        next: "15",
      },
      
     {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        value: "In 1-2 Monaten",
        next: "15",
      },
       {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        value: "Später/Noch unklar",
        next: "15",
      },
    ],
    next: "15",
    //finish: true,
  },
   15: {
    type: "wrapper",
    question: "Nur noch ein Schritt zu Ihrem Anbietervergleich",
    colms: [
      {
        r1: "Frau",
        r2: "Herr",
        title: "Wer soll die Betreuungsangebote erhalten?",
        value: "",
        next: "14",
      },
     
      
    ],
    next: "14",
  },
  /* 8: {
    type: "form",
    question: "Field set 8",
    image_name: "q1_21.png",
    inputs: [
      {
        title: "Title for the input",
        placeholder: null,
      },
    ],
    buttons: [
      {
        value: "the value",
        next: "9",
      },
    ],
    finish: true,
  }, */
};

let slideR = true;
let questionApp = document.querySelector("#questionApp");
let previousButton = document.querySelector("#previous");
let spanInfo = document.querySelector("#spanInfo");
let progressBar = document.getElementById("progress-contain");
let nextButton = document.querySelector("#next");
let previousKey;
let previousHistory = [];
// let previousNumber = [];
let qLength = Object.keys(queObj).length;


questionApp.style.width = qLength * 100 + "%";
//questionApp.style.height =  "350px";

function popFunc() {
  for (let s in queObj) {
    newElem = ``;
    let currentElement = queObj[s];
    
    if (currentElement.type) {
      newElem += `<div id="${
        Object.keys(queObj).indexOf(s) + 1
      }" class="fly-about ht-${
        Object.keys(queObj).indexOf(s) + 1
      }" style="width: ${100 / qLength}%;">
          <h2 class="text-center question-title"><!--<span id="opt_${
            Object.keys(queObj).indexOf(s) + 1
          }"></span>--> ${currentElement.question}</h2>`;

      if (currentElement.type == "regular") {
        if (currentElement.options && Array.isArray(currentElement.options)) {
          for (let cE in currentElement.options) {
            newElem += `
          <label class="section_items  overflow-hidden {
            Object.keys(queObj).indexOf(s) + 1
          }" for="que${s}-opt${cE}">
            <img src="img/${currentElement.options[cE].image_name}" class="mx-auto d-block img-fluid">
            <div class="row">
              <input type="radio" id="que${s}-opt${cE}" data-next="${currentElement.options[cE].next}" name="que${s}" value="${currentElement.options[cE].value}"  class="d-none" onClick="loadNext()">
              <div class="section_items_title col-md-12 text-center text-white font-weight-bold">${currentElement.options[cE].title}</div>
            </div>
          </label>`;
          }
        }
      } else if (currentElement.type == "form") {
        if (currentElement.inputs && Array.isArray(currentElement.inputs)) {
          newElem += `<div class="jumbotron form-panel col-10 mx-auto"><div class="form-group">`;

          for (let cE in currentElement.inputs) {
            newElem += `
            <img class="angehoeriger-icon" src="img/${currentElement.inputs[cE].image_name}">
          <label class="text-center size18" for="que${s}-opt${cE}">${
              currentElement.inputs[cE].title
            }</label>
          <input type="text" name="que${s}" id="que${s}-opt${cE}"value="${
              currentElement.inputs[cE].value || ""
            }"  class="form-control col-md-5 mx-auto">
           <div class="plz-button-wrapper plz-button-wrapper-angehoeriger">
<div class="option-selector">
<a name="12" id="q131" onclick="javascript: window.location ='#que${currentElement.inputs[cE].next}'" style="display: block;"><button name="button" type="button" class="button-design button plz-button next-button continue-button">weiter »</button></a>
</div>
<p></p></div>
            `;
          }

          for (let cE in currentElement.buttons) {
            newElem += `
          <button type="button" data-next="${currentElement.buttons[cE].next}"  class="col-md-5 mx-auto btn btn-primary btn-lg mt-3 bg-orange-active" onClick="loadNext()">${currentElement.buttons[cE].value}</button>`;
          }

          newElem += `</div></div>`;
        }
      }else if (currentElement.type == "wrapper") {
        if (currentElement.colms && Array.isArray(currentElement.colms)) {
          newElem += ``;

          for (let cE in currentElement.colms) {
            newElem += `
            
          <br>
          <div class="participant-wrapper">
<div class="participant-column-wrapper">
<div class="advantage-column">
<div class="advantage-wrapper">
<div class="advantage-box">
<div class="advantage-space">
<div class="advantage-header">
Erhalten Sie nun Ihre <span style="font-family: opensans-bold;">individuellen</span> Angebote
</div>
<div class="advantage-bullet-wrapper">
<div class="advantage-bullet">
Geprüfte Anbieter
</div>
<div class="advantage-bullet">
Legale Betreuung
</div>
<div class="advantage-bullet">
Zeit- &amp; Geldersparnis
</div>
<p></p></div>
<p></p></div>
<p></p></div>
<div class="advantage-col-left">
Unser Service:<br>
• 100% kostenlos &amp; unverbindlich<br>
• keine Auftragspflicht<br>
• Bis zu 3 passende Angebote
</div>
<div class="advantage-col-right">
<div class="coop-img-wrapper"><img class="cooperation-img" src="img/erfolgsfaktor_familie.png"></div>
<div class="coop-img-wrapper cooperation-img-van"><img class="cooperation-img" src="img/charta_pflege.png"></div>
<p></p></div>
<p></p></div>
<p></p></div>
<div class="participant-column">
<div class="participant-box">
<div class="participant-row">
<div class="participant-header"><label class="text-center size18" for="que${s}-opt${cE}">${
              currentElement.colms[cE].title
            }</label></div>
</div>
<div class="participant-row">
<div class="participant-inline"><input type="radio" name="gender" class="female" value="Frau" id="sex-female" aria-invalid="false"></div>
<div class="participant-inline"><label for="sex-female" class="">Frau</label></div>
<div class="participant-inline"><input type="radio" name="gender" value="Herr" id="sex-male" aria-invalid="false" required="" class="valid"></div>
<div class="participant-inline"><label for="sex-male" class="">Herr</label></div>
</div>
<div class="participant-row">
<div class="participant-inline participant-col-left"><input type="text" name="firstname" value="" id="first-name" placeholder="Vorname" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="given-name" autocompletetype="given-name" aria-required="true" aria-invalid="true"></div>
<div class="participant-inline participant-col-right"><input type="text" name="lastname" value="" id="last-name" placeholder="Nachname" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="family-name" autocompletetype="family-name" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-single"><input type="tel" name="phone" value="" id="phone" placeholder="Telefon" class="input" required="required" data-required="true" data-remote-validate="false" x-autocompletetype="number" autocompletetype="number" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-single"><input type="email" name="email" value="" id="email" placeholder="E-Mail" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="email" autocompletetype="email" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-button">
<input type="submit" value="Angebote erhalten »" id="form-submit-button" class="q361 submit-button button button-design">
</div>
</div>
<div class="legal-check-two">
Hiermit stimme ich  zu.

</div>


           
            `;
          }

          for (let cE in currentElement.buttons) {
            newElem += `
          <button type="button" data-next="${currentElement.buttons[cE].next}"  class="col-md-5 mx-auto btn btn-primary btn-lg mt-3 bg-orange-active" onClick="loadNext()">${currentElement.buttons[cE].value}</button>`;
          }

          newElem += `</div></div>`;
        }
      }
      newElem += `</div>`;
    }
    questionApp.innerHTML += newElem;
    newElem = ``;
  }
  document.body.style.display = ''
}

let GlobalcurrentKey = 1;

let moveOnly = false;
let queNumber = 0;

function hashChange(hash) {
  location.hash = "que" + hash;
  console.log($('.ht-'+hash).height());
  var height = $('.ht-'+hash).height();
  questionApp.style.height =  height+"px";

    /*if(hash==15){
      questionApp.style.height =  "450px";
    }else{
      questionApp.style.height =  "350px";

    }*/
}

function loadQue(currentKey = null, moreOpts = null, moveTime = 500) {
  if (slideR) {
    slideR = false;
    setTimeout(function () {
      if ((currentKey || moreOpts == "1") && currentKey in queObj) {
        // if (queObj[currentKey].finish) {
        //   questionApp.submit();
        //   return;
        // }
      }

      if (!currentKey) {
        if (moreOpts == "0") {
          currentKey = previousKey;

          console.log("yes ! Getting previous key.");
          console.log("the key", previousKey);
        }
      }

      if (!currentKey) {
        // get the first key of the object
        currentKey = Object.keys(queObj)[0];
      }

      console.log(Object.keys(queObj).indexOf(String(currentKey)));

      movePosition(currentKey);

      previousButton.style.display = currentKey <= 1 ? "none" : "";

      spanInfo.style.display = currentKey <= 1 ? "" : "none";

      nextButton.style.display = currentKey >= qLength ? "none" : "";

      if (moreOpts == "0") {
        queNumber = Math.min(Object.keys(queObj).length, queNumber - 1);
      }
      // fill in the question number
      else queNumber = Math.max(1, queNumber + 1);

      GlobalcurrentKey = currentKey;

      // add History
      if (!moveOnly && !previousHistory.includes(GlobalcurrentKey)) {
        previousHistory.push(GlobalcurrentKey);
      }

      // document.getElementById(`opt_${currentKey}`).innerText =
      previousHistory.length;
      hashChange(GlobalcurrentKey);
    }, moveTime);
    setTimeout(function () {
      slideR = true;
    }, 500);
    initiated = true;
  }
}

function loadNext() {
  let nextKey = getNextKey();

  if (queObj[String(GlobalcurrentKey)].finish) {
    return questionApp.submit();
  }

  console.log("the next key:", nextKey);
  if (!nextKey) {
    return;
  }

  hashChange(nextKey);
  // loadQue(nextKey, null, false, 500);
}

function loadPrevious() {
  previousHistory.pop();
  let nextKey;
  if (!previousHistory.length) {
    nextKey = Object.keys(queObj)[0];
  } else {
    nextKey = previousHistory[previousHistory.length - 1];
  }

  hashChange(nextKey);
}

function getNextKey() {
  let selectedInput, theNext;
  let et = event.target;
  let currElem;
  moveOnly = false;

  // if (
  //   et.classList.contains("section_items") ||
  //   (et.closest.classList && et.closest.classList.contains("section_items"))
  // ) {
  //   if (et.classList.contains("section_items")) {
  //     currElem = et;
  //   } else {
  //     currElem = et.closest;
  //   }

  //   console.log('the current element:', currElem)
  //   selectedInput = currElem.querySelector(`#${currElem.getAttribute("for")}`);
  //   selectedInput.checked = true;
  //   theNext = selectedInput.dataset.next;
  // } else {
  let curr = document.getElementById(GlobalcurrentKey);
  selectedInput = curr.querySelector("input[type=radio]:checked");
  if (selectedInput) {
    theNext = selectedInput.dataset.next;
  } else {
    selectedInput = curr.querySelector("button");

    let theSelectedNext = queObj[GlobalcurrentKey].next;
    theNext = theSelectedNext;
    moveOnly = true;
    // if (selectedInput) {

    //   theNext = selectedInput.dataset.next;
    // } else {
    //   let theSelectedNext = queObj[GlobalcurrentKey].next;
    //   theNext = theSelectedNext;
    //   moveOnly = true;
    // }
  }
  // }

  return theNext;
}

function findRow(node) {
  var i = 2;
  while ((node = node.previousSibling)) i += node.nodeType ^ 3;
  return i >> 1;
}

let initiated = false;

// instantiate the loadQue
window.onload = function () {
  popFunc();
  let theKey = location.hash
    ? location.hash.replace(/\D+/gim, "")
    : Object.keys(queObj)[0];
  loadQue(theKey, null, 0);
};

window.onhashchange = function (e) {
  e.preventDefault();
  if (initiated) loadQue(location.hash.replace(/\D+/gim, ""), null, 500);
};

function movePosition(currentKey) {
  let theCurrentKey = 1;
  let theElement, currentPosition, theCurrentElement, theLeftPosition, theRow;
  // currentKey = parseInt(currentKey);

  if (GlobalcurrentKey) {
    theCurrentKey = parseInt(GlobalcurrentKey);
  }
  theElement = document.getElementById(theCurrentKey);
  theCurrentElement = document.getElementById(currentKey);
  theLeftPosition = parseInt(questionApp.style.left) || 0;

  console.log(
    "the current elements",
    theElement,
    theCurrentElement,
    theLeftPosition
  );

  theRow = findRow(theCurrentElement);

  currentPosition = 100 - theRow * 100;

  // currentPosition = (currentPosition / 100) * 620

  console.log("the current position", currentPosition);
  // questionApp.style.left = 0;

  if (GlobalcurrentKey + 1 < currentKey) {
    questionApp.style.left = currentPosition + 100 + "%";
  } else if (GlobalcurrentKey > currentKey + 1) {
    questionApp.style.left = currentPosition - 100 + "%";
  }

  if (parseInt(currentPosition) != 0) {
    currentPosition += "%";
  }
  console.log(currentPosition + "%");
  $(questionApp).animate({ left: currentPosition });

  console.log("set the width");

  console.log(Object.keys(queObj).indexOf(currentKey) / (qLength - 1));
  progressBar.style.width =
    (Object.keys(queObj).indexOf(currentKey) / (qLength - 1)) * 100 + "%";
}

