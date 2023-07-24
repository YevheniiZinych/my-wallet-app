import sha3 from "js-sha3";

export const ChecksumChecker = (accountValue) => {
  try {
    const addressWithoutPrefix = accountValue.replace(/^0x/, "").toLowerCase();

    const hash = sha3.keccak256(addressWithoutPrefix);

    const checksumAddress =
      "0x" +
      addressWithoutPrefix
        .split("")
        .map((char, index) => {
          if (parseInt(hash[index], 16) >= 8) {
            return char.toUpperCase();
          } else {
            return char;
          }
        })
        .join("");

    if (accountValue === checksumAddress) return accountValue;
  } catch (error) {
    console.log("Error checking Checksum:", error);
    if (error) return false;
  }
};
