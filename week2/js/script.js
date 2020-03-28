//Create an Empty Scene
var scene = new THREE.Scene();
//Create a Basic Camera, so we can veiw our 3d space
var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 10, 1000);
//Create a Renderer with AnitAliasing
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
//Uses a method to set a clear color to our renderer
renderer.setClearColor('#000000');
//Uses a method to set size to our renderer
renderer.setSize(window.innerWidth, window.innerHeight);
//Appends our renderer as a DOM element to the <body> of our index.html page
document.body.appendChild(renderer.domElement);

//var texture=THREE.ImageUtils.loadTexture('img/floor.jpg');
function geometry(){
var earthgeometry = new THREE.SphereGeometry(200, 100, 100);
var texture = new THREE.TextureLoader().load('js/earth.jpg');
var earthmaterial =new THREE.MeshBasicMaterial({map: texture});
mesh1 = new THREE.Mesh(earthgeometry, earthmaterial);
scene.add(mesh1);
mesh1.position.z = -1000;

var moongeometry=new THREE.SphereGeometry(80, 15, 15);
var moonmaterial=new THREE.MeshBasicMaterial({ color: "#433F81" });
mesh2=new THREE.Mesh(moongeometry,moonmaterial);
mesh2.position.z = -500;
scene.add(mesh2);
}


let angle =0;
function render(){
  requestAnimationFrame(render);
  renderer.setClearColor("#CAE1FF");
  renderer.render(scene, camera);
  mesh1.rotation.y += 0.001;

  angle +=0.01;
  var x = 400*Math.sin(angle);
  var z = 400*Math.cos(angle)-1000;
  mesh2.position.set(x,x,z);
  renderer.render(scene,camera);
}
geometry();
render();
