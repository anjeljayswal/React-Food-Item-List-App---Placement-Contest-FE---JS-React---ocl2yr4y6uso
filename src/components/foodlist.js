import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [itemName, setItemName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [spicinessLevel, setSpicinessLevel] = useState("");
  const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
  const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const handleAddFood = () => {
    const newFood = {
      itemName,
      foodType,
      spicinessLevel,
    };
    setFoods([...foods, newFood]);

    setItemName("");
    setFoodType("");
    setSpicinessLevel("");
    setIsFirstCardEnabled(false);
    setIsSecondCardEnabled(false);
    setIsFormEnabled(false);
  };

  const handleDeleteFood = (index) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
  };

  return (
    <>
      <div className="container">
        <h1>Food Items List</h1>
        <button onClick={() => setIsFirstCardEnabled(true)}>Add Food</button>

        <div className={`card-container ${isFirstCardEnabled ? "" : "disabled"}`}>
          <>
            <h2>Item Name:</h2>
            <input
              name="itemName"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              disabled={!isFirstCardEnabled}
            />
            <h2>Food Type:</h2>
            <input
              name="foodType"
              type="text"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              disabled={!isFirstCardEnabled}
            />
            <div className={`card ${isFormEnabled ? "" : "disabled"}`}>
              <form onClick={() => setIsFormEnabled(true)}>
                <h2>Spiciness Level:</h2>
                <input
                  name="spicinessLevel"
                  type="text"
                  value={spicinessLevel}
                  onChange={(e) => setSpicinessLevel(e.target.value)}
                  disabled={!isFormEnabled}
                />
              </form>
              <button onClick={handleAddFood} disabled={!isFormEnabled}>
                Save
              </button>
            </div>
          </>
        </div>

        <ul className="list">
          {foods.map((food, index) => (
            <li key={index}>
              {food.itemName} ({food.foodType}) - Spiciness Level:{" "}
              {food.spicinessLevel}
              <button onClick={() => handleDeleteFood(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FoodList;
