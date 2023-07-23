import { useState } from "react";

export const ShortenedView = ({ address = "", openModal }) => {
  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  return (
    <div>
      <p
        onClick={openModal}
        style={{
          margin: 0,
        }}
      >
        {" "}
        {shortenedAddress}
      </p>
    </div>
  );
};
