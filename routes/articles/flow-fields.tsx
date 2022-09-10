/** @jsx h */

import { tw } from "@twind";
import { h } from "preact";
import { Prism } from "prism";
import { InlineSnippet } from "../../components/InlineSnippet.tsx";
import NoiseDirectionIllustration from "../../islands/NoiseDirectionIllustration.tsx";
import NoiseIllustration from "../../islands/NoiseIllustration.tsx";

export default function FlowFields() {
  return (
    <article>
      <h1 class={tw`text-6xl`}>
        What I've learned about flow fields so far.
      </h1>

      <p>
        This article will describe the method and concepts I used to create the
        series of generated art works pictured below, as I understand them. The
        algorithm, and code examples, that will be provided can however generate
        a great set of variations of flow field images. As a note, far more
        talented people than me have written articles on the subject which I
        strongly suggest reading.
      </p>

      <p>
        The main driving force behind a flow field is usually a noise function,
        most typically it's something like simplex noise. Without regurgitating
        the wikipedia article, the simplex noise (and perlin noise also for that
        matter) function returns a value between -1 and 1 for any given point in
        a 2D (or 3+D) space. The value for a given point will be similar to the
        value of the surrounding points, only with a small variation.
        <InlineSnippet>
          const noiseValue = noise(x, y)
        </InlineSnippet>
        for reference.
      </p>
      <p>
        Illustrated below
      </p>

      <NoiseIllustration seed={100}></NoiseIllustration>

      <p>
        Here, we can see that values closer to eachother in space are also
        fairly close to eachother in value, the further out you go from any
        given point, the more divergent a value is.
      </p>

      <Prism language="typescript">
        {`const noiseValue = noise.noise2D( x, y, );

context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.moveTo(x, y);
context.lineTo( x + Math.cos(noiseValue) * 20, y + Math.sin(noiseValue) * 20);
context.stroke();`}
      </Prism>

      <p>
        The illustration below attempts to visualise this in a more
        comprehensible way by translating the noiseValue that is in the range
        <InlineSnippet>-1..1</InlineSnippet> to an angle that is in the range
        <InlineSnippet>0..2π</InlineSnippet>
      </p>

      <NoiseDirectionIllustration seed={20}></NoiseDirectionIllustration>
    </article>
  );
}
