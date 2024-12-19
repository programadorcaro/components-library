import { JSX } from "react";

type HelloProps = {
  name?: string;
  color?: string;
};

export function Hello({
  name = "team",
  color = "blue",
}: HelloProps): JSX.Element {
  return (
    <h1>
      Hello {name} - {color}
    </h1>
  );
}
