
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

const func1 = (Event) => {
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


}

// addEventListener("keydown", (e) => {console.log(e)});

addEventListener("keydown", func1, false);

