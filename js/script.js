// function output
function showOutPut(output) {
  document.getElementById("output").innerHTML = output;
}

// clear function
function clearOutPut() {
  document.getElementById("output").innerHTML = "";
}

// ------if else statemment use case ----
// get name of Today With If Else Statement  --------
function if_else() {
  let now = new Date();
  let Today = now.getDay();
  if (Today === "0") {
    showOutPut("its Sunday today");
  } else if (Today === 1) {
    showOutPut("its Monday Today");
  } else if (Today === 2) {
    showOutPut("its Tuesday Today");
  } else if (Today === 3) {
    showOutPut("its Wednesday Today");
  } else if (Today === 4) {
    showOutPut("its Thursday Today");
  } else if (Today === 5) {
    showOutPut("its Friday Today");
  } else if (Today === 6) {
    showOutPut("its Saturday Today");
  } else {
    showOutPut("It is Another invalid Day  !!!!");
  }
}

// switch statement function
function switch_Statement() {
  let now = new Date();
  let Today = now.getDay();
  switch (Today) {
    case 0:
      showOutPut("its Sunday today");
      break;
    case 1:
      showOutPut("its Monday today");
      break;
    case 2:
      showOutPut("its Tuesday today");
      break;
    case 3:
      showOutPut("its Wednesday today");
      break;

    case 4:
      showOutPut("its Thursday today");
      break;
    case 5:
      showOutPut("its Friday today");
      break;
    case 6:
      showOutPut("its Saturday today");
      break;
    default:
      showOutPut("invalid !!!!!");
      break;
  }
}

// keep asking Name function
function keepAskingName() {
  do {
    var Name = prompt("please Enter Your Name ... ");
    console.log(Name);
  } while (Name === null || Name === "");
  showOutPut(Name)
}
