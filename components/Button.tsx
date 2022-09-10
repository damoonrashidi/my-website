/** @jsx h */
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { h } from "preact";

export function Button(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={tw`px-2 py-1 border(gray-100 2) hover:bg-gray-200 disabled:bg-gray-400`}
    />
  );
}
