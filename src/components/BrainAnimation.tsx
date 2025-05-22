import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const BrainAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    // Keep the camera closer on mobile for a larger appearance
    camera.position.z = isMobile ? 4.5 : 5; 
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a sphere (brain-like shape)
    // Increase the size for mobile
    const geometry = new THREE.IcosahedronGeometry(isMobile ? 1.8 : 1.5, 3);
    
    // Create a material
    const material = new THREE.MeshPhongMaterial({
      color: 0x00aaff,
      emissive: 0x001f3f,
      specular: 0xffffff,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
      wireframe: true
    });
    
    // Create the mesh
    const brain = new THREE.Mesh(geometry, material);
    scene.add(brain);
    
    // Create a wireframe overlay
    // Also increase the wireframe size for mobile to match the brain mesh
    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(isMobile ? 1.82 : 1.52, 3),
      new THREE.MeshBasicMaterial({ 
        color: 0x20c997,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      })
    );
    scene.add(wireframe);
    
    // Add some particle points
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = isMobile ? 150 : 200; // More particles on mobile for better visibility
    
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Expand particle field on mobile for better visibility
      positions[i3] = (Math.random() - 0.5) * (isMobile ? 6 : 5);
      positions[i3 + 1] = (Math.random() - 0.5) * (isMobile ? 6 : 5);
      positions[i3 + 2] = (Math.random() - 0.5) * (isMobile ? 6 : 5);
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00aaff,
      size: isMobile ? 0.08 : 0.05, // Larger particles on mobile
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x00aaff, 2, 20);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x20c997, 2, 20);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      brain.rotation.x += 0.002;
      brain.rotation.y += 0.003;
      
      wireframe.rotation.x = brain.rotation.x;
      wireframe.rotation.y = brain.rotation.y;
      
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isMobile]);
  
  return (
    <div 
      ref={containerRef} 
      className={`relative ${isMobile ? 'h-[280px] mt-8' : 'h-[500px]'} w-full animate-fade-in-up animate-delay-300`}
    />
  );
};

export default BrainAnimation;
