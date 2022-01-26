
// const shaMessage = document.getElementById("testPara");
// document.setAttribute("tabindex", 0);

// testPara.addEventListener("click", () => {console.log("you clicked the test"); document.body.style.background = "blue";})

//  const func1 = (shaStr) => {
//      console.log(shaStr);
//       alert("keydown");
//      if (Event.keyCode == 86)
//      {
//          document.body.style.background = "violet";
//      }
      
//      shaMessage.textcontent = shaStr;
// }


// let shaKeyPropElement = document.getElementById("shaKeyProp")
// let shaCodePropElement = document.getElementById("shaCodeProp")
// let shaWhichPropElement = document.getElementById("shaWhichProp")

const updateValues = (Event) => {
    console.log(Event);
    console.log("keydown");

    //  if (Event.keyCode == 86)
    //  {
    //      document.body.style.background = "blue";
    //  }

    shaKeyProp.innerHTML = Event.key;
    shaCodeProp.innerHTML = Event.code;

    shaWhichProp1.innerHTML = Event.which;
    shaWhichProp2.innerHTML = Event.which;

    document.getElementById("pressPrompt").className = "hide";
    document.getElementById("keyCoder").className = "topContainer";

}

// addEventListener("keydown", (e) => {console.log(e)});

addEventListener("keydown", updateValues, false);

