var container, stats;
var camera, scene, raycaster, renderer;


function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 55000 );
    camera.position.y+=50000;
    camera.position.z=7000;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}
//--------
function stormtrooper1(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("stormtrooper.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("stormtrooper.obj", function(mesh){
  mesh.scale.set(1, 1, 1);
  scene.add(mesh);
  });
});
}
//--------
function stormtrooper2(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("xjbz.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("xjbz.obj", function(mesh){
  mesh.scale.set(1, 1, 1);
  scene.add(mesh);
  });
});
}

//---------
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
  document.getElementById("stormtper1").addEventListener("click",stormtrooper1);
  document.getElementById("stormtper2").addEventListener("click",stormtrooper2);

}
init();
render();
