import { useBalance } from "wagmi";
import { formatEther } from "ethers";

export const ShortenedView = ({ address = "", onConnect }) => {
  const { data } = useBalance({
    address: address,
  });
  const value = data?.value || "0";

  const balance = Number(formatEther(value)).toFixed(3);

  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  const getUserBalance = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      setCurrentBalance(Number(formatEther(balance)).toFixed(3));
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (address) {
    getUserBalance();
  }

  return (
    <div>
      <p>{balance}</p>
      <p
        style={{
          margin: 0,
          height: 18,
        }}
      >
        {currentBalance}
      </p>
      <Inner>
        <p
          onClick={() => onConnect()}
          style={{
            cursor: "pointer",
            marginLeft: 10,
          }}
        >
          {shortenedAddress}
        </p>
        <CopyButton address={address} />
      </Inner>
    </Wrapper>
  );
};
