const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log("handleOnPlay");
  };
  return (
    <div>
      <h3>{title}</h3>
      <h3>{subTitle}</h3>
      <button onClick={handleOnPlay}>Play</button>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></div>
    </div>
  );
};

export default Banner;
