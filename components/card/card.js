import Image from "next/image";

const Card = (props) => {
  const { imgUrl, size } = props;
  return (
    <div>
      Card
      <Image src={imgUrl} alt="image" width="300px" height="300px" />
    </div>
  );
};

export default Card;
