import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class LoadModel {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      100
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.model = null;
  }

  start = () => {
    const container = document.getElementById("container");
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0xf2f2f2);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(this.renderer.domElement);

    this.camera.position.set(20, 0, 0);

    const color = 0xffffff;
    const intensity = 1;
    const light1 = new THREE.HemisphereLight(color, color, intensity);
    this.scene.add(light1);

    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(5, 10, 2);
    this.scene.add(light2);
    this.scene.add(light2.target);

    const loader = new GLTFLoader().setPath("./assets/car/");
    loader.load("scene.gltf", (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((object) => {
        if (object.isMesh) object.castShadow = true;
      });
      this.model.scale.set(50, 50, 50);
      this.model.position.set(0, -3, 0);
      this.scene.add(this.model);
      this.render();
    });

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.addEventListener("change", this.render); // use if there is no animation loop
    controls.minDistance = 15;
    controls.maxDistance = 20;
    controls.target.set(0, 0, -0.2);
    controls.update();

    window.addEventListener("resize", this.onWindowResize);
  };

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  };

  render = () => {
    this.renderer.render(this.scene, this.camera);
  };
}

export default LoadModel;
