//setting background
//part 1 code
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w * 100, bottom + h * 100)
        }
    }
}

let horizon = window.innerHeight / 1.5
let sky = window.innerHeight-horizon
let grass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, sky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grass/150)

//everything else

//func for adding images
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

//func for setting images plcmnt
//part 3 code
function move(image){
    image.style.position = 'fixed'
    //moving character 
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom +'px'
    }
    return {
        to: moveToCoordinates
    }
}

//part 1 code mixed with part 3 
let greenCharacter = newImage('assets/green-character.gif') 
move(greenCharacter).to(200, 250)
let tree = newImage('assets/tree.png')
move(tree).to(200, 450)
let pillar = newImage('assets/pillar.png')
move(pillar).to(350, 250)
let pineTree = newImage('assets/pine-tree.png')
move(pineTree).to (450, 350)
let crate = newImage('assets/crate.png')
move(crate).to(150, 350)
let well = newImage('assets/well.png')
move(well).to(500, 575)

//part 2 code
function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}
//part 1 code mixed with part 3 code
let sword = newItem('assets/sword.png')
move(sword).to(500, 555)
let sheild = newItem('assets/sheild.png')
move(sheild).to(165, 335)
let staff = newItem('assets/staff.png')
move(staff).to(600, 250)
//part 2 code
function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory()