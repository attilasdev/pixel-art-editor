'use client'

import React from 'react'
import { useRef, useEffect } from 'react'


interface PixelCanvasProps {
    width: number,
    height: number,
    pixelSize: number,
}

const PixelCanvas: React.FC<PixelCanvasProps> = ({width, height, pixelSize}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawingRef = useRef(false);

    useEffect(()=> {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const ctx = canvas.getContext('2d');
        if(!ctx) return;

        canvas.width = width * pixelSize;
        canvas.height = height * pixelSize;

        ctx.strokeStyle = '#ccc';

        for(let x = 0; x <= width; x++) {
            ctx.beginPath();
            ctx.moveTo(x * pixelSize, 0);
            ctx.lineTo(x * pixelSize, height * pixelSize);
            ctx.stroke();
        }

        for(let y = 0; y<= height; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * pixelSize);
            ctx.lineTo(width * pixelSize, y * pixelSize);
            ctx.stroke();
        }

        const drawPixel = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / pixelSize);
            const y = Math.floor((e.clientY - rect.top) / pixelSize);

            ctx.fillStyle = 'white';
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }

        const handleMouseDown = (e: MouseEvent) => {
            isDrawingRef.current = true;
            drawPixel(e);
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDrawingRef.current) return;
            drawPixel(e);
        }
        
        const handleMouseUp = () => {
            isDrawingRef.current = false;
        }

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseUp);
        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseUp);
        };
    }, [width, height, pixelSize]);


    return <canvas ref={canvasRef} style={{border: '1px solid black'}}/>;
};

export default PixelCanvas;


