import React, { forwardRef } from "react";
import { useEffect } from "react";
import * as Style from "./Canvas.style";

const size = 600;

const Canvas = forwardRef(({ draw, ...props }, canvasRef) => {
  useEffect(() => {
    if (!canvasRef) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    draw(ctx);

    return () => ctx.clearRect(0, 0, size, size)
  }, [draw, canvasRef]);

  if (!canvasRef) return null;

  return <Style.Canvas height={size} width={size} ref={canvasRef} {...props} />;
});

export default Canvas;
