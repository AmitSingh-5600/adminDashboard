import "./updates.css";
import { UpdatesData } from "../../assets/data/Data";
function Updates() {
  return (
    <div className="updates">
      {UpdatesData.map((update, index) => {
        return (
          <div key={index} className="update">
            <div className="user-image">
              <img src={update.img} />
            </div>
            <div className="user-details">
              <p>
                <span>{update.name}</span> {update.noti}
              </p>

              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Updates;
