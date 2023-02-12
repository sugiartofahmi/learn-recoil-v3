import Button from "../Button";
const Card = ({ name, info, image, price, onClick }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
      <img className="w-full h-40 object-cover" src={image} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-between">
          <h1>{name}</h1>
          <h1 className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${price}
          </h1>
        </div>
        <p className="text-gray-700 text-base">{info}</p>
      </div>
      <div className="px-6 pt-4 pb-3 flex justify-center">
        <Button onClick={onClick} text="Add To Cart" />
      </div>
    </div>
  );
};

export default Card;
