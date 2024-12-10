import * as THREE from 'three';

// canvas
const canvas = document.querySelector('#webgl');

// 創建場景
const scene = new THREE.Scene({background: new THREE.Color(0x000000)});

// 創建相機
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 20;
scene.add( camera );

// 創建3D物件
const geometry = new THREE.TorusKnotGeometry( 10, 3, 50, 10 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const torusKnot = new THREE.Mesh( geometry, material ); 
scene.add( torusKnot );

// 創建渲染器
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

// 動畫循環
function animate() {
    requestAnimationFrame(animate);
    
    // 旋轉立方體
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// 開始動畫
animate();
