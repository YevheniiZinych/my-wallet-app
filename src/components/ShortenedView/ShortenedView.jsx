export const ShortenedView = ({ address = "", onConnect }) => {
  const shortenedAddress = address.slice(0, 6) + "....." + address.slice(-4);

  return (
    <div>
      <p
        onClick={onConnect}
        style={{
          margin: 0,
        }}
      >
        {shortenedAddress}
      </p>
    </div>
  );
};
