import { useState, useEffect, useContext } from "react";
import { FaHouseDamage } from "react-icons/fa";
import GlobalContext from "../context/GlobalContext";
const AuctionSellingPage = () => {
  const { fetchUpdatedAuctions } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [roof, setRoof] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [sellerId, setSellerId] = useState("");
  const currentHighestBid = 0;
  const status = "active";
  const [errorMessage, setErrorMessage] = useState("");
  const backgroundUrl =
    "http://www.structuretech1.com/wp-content/uploads/2014/08/20140702_115316.jpg";

  useEffect(() => {
    // Update the start value when the component mounts
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    const formattedTime = `${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    setStart(`${formattedDate} ${formattedTime}`);
  }, []);

  const submitAuction = async () => {
    // Validate the startPrice and roof values

    const auction = {
      title,
      description,
      startPrice,
      roof,
      start,
      end,
      sellerId,
      currentHighestBid,
      status,
      images:
        "https://images.onlinelabels.com/images/clip-art/mcol/mcol_open_box.png", // Set image URL
    };

    try {
      const response = await fetch("http://localhost:8080/auction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auction),
      });

      if (response.ok) {
        console.log("Auction submitted successfully");
        fetchUpdatedAuctions();
      } else {
        console.error("Failed to submit auction");
      }
    } catch (error) {
      console.error("Error occurred while submitting auction", error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStartPriceChange = (e) => {
    setStartPrice(e.target.value);
  };

  const handleRoofChange = (e) => {
    setRoof(e.target.value);
  };

  const handleEndChange = (e) => {
    setEnd(e.target.value);
  };

  const handleSellerIdChange = (e) => {
    setSellerId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the startPrice and roof values
    if (startPrice > roof) {
      setErrorMessage("Start price cannot be greater than the roof price");
      return;
    }

    if (end === "") {
      setErrorMessage("You need to select an end date");
      return;
    }

    // Clear error message if present
    setErrorMessage("");

    // Call the submitAuction function to submit the auction
    submitAuction();

    // Clear form fields
    setTitle("");
    setDescription("");
    setStartPrice("");
    setRoof("");
    setEnd("");
    setSellerId("");
  };

  return (
    <div className="auction-selling-page">
      {/* Display the error message */}
      {errorMessage && <p className="errorText">{errorMessage}</p>}
      <h1 className="page-title">Auction Selling Page</h1>
      <form className="auction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div>
          <label className="form-label">Start Price:</label>
          <input
            type="number"
            value={startPrice}
            onChange={handleStartPriceChange}
            className="form-input"
          />
        </div>

        <div>
          <FaHouseDamage style={{ margin: "2px" }} />
          <label className="form-label">Roof:</label>
          <input
            type="number"
            value={roof}
            onChange={handleRoofChange}
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">End:</label>
          <input
            type="datetime-local"
            value={end}
            onChange={handleEndChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Your name:</label>
          <input
            type="text"
            value={sellerId}
            onChange={handleSellerIdChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Auction
        </button>
      </form>
    </div>
  );
};

export default AuctionSellingPage;
