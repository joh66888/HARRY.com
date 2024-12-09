// 導入THREE中所有的核心類別，添加“*”
import * as THREE from 'three';

// canvas 
const canvas = document.querySelector('#webgl');

// 創建場景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// 創建物件
const geometry = new THREE.BoxGeometry(8, 8, 8);
const material = new THREE.MeshBasicMaterial({ 
    color: 0x049ef4, 
    wireframe: true
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 創建相機
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 20;
scene.add(camera);

// 創建渲染器
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// 動畫循環
function animate() {
    requestAnimationFrame(animate);
    
    // 旋轉立方體
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();
