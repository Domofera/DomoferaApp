$( document ).ready(function() {
var aubengine;

function runShowRoom(){
  aubengine = new Aubengine("the-canvas");
  aubengine.setUpEnvironment("#86DADA", 1);

  /* CAMERAS */
  var camera1          = aubengine.createCamera('camera1',[0.0,0.0,0.0], 225,-15);
  var camera2          = aubengine.createCamera('camera2',[0.0,10.0,10.0], -700,-70); //from the cube

  var camera1Pos       = [0,3,40];
  var camera1Transform = aubengine.createTransformation('camera1Trans', camera1Pos); //alone camera


  /* LIGHTS */
  var light1Pos = [-25,25,-25];
  var light2Pos = [ 25,25,-25];
  var light3Pos = [ -25,25,-25];
  var light4Pos = [ -25,-25,25];

  var light1Transform = aubengine.createTransformation('light1Trans', light1Pos);
  var light2Transform = aubengine.createTransformation('light2Trans', light2Pos);
  var light3Transform = aubengine.createTransformation('light2Trans', light3Pos);
  var light4Transform = aubengine.createTransformation('light2Trans', light4Pos);

  var fleft  = aubengine.createLight('fleft',  [0.6,0.6,0.6],[0.0,0.0,0.0],[0,0,0]);
  var fright = aubengine.createLight('fright', [0.6,0.6,0.6],[0.0,0.0,0.0],[0,0,0]);
  var nleft  = aubengine.createLight('nleft',  [0.6,0.6,0.6],[0.0,0.0,0.0],[0,0,0]);
  var nright = aubengine.createLight('nright', [0.6,0.6,0.6],[0.0,0.0,0.0],[0,0,0]);


  /* MESHES */

  /* Huerto */
  var huertoPos  = [0,1,0];
  var huertoSize = [0.2,0.2,0.2];

  var huertoTopPos = [0,1.5,0];

  var huertoTransform = aubengine.createTransformation('huertoTrans', huertoPos, huertoSize);
  var huertoTopTransform = aubengine.createTransformation('huertoTrans', huertoTopPos, huertoSize);

  var huertoBase = aubengine.createMesh('/assets/huertoBase.json', 'huertoBase');
  huertoBase.setSpecularColor(204, 102, 0);

  var huertoTop = aubengine.createMesh('/assets/huertoTop.json', 'huertoTop');
  huertoTop.setSpecularColor(255, 204, 153);

  var valla = aubengine.createMesh('/assets/vallaCompleta.json', 'valla');

  /* frutas y verduras */
  var tomatesPos = [-5,3,2];
  var tomatesSize = [0.4,0.4,0.4];

  var tomatesTransform = aubengine.createTransformation('tomatesTrans', tomatesPos, tomatesSize);

  var tomateBase = aubengine.createMesh('/assets/tomateBase.json', 'tomateBase');
  tomateBase.setSpecularColor(204, 0, 0);
  var tomateTop  = aubengine.createMesh('/assets/tomateTop.json', 'tomateTop');
  tomateTop.setSpecularColor(0, 102, 0);
  /* SCENE TREE */

  //main camera
  var transform0 = aubengine.createNode(camera1Transform);
  aubengine.addNode(aubengine.getRoot(), transform0);
  var cameraNode1 = aubengine.createNode(camera1);
  aubengine.addNode(transform0, cameraNode1);

  //light1
  var transform1 = aubengine.createNode(light1Transform);
  aubengine.addNode(aubengine.getRoot(), transform1);
  var fleftNode = aubengine.createNode(fleft);
  aubengine.addNode(transform1, fleftNode);

  //light2
  var transform2 = aubengine.createNode(light2Transform);
  aubengine.addNode(aubengine.getRoot(), transform2);
  var frightNode = aubengine.createNode(fright);
  aubengine.addNode(transform2, frightNode);

  //light3
  var transform3 = aubengine.createNode(light3Transform);
  aubengine.addNode(aubengine.getRoot(), transform3);
  var nleftNode = aubengine.createNode(nleft);
  aubengine.addNode(transform3, nleftNode);

  //light4
  var transform4 = aubengine.createNode(light4Transform);
  aubengine.addNode(aubengine.getRoot(), transform4);
  var nrightNode = aubengine.createNode(nright);
  aubengine.addNode(transform4, nrightNode);

  //huerto
  var transform5 = aubengine.createNode(huertoTransform);
  aubengine.addNode(aubengine.getRoot(), transform5);
  var transform6 = aubengine.createNode(huertoTopTransform);

  var huertoBaseNode = aubengine.createNode(huertoBase);
  var huertoTopNode  = aubengine.createNode(huertoTop);
  var vallaNode      = aubengine.createNode(valla);

  aubengine.addNode(transform5, huertoBaseNode);
  aubengine.addNode(transform5, transform6);
  aubengine.addNode(transform5, vallaNode);
  aubengine.addNode(transform6, huertoTopNode);

  var transform7 = aubengine.createNode(tomatesTransform);
  tomatesTransform.animate(5, 180, tomatesTransform.translate, [tomatesTransform.position, [0,-0.07,0]]);
  aubengine.addNode(transform5, transform7);
  var tomateBaseNode = aubengine.createNode(tomateBase);
  var tomateTopNode = aubengine.createNode(tomateTop);
  aubengine.addNode(transform7, tomateBaseNode);
  aubengine.addNode(transform7, tomateTopNode);

  aubengine.getTree().saveEntities(aubengine);
  aubengine.setMainCamera(Cameras.get(0));
  var animation = new Animation(5, 50, aubengine.draw, null, aubengine);
  animation.startAnimation();
  tomatesTransform.startAnimation();
};

runShowRoom();
resizeCanvas();

document.getElementById('draw').addEventListener('click', function(event) {
  aubengine.draw();
});
});
