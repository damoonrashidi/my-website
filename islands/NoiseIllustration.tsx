/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { SimplexNoise } from "simplex";

import { Button } from "../components/Button.tsx";

interface NoiseIllustrationProps {
  seed: number;
}

export default function NoiseIllustration(props: NoiseIllustrationProps) {
  const [, regenerate] = useState(props.seed);

  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const noise = new SimplexNoise();

    const [width, height] = [400, 400];

    const context = canvas.current.getContext("2d")!;

    context.fillStyle = "#eee";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#000";
    context.font = "700 14px Source Code Pro";

    for (let x = 0; x < width - 50; x += width / 8) {
      for (let y = 0; y < height - 50; y += height / 8) {
        const n = noise.noise2D(x / 1500, y / 1500);
        const rounded = Math.floor(n * 50) / 50;
        const leftPadded = `${rounded}`.padStart(5, " ");
        context.fillText(`${leftPadded}`, x + 15, y + 35);
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
