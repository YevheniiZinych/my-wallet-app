import { useState } from "react";

export const ShortenedView = ({ address }) => {
  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  return (
    <div>
      <p> {shortenedAddress}</p>
    </div>
  );
};
