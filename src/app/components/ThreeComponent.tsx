// components/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeComponent = () => {
    const mountRef = useRef(null);
    const objectRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Set up scene, camera, and renderer with alpha enabled for transparency
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // enable transparency
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0); // set background to transparent
        mountRef.current.appendChild(renderer.domElement);

        // Add a blocky object (cube)
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
        const object = new THREE.Mesh(geometry, material);
        objectRef.current = object;
        scene.add(object);
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            if (mountRef.current) {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (mountRef.current) {
                camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Handle mouse move
        const handleMouseMove = (event) => {
            if (objectRef.current) {
                const rect = mountRef.current.getBoundingClientRect();
                const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
                objectRef.current.position.x = mouseX * 2;
                objectRef.current.position.y = mouseY * 2;
            }
        };
        mountRef.current.addEventListener('mousemove', handleMouseMove);

        // Handle hover
        const handleMouseOver = () => {
            if (objectRef.current) {
                const newGeometry = new THREE.BoxGeometry(); // Reset to original blocky shape
                objectRef.current.geometry = new THREE.BufferGeometry().fromGeometry(newGeometry);
            }
        };

        const handleMouseOut = () => {
            if (objectRef.current) {
                const newGeometry = new THREE.TetrahedronGeometry(); // Change shape on hover
                objectRef.current.geometry = new THREE.BufferGeometry().fromGeometry(newGeometry);
            }
        };

        if (mountRef.current) {
            mountRef.current.addEventListener('mouseover', handleMouseOver);
            mountRef.current.addEventListener('mouseout', handleMouseOut);
        }

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeEventListener('mousemove', handleMouseMove);
                mountRef.current.removeEventListener('mouseover', handleMouseOver);
                mountRef.current.removeEventListener('mouseout', handleMouseOut);
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeComponent;
