let currentPage = "#page1";

function setup() {
  select('#item1').mouseClicked(() => switchPage(1))
  select('#item2').mouseClicked(() => switchPage(2))
  select('#item3').mouseClicked(() => switchPage(3))
  select('#item4').mouseClicked(() => switchPage(4))
}

function draw() {
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function switchPage(pagenum){
  select(currentPage).removeClass("show")
  currentPage = "#page"+str(pagenum)
  select(currentPage).addClass("show")
}