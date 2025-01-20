import "./cards.css";
import Card from "../card/Card";
import { cardsData } from "../../assets/data/Data";
import "react-circular-progressbar/dist/styles.css";
function Cards() {
  return (
    <div className="cards">
      {cardsData.map((card, id) => {
        return (
          <div key={id} className="parent-container">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
