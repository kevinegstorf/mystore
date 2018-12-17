import * as React from "react";

export interface IAppProps {
  name: string;
  color: string;
}

export default function IApp(props: IAppProps) {
  const { name, color } = props;
  return (
    <>
      <div>{name}</div>
      <div>{color}</div>
    </>
  );
}
