// routes/_app.tsx
/** @jsx h */
/** @jsxFrag Fragment */
import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { Fragment, h } from "preact";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link href={asset("/global.css")} rel="stylesheet" />
        <title>Damoon Rashidi</title>
      </Head>
      <props.Component />
    </>
  );
}
