import "./card.css"


export interface Post {
    id: number;
    brand: string;
}

const Card= ({brand}:Post) => {
console.log(brand)
    return (
        <div className="cards">
      <div className="card">
            <h3>{brand}</h3>
      </div>
        </div>
    );
};
export default Card
