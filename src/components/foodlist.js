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

	const handleAddFood = () =>{
		const newFood = {
			itemName, foodType, SpicinessLevel,
		};
		setFoods([...foods, newFood]);

		setItemName("");
		setFoodType("");
		setSpicinessLevel("");
	};

	return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button onClick={() => setIsFirstCardEnabled(true)}>Add Food</button>

				<div className="card-container">
	{isFirstCardEnabled && (
                        <>
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
								value={itemName}
								disabled={!isFirstCardEnabled}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
								value={foodType}
								disabled={!isFirstCardEnabled}
							/>
							<div className={`card ${isFormEnabled ? "" : "disabled"}` }>
								<form>
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
										value={spicinessLevel}
										disabled={!isFormEnabled}
									/>
								</form>
								<button onClick={handleAddFood}>Save</button>
							</div>
						</>
				</div>
                <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
						<button>Save</button>
				</div>

				<ul className="list">
                        <li>
							{itemName} ({foodType}) - Spiciness Level:{" "}
							{spicinessLevel}
							<button>Delete</button>
						</li>
				</ul>
			</div>
		</>
	);
}

export default FoodList;
