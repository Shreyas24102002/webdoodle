import { useEffect, useRef } from "react";

const Board = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // when we are mounting i.e. Earlier when we created our canvas only small portion
    // was in use. But using this, whole screen is alloted for our canvas.
    canvas.width = window.innerWidth;
    canvas.height = window.innerWeight;
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
