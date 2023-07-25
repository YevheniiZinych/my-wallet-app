import { useBalance } from "wagmi";
import { formatEther } from "ethers";

export const ShortenedView = ({ address = "", onConnect }) => {
  const { data } = useBalance({
    address: address,
  });
  const value = data?.value || "0";

  const balance = Number(formatEther(value)).toFixed(3);

  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  return (
    <div>
      <p>{balance}</p>
      <p
        onClick={onConnect}
        style={{
          cursor: "pointer",
          marginLeft: 10,
        }}
      >
        {shortenedAddress}
      </p>
    </div>
  );
};
