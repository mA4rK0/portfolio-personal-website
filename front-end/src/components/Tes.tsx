import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1 className="mt-[100rem]">Test</h1>
    </div>
  );
}
