/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { SimplexNoise } from "simplex";

import { Button } from "../components/Button.tsx";

interface NoiseIllustrationProps {
  seed: number;
}

export default function NoiseDirectionIllustration(
  props: NoiseIllustrationProps,
) {
  const [, regenerate] = useState(props.seed);

  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const noise = new SimplexNoise();

    const context = canvas.current.getContext("2d")!;
    const [width, height] = [400, 400];

    context.fillStyle = "#eee";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "#000";
    context.lineWidth = 4;
    context.lineCap = "round";

    for (let x = 50; x < width - 50; x += width / 10) {
      for (let y = 50; y < height - 50; y += height / 10) {
        const n = noise.noise2D(
          x / 400,
          y / 400,
        );

        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.stroke();

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(
          x + Math.cos(n) * 20,
          y + Math.sin(n) * 20,
        );
        context.stroke();
      }
    }
  });

  return (
    <div class={tw`flex gap-2 flex-col w-96 align-center justify-center`}>
      <canvas width={400} height={400} ref={canvas}></canvas>
      <Button onClick={() => regenerate(Math.random() * 100)}>
        Regenerate
      </Button>
    </div>
  );
}
