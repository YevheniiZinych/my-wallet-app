import { useState } from "react";

export const ShortenedView = ({ address }) => {
  const [wasCopied, setWasCopied] = useState(false);
  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setWasCopied(true);

    setTimeout(() => {
      setWasCopied(false);
    }, 1000);
  };

  return (
    <div>
      <p> {shortenedAddress}</p>
      <button onClick={copyAddress}>{wasCopied ? "Copied" : "Copy"}</button>
    </div>
  );
};
