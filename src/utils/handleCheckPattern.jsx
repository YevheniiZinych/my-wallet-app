import { toast } from "react-hot-toast";
import { ChecksumChecker } from "./ChecksumChecker";

export const handleCheckPattern = (accountValue) => {
  const pattern = /^0x[0-9A-Fa-f]{40}$/;

  if (pattern.test(accountValue)) {
    toast.success("Address correct");
  } else {
    toast.error(
      "Invalid address. Address should start from 0x and have 40 symbols"
    );
  }

  const result = ChecksumChecker(accountValue);

  return result;
};
