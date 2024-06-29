let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addDiv);
let clnBtn = document.getElementById("cln");
clnBtn.addEventListener("click", cleanDiv);

function cleanDiv() {
    let destDiv = document.getElementById("whiteBox");
    let children = destDiv.getRootNode();
    for (; destDiv.childNodes;) {
        destDiv.removeChild(destDiv.firstChild);
    }
}
function addDiv() {

    let newElem = createElem();

    setBgc(newElem);
    setWidth(newElem);
    setHeight(newElem);
    setContent(newElem);
    setBorder(newElem);
    setRounded(newElem);
    setPadding(newElem);
    setMargin(newElem);
    let destDiv = document.getElementById("whiteBox");
    destDiv.style.display = "flex";
    destDiv.style.flexWrap = "wrap";
    destDiv.style.alignContent = "flex-start";
    destDiv.style.overflow = "hidden";
    destDiv.appendChild(newElem);
}
function createElem() {
    let etyp = document.getElementById("etyp");
    let newElem = document.createElement(etyp.value);
    return newElem;
}

function setBgc(newElem) {
    let bgc = document.getElementById("bgc");
    newElem.style.backgroundColor = bgc.value;
}
function setWidth(newElem) {
    let wdth = document.getElementById("wdth");
    newElem.style.width = wdth.value + "px";
}
function setHeight(newElem) {
    let hght = document.getElementById("hght");
    newElem.style.height = hght.value + "px";
}
function setContent(newElem) {
    let cntnt = document.getElementById("content");
    newElem.innerHTML = cntnt.value;
    newElem.style.textAlign = "center";
    newElem.style.overflow = "hidden";
    let clr = document.getElementById("color");
    newElem.style.color = clr.value;
    let font = document.getElementById("font");
    newElem.style.fontFamily = font.value;
    let fontSz = document.getElementById("fontSz");
    newElem.style.fontSize = fontSz.value + "rem";
}
function setBorder(newElem) {
    let brdrWdth = document.getElementById("brdrWdth");
    let brdrTyp = document.getElementById("brdrTyp");
    let brdrClr = document.getElementById("brdrClr");
    newElem.style.borderWidth = brdrWdth.value;
    newElem.style.borderStyle = brdrTyp.value;
    newElem.style.borderColor = brdrClr.value;
}
function setRounded(newElem) {
    let rounded = document.getElementById("rounded");
    newElem.style.borderRadius = rounded.value + "%";
}

function setPadding(newElem) {
    let pad = document.getElementById("pad");
    newElem.style.padding = pad.value + "px";
}
function setMargin(newElem) {
    let mrgn = document.getElementById("mrgn");
    newElem.style.margin = mrgn.value + "px";
}