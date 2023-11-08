let pageHeader
let htmlHeader
let bun

function setup() {
  createCanvas(windowWidth, windowHeight);
  pageHeader = createElement('h1', "YOOOOOO")
  pageHeader.position(0, 100)
  htmlHeader= select('#htmlHeader')
  htmlHeader.html("AY MY G").position(0, 200)
  bun = createButton("Change Title")
  bun.position(0, 50)
  bun.mouseClicked(() => {
    answ = prompt("HEY! QUIT THAT!").toLowerCase();
    if (answ === "no"){
      htmlHeader.html("Seriously?! Look what you did!!")
    } else if(answ === "yes" || answ === "ok" || answ === "k"){
      htmlHeader.html("THANK YOU! Now dont press that button again!")
    } else {
      htmlHeader.html("What kind of answer even is that? WIERDO!")
    }
  })
}

function draw() {
  background(220);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}