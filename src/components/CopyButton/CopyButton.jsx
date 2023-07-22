import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Button } from "./CopyButton.styled";

export const CopyButton = ({ address }) => {
  const [wasCopied, setWasCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setWasCopied(true);

    setTimeout(() => {
      setWasCopied(false);
    }, 1000);
  };
  return (
    <Button onClick={copyAddress}>
      {wasCopied ? (
        <DoneAllIcon
          sx={{
            color: "green",
            width: 15,
          }}
        />
      ) : (
        <ContentCopyIcon
          sx={{
            width: 15,
          }}
        />
      )}
    </Button>
  );
};
