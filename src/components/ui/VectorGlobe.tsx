"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const VectorGlobe = ({ className }: { className?: string }) => {
  // Generate static points for a "constellation" globe look
  const points = useMemo(() => {
    const pts = [];
    const numPoints = 60;
    const radius = 180;
    const cx = 200;
    const cy = 200;

    // Golden spiral distribution for even sphere-like packing on a 2D circle
    // This looks more "globe-like" than random
    const phi = Math.PI * (3 - Math.sqrt(5)); 

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius of the slice at y
      
      const theta = phi * i; 

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Project 3D (x, y, z) to 2D (projectedX, projectedY)
      // Slight tilt
      const tiltedY = y * Math.cos(0.3) - z * Math.sin(0.3);
      // z is depth
      
      pts.push({
        x: cx + x * radius,
        y: cy + tiltedY * radius,
        r: Math.random() < 0.2 ? 3 : 1.5, // Some larger "hub" nodes
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    return pts;
  }, []);

  // Generate connections between nearby points
  const connections = useMemo(() => {
    const conns = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const d = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
        if (d < 60) { // Connect if close
          conns.push({
            x1: points[i].x,
            y1: points[i].y,
            x2: points[j].x,
            y2: points[j].y,
            opacity: (1 - d / 60) * 0.4
          });
        }
      }
    }
    return conns;
  }, [points]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
        <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10"
        >
            <defs>
                <linearGradient id="globe-gradient-static" x1="0" y1="0" x2="400" y2="400">
                    <stop offset="0%" stopColor="#E65A45" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#D44531" stopOpacity="0.6" />
                </linearGradient>
            </defs>

            {/* Back Hemisphere (fainter) - No Fill */}
            <circle cx="200" cy="200" r="195" stroke="#D44531" strokeWidth="1" opacity="0.1" fill="none" />
            
            {/* Connections */}
            {connections.map((line, i) => (
                <line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="#D44531"
                    strokeWidth="0.8"
                    strokeOpacity={line.opacity}
                />
            ))}

            {/* Nodes */}
            {points.map((pt, i) => (
                <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r={pt.r}
                    fill="#E65A45"
                    fillOpacity={pt.opacity}
                />
            ))}
            
            {/* Outline Ring */}
            <circle cx="200" cy="200" r="198" stroke="#D44531" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />

        </svg>

        {/* Floating "Status" Markers for detail */}
        <motion.div 
            className="absolute top-[20%] right-[20%] w-2 h-2 bg-coral rounded-full"
            animate={{ boxShadow: ["0 0 0 0px rgba(212, 69, 49, 0.4)", "0 0 0 10px rgba(212, 69, 49, 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </div>
  );
};
