/** @jsx h */

import { tw } from "@twind";
import { h, JSX } from "preact";

export function InlineSnippet(
  { children }: { children: JSX.Element | JSX.Element[] | string },
) {
  return (
    <span
      class={tw`inline-block px-2 py-1 bg-gray-100 rounded-md strong font-medium`}
    >
      {children}
    </span>
  );
}
