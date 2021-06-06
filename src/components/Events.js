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

    this.leftSide = document.getElementById("leftSide");
    this.rightSide = document.getElementById("rightSide");
    this.sidebar = document.getElementById("sidebar");
    this.btnContainer = document.getElementById("btnContainer");
    this.count = 0;
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
    light2.position.set(15, 100, -20);
    this.scene.add(light2);
    this.scene.add(light2.target);

    const light3 = new THREE.DirectionalLight(color, intensity);
    light3.position.set(-55, 50, -20);
    this.scene.add(light3);
    this.scene.add(light3.target);

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

    document.getElementById("leftBtn").addEventListener("click", () => {
      this.count = 0;
      this.handleOpenLeftSide();
      this.handleRotateLeft();
    });
    document.getElementById("rightBtn").addEventListener("click", () => {
      this.count = 0;
      this.handleOpenRightSide();
      this.handleRotateRight();
    });
    document.getElementById("closeLeftBtn").addEventListener("click", () => {
      this.count = 0;
      this.handleCloseLeftSide();
      this.handleRotateRight();
    });
    document.getElementById("closeRightBtn").addEventListener("click", () => {
      this.count = 0;
      this.handleCloseRightSide();
      this.handleRotateLeft();
    });

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

  handleRotateLeft = () => {
    if (this.count < 50) requestAnimationFrame(this.handleRotateLeft);
    this.model.rotation.x += 0.005;
    this.model.rotation.y += 0.02;
    this.model.position.z -= 0.1;
    this.count++;
    this.render();
  };

  handleRotateRight = () => {
    if (this.count < 50) requestAnimationFrame(this.handleRotateRight);
    this.model.rotation.x -= 0.005;
    this.model.rotation.y -= 0.02;
    this.model.position.z += 0.1;
    this.count++;
    this.render();
  };

  handleOpenLeftSide = () => {
    this.leftSide.style.left = "0";
    this.sidebar.style.zIndex = 20;
    this.btnContainer.style.opacity = 0;
  };
  handleOpenRightSide = () => {
    this.rightSide.style.right = "0";
    this.sidebar.style.zIndex = 20;
    this.btnContainer.style.opacity = 0;
  };
  handleCloseLeftSide = () => {
    this.leftSide.style = "-50%";
    this.sidebar.style.zIndex = 1;
    this.btnContainer.style.opacity = 1;
  };
  handleCloseRightSide = () => {
    this.rightSide.style.right = "-50%";
    this.sidebar.style.zIndex = 1;
    this.btnContainer.style.opacity = 1;
  };
}

export default LoadModel;
