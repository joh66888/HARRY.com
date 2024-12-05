import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 創建場景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// 創建相機
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 創建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 創建控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// 創建一個立方體 old
/*
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ 
    color: 0x00ff00,
    flatShading: true
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
*/

// 創建一個球體 new
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); 
// 宣告球體變數
const cylinder = new THREE.Mesh( geometry, material ); 
scene.add( cylinder );

// 添加燈光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 處理窗口大小變化
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/*
// 動畫循環 old
function animate() {
    requestAnimationFrame(animate);
    
    // 旋轉立方體
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    controls.update();
    renderer.render(scene, camera);
}
*/

// 動畫循環 new
function animate() {
    requestAnimationFrame(animate);
    
    // 旋轉球體
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    
    controls.update();
    renderer.render(scene, camera);
}

animate();
