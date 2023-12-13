var officegeneral
var freddy, chica, bonnie, gold, freddychica, freddybonnie, freddybonniechica, chicabonnie
var officeopen, officeclosed, officelopen, officeropen, officelopenbonnie, officeropenchica, officeropenfreddy, officeropenchicafreddy
var hour = 0
freddy = false
chica = false
bonnie = false
hour = hour + 1
gold = false
function preload (){
officeopen = loadImage ("escritorio-(ambas-abertas).png")
officeclosed = loadImage ("escritorio-(ambas-fechadas).png")
officelopen = loadImage ("escritorio-(dir-fechada).png")
officeropen = loadImage ("escritorio-(esq-fechada).png")
freddy = loadImage ("escritorio-(ambas-abertas-freddy).png")
bonnie = loadImage ("escritorio-(bonnie-ambas-abertas).png")
chica = loadImage ("escritorio")


}
function setup (){
createCanvas(800,800)
officegeneral = createSprite (400, 400, 800, 800)


}
function draw (){
background("black")


drawsprites()
}
