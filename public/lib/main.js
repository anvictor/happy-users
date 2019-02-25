window.onload = function() {
  document.getElementsByName('newElemBtn')[0].addEventListener('click', addNewElement);
  document.getElementsByName('delElemBtn')[0].addEventListener('click', delElement);
  document.getElementsByName('saveSceneBtn')[0].addEventListener('click', saveScene);
  document.getElementsByName('loadSceneBtn')[0].addEventListener('click', rebuildScene);
  document.getElementsByName('deleteAllBtn')[0].addEventListener('click', deleteAll);
  document.getElementById('burgerChkbx').addEventListener('click', burger);

};
var responseServer = 'empty';

function burger() {
  let burger = document.getElementById('burgerChkbx');
  let modal = document.getElementById('modal');
  let menu = document.getElementById('menu');
  if (burger.checked){
    modal.className = 'visibleModal';
    menu.className = 'active';
  } else {
    modal.className = 'hiddenModal';
    menu.className = '';
  }

}

function saveScene() {
  let sceneEl = document.querySelector ( 'a-scene' );
  let boxArr = sceneEl.querySelectorAll('a-box');
  let sphereArr = sceneEl.querySelectorAll('a-sphere');
  let cylinderArr = sceneEl.querySelectorAll('a-cylinder');

  const sceneObj = {
    boxes: [],
    cylinders: [],
    spheres: []
  };
  for ( let i = 0; i < boxArr.length; i++ ){
  sceneObj.boxes.push({
      entity: boxArr[i].getAttribute('geometry').primitive,
      PX: boxArr[i].getAttribute('position').x,
      PY: boxArr[i].getAttribute('position').y,
      PZ: boxArr[i].getAttribute('position').z,
      color: boxArr[i].attributes[0].value,
      SX: boxArr[i].getAttribute('scale').x,
      SY: boxArr[i].getAttribute('scale').y,
      SZ: boxArr[i].getAttribute('scale').z,
      RX: boxArr[i].getAttribute('rotation').x,
      RY: boxArr[i].getAttribute('rotation').y,
      RZ: boxArr[i].getAttribute('rotation').z,
      height: boxArr[i].getAttribute('geometry').height,
      width: boxArr[i].getAttribute('geometry').width,
      depth: boxArr[i].getAttribute('geometry').depth,
      radius: boxArr[i].getAttribute('geometry').radius
    });
  }
  for ( let i = 0; i < cylinderArr.length; i++ ){
    sceneObj.cylinders.push({
      entity: cylinderArr[i].getAttribute('geometry').primitive,
      PX: cylinderArr[i].getAttribute('position').x,
      PY: cylinderArr[i].getAttribute('position').y,
      PZ: cylinderArr[i].getAttribute('position').z,
      color: cylinderArr[i].attributes[0].value,
      SX: cylinderArr[i].getAttribute('scale').x,
      SY: cylinderArr[i].getAttribute('scale').y,
      SZ: cylinderArr[i].getAttribute('scale').z,
      RX: cylinderArr[i].getAttribute('rotation').x,
      RY: cylinderArr[i].getAttribute('rotation').y,
      RZ: cylinderArr[i].getAttribute('rotation').z,
      height: cylinderArr[i].getAttribute('geometry').height,
      width: cylinderArr[i].getAttribute('geometry').width,
      depth: cylinderArr[i].getAttribute('geometry').depth,
      radius: cylinderArr[i].getAttribute('geometry').radius
    });
  }
  for ( let i = 0; i < sphereArr.length; i++ ){
    sceneObj.spheres.push({
      entity: sphereArr[i].getAttribute('geometry').primitive,
      PX: sphereArr[i].getAttribute('position').x,
      PY: sphereArr[i].getAttribute('position').y,
      PZ: sphereArr[i].getAttribute('position').z,
      color: sphereArr[i].attributes[0].value,
      SX: sphereArr[i].getAttribute('scale').x,
      SY: sphereArr[i].getAttribute('scale').y,
      SZ:sphereArr[i].getAttribute('scale').z,
      RX: sphereArr[i].getAttribute('rotation').x,
      RY: sphereArr[i].getAttribute('rotation').y,
      RZ: sphereArr[i].getAttribute('rotation').z,
      height: sphereArr[i].getAttribute('geometry').height,
      width: sphereArr[i].getAttribute('geometry').width,
      depth: sphereArr[i].getAttribute('geometry').depth,
      radius: sphereArr[i].getAttribute('geometry').radius

    });
  }
 let sceneStr = JSON.stringify(sceneObj);


  responseServer = sceneStr; // moch string. delete it in future and uncomment code below
  /*******************************************************************/
  // let req = new XMLHttpRequest();
  // req.onreadystatechange = function () {
  //   if (this.readyState === 4) {
  //     responseServer = JSON.parse(req.response).bodyStr;
  //   }
  // };
  //   req.open('POST', '/newObject', true);
  //   req.send(sceneStr);
  /*******************************************************************/

}

function rebuildScene() {
  let entities = JSON.parse(responseServer);


  for (let i = 0; i < entities.boxes.length; i++){
    let entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius;
    entity = entities.boxes[i].entity;
    PX = entities.boxes[i].PX;
    PY = entities.boxes[i].PY;
    PZ = entities.boxes[i].PZ;
    color = entities.boxes[i].color;
    id = entity + getRandomInt();
    SX = entities.boxes[i].SX;
    SY = entities.boxes[i].SY;
    SZ = entities.boxes[i].SZ;
    RX = entities.boxes[i].RX;
    RY = entities.boxes[i].RY;
    RZ = entities.boxes[i].RZ;
    height = entities.boxes[i].height;
    width = entities.boxes[i].width;
    depth = entities.boxes[i].depth;
    radius = entities.boxes[i].radius;
      createA_frameElement(entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius);
  }

  for (let i = 0; i < entities.cylinders.length; i++){
    let entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius;
    entity = entities.cylinders[i].entity;
    PX = entities.cylinders[i].PX;
    PY = entities.cylinders[i].PY;
    PZ = entities.cylinders[i].PZ;
    color = entities.cylinders[i].color;
    id = entity + getRandomInt();
    SX = entities.cylinders[i].SX;
    SY = entities.cylinders[i].SY;
    SZ = entities.cylinders[i].SZ;
    RX = entities.cylinders[i].RX;
    RY = entities.cylinders[i].RY;
    RZ = entities.cylinders[i].RZ;
    height = entities.cylinders[i].height;
    width = entities.cylinders[i].width;
    depth = entities.cylinders[i].depth;
    radius = entities.cylinders[i].radius;
    createA_frameElement(entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius);
  }

  for (let i = 0; i < entities.spheres.length; i++){
    let entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius;
    entity = entities.spheres[i].entity;
    PX = entities.spheres[i].PX;
    PY = entities.spheres[i].PY;
    PZ = entities.spheres[i].PZ;
    color = entities.spheres[i].color;
    id = entity + getRandomInt();
    SX = entities.spheres[i].SX;
    SY = entities.spheres[i].SY;
    SZ = entities.spheres[i].SZ;
    RX = entities.spheres[i].RX;
    RY = entities.spheres[i].RY;
    RZ = entities.spheres[i].RZ;
    height = entities.spheres[i].height;
    width = entities.spheres[i].width;
    depth = entities.spheres[i].depth;
    radius = entities.spheres[i].radius;
      createA_frameElement(entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius);

  }
  // createA_frameElement('box', 1, 2, 3, '#ffffff', box000000, 1, 2, 3, 1, 2, 3, 1, 2, 3, 0.5);
}


var changedColor = ''; // nesessary for highliting mouse-overing element

function deleteAll()
{
  // console.clear();
  let ul = '';
  if (ul = document.getElementsByClassName('ulModal')[0]){
  ul.parentNode.removeChild(ul);
}

  let sceneEl = document.querySelector ( 'a-scene' );
  var boxArr = sceneEl.querySelectorAll('a-box');
  var sphereArr = sceneEl.querySelectorAll('a-sphere');
  var cylinderArr = sceneEl.querySelectorAll('a-cylinder');

  for (let i = 0; i < boxArr.length; i++){// start deleteAll boxes list
    boxArr[i].parentNode.removeChild(boxArr[i]);
  }
  for (let i = 0; i < sphereArr.length; i++){// continue deleteAll spheres list
    sphereArr[i].parentNode.removeChild(sphereArr[i]);
  }
  for (let i = 0; i < cylinderArr.length; i++){// continue deleteAll cylinders list
    cylinderArr[i].parentNode.removeChild(cylinderArr[i]);
  }


}
function delElement() {
  if (!document.getElementById('modalDiv')) {

    let divModal = document.createElement('div');
    divModal.id = 'modalDiv';
    document.getElementById('modal').appendChild(divModal);
    document.getElementById('modalDiv').innerHTML = '';
  }
  let ulModal = document.createElement('ul');
  ulModal.className = 'ulModal';
  document.getElementById('modalDiv').innerHTML = '';
  document.getElementById('modalDiv').appendChild(ulModal);
  let sceneEl = document.querySelector ( 'a-scene' );
  var boxArr = sceneEl.querySelectorAll('a-box');
  var sphereArr = sceneEl.querySelectorAll('a-sphere');
  var cylinderArr = sceneEl.querySelectorAll('a-cylinder');

  for (let i = 0; i < boxArr.length; i++){// start build boxes list+
    buildList(i, boxArr[i].id);
  }
  for (let i = 0; i < sphereArr.length; i++){// +continue build spheres list+
    buildList(i + boxArr.length, sphereArr[i].id);
  }
  for (let i = 0; i < cylinderArr.length; i++){// +continue build cylinders list = finish.
    buildList(i + boxArr.length + sphereArr.length, cylinderArr[i].id);
  }
}

function buildList(i, id) { // list of existing elements to delete
  let entityLi = document.createElement('li');
  entityLi.className = 'liModal';
  document.getElementsByClassName('ulModal')[0].appendChild(entityLi);
  document.getElementsByClassName('liModal')[i].innerHTML = id +  ' delete?';
  entityLi.addEventListener('click', deleteEntity);
  entityLi.addEventListener('mouseover', highliteEntity);
  entityLi.addEventListener('mouseout', returnColorToEntity);
}

function highliteEntity(){ // if mouseover highlight element by black
  let entityEl = document.getElementById(event.toElement.innerText.replace(' delete?',''));
  changedColor = entityEl.attributes[0].nodeValue;
  entityEl.attributes[0].nodeValue = '#000000';
}

function returnColorToEntity() {// after mouseout return previous color to highlighted element
  let entityEl = document.getElementById(event.target.innerText.replace(' delete?',''));
  entityEl.attributes[0].nodeValue = changedColor;
}

function deleteEntity() {

  let entityEl = document.getElementById(event.toElement.innerText.replace(' delete?',''));
  if (confirm(event.target.innerText)){
    entityEl.parentNode.removeChild(entityEl);
    this.outerHTML = '';
  }
}

function addNewElement() {
  if (!document.getElementById('modalDiv')) {
    let divModal = document.createElement('div');
    divModal.id = 'modalDiv';
    document.getElementById('modal').appendChild(divModal);
  }
  document.getElementById('modalDiv').innerHTML = '';

  let ulModal = document.createElement('ul');
  ulModal.className = 'ulModal';
  document.getElementById('modalDiv').appendChild(ulModal);

  let sphereLi = document.createElement('li');
  sphereLi.id = 'sphereInp';
  sphereLi.className = 'liModal';
  ulModal.appendChild(sphereLi);
  sphereLi.innerHTML = 'sphere';

  sphereLi.addEventListener('click', showAddGeometryMenu);
  let cilinderLi = sphereLi.cloneNode(false);
  cilinderLi.id = 'cilinderInp';
  ulModal.appendChild(cilinderLi);
  cilinderLi.innerHTML = 'cylinder';
  cilinderLi.addEventListener('click', showAddGeometryMenu);

  let boxLi = sphereLi.cloneNode(false);
  boxLi.id = 'boxInp';
  ulModal.appendChild(boxLi);
  boxLi.innerHTML = 'box';
  boxLi.addEventListener('click', showAddGeometryMenu);
}

function showAddGeometryMenu(event) {

  let ulModal = document.getElementsByClassName('ulModal')[0];
  let labelli = document.createElement('li');
  labelli.className = 'liModal';
  ulModal.innerHTML = '';
  ulModal.appendChild(labelli);
  labelli.innerHTML = `
  <label for="createBtn">adding a new </label> <input type="submit" id="createBtn" value="` + event.toElement.firstChild.nodeValue + `"></input>
  `;

  let positionXYZli = labelli.cloneNode(false);
  ulModal.appendChild(positionXYZli);
  positionXYZli.innerHTML = `
  <label for="positionXGeometry">Position (PX, PY, PZ): </label>
  <input type="text" class="coord" id="positionXGeometry" placeholder="PX" value="` + (- randomize2()/100) + `">
  <input type="text" class="coord" id="positionYGeometry" placeholder="PY" value="` + (2 + randomize2()/100) + `">
  <input type="text" class="coord" id="positionZGeometry" placeholder="PZ" value="` + (-3 - randomize2()/100) + `">
  `;

  let rotationXYZli = labelli.cloneNode(false);
  ulModal.appendChild(rotationXYZli);
  rotationXYZli.innerHTML = `
  <label for="rotationXGeometry">Rotation (RX, RY, RZ): </label>
  <input type="text" class="coord" id="rotationXGeometry" placeholder="RX" value="` + randomize2()/2 + `">
  <input type="text" class="coord" id="rotationYGeometry" placeholder="RY" value="` + randomize2()/3 + `">
  <input type="text" class="coord" id="rotationZGeometry" placeholder="RZ" value="` + randomize2() + `">
  `;

  let colorli = labelli.cloneNode(false);
  ulModal.appendChild(colorli);
  colorli.innerHTML = `
  <label for="colorGeometry">Color: </label><input type="color" id="colorGeometry" value="#00`+ randomize2() +`ff">
  `;
  document.getElementById('createBtn').addEventListener("click", addNewElementToDOM)
}

function createA_frameElement(entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ, height, width, depth, radius) {
  let sceneEl = document.querySelector ( 'a-scene' );
  let newElement = document.createElement('a-' + entity);
  newElement.setAttribute("color", color );
  newElement.setAttribute('position', {x: PX, y: PY, z: PZ});
  newElement.setAttribute('shadow', {receive: "false"});
  newElement.setAttribute('id', id);
  newElement.setAttribute('scale', {x: SX, y: SY, z: SZ});
  newElement.setAttribute('rotation', {x: RX, y: RY, z: RZ});
  newElement.setAttribute('geometry', {height: height, width: width, depth: depth, radius: radius});
  sceneEl.appendChild(newElement);

  AFRAME.registerComponent(id, {
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      console.log('registered!');
      newElement.setAttribute("color", color );
    }
  });
}

function addNewElementToDOM() {
  // in case the user does not select the data they are generating randomly
  let entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ;
  event.preventDefault ? event.preventDefault() : (event.returnValue=false);
  entity = event.target.defaultValue;
  color = colorGeometry.value;
  colorGeometry.value = "#" + randomize2() + "f" + randomize2() + "f"; // shift next color
  id = entity + getRandomInt(); // every name is randomly different
  if (positionXGeometry.value){PX = positionXGeometry.value;} else {PX = -1;}
  positionXGeometry.value = -randomize2()/100;
  if (positionYGeometry.value){PY = positionYGeometry.value;} else {PY = 1;}
  positionYGeometry.value = 2+randomize2()/100;
  if (positionZGeometry.value){PZ = positionZGeometry.value;} else {PZ = -7;}
  positionZGeometry.value = -3-randomize2()/100;
  SX = 0.5 + randomize2()/1000; SY  = SX; SZ = SX;
  if (rotationXGeometry.value){RX = rotationXGeometry.value;} else {RX = 0;}
  rotationXGeometry.value = randomize2()/2;
  if (rotationYGeometry.value){RY = rotationYGeometry.value;} else {RY = 47;}
  rotationYGeometry.value = randomize2()/3;
  if (rotationZGeometry.value){RZ = rotationZGeometry.value;} else {RZ = 0;}
  rotationZGeometry.value = randomize2();
  createA_frameElement(entity, PX, PY, PZ, color, id, SX, SY, SZ, RX, RY, RZ)
}

function randomize2() {
  let now = new Date(); // it is nessesary for change position rotation size
  let rndmz2digit = '' + Date.parse(now);
  rndmz2digit = +rndmz2digit.substr(rndmz2digit.length-5)/1000;
  if (rndmz2digit < 10){rndmz2digit = '0' + rndmz2digit}
  return '' + rndmz2digit;
}

function getRandomInt() { //
  let now = new Date(); // it is nessesary for indexing new objects with same shape name and id
  now = '' + Date.parse(now);
  return '' + Math.floor(Math.random() * Math.floor(99999) * now);
}