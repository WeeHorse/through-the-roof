import { useState } from "react";

const AboutPage = () => {


  const [moreInfoVisible, showMoreInfo] = useState(false)

  const toggleMoreInfo = () => {
    showMoreInfo(!moreInfoVisible)
  }

  let moreInfo = ''
  if(moreInfoVisible){
    moreInfo = 'There is more than meets the eye'
  }

  return (
    <div>
      <h2>About our auctions</h2>
      <p>The first one to pub a bid, through the roof, on an auction, wins the auction. As simple as that.</p>
      <button id="more-info-button" onClick={toggleMoreInfo}
      >
        More info
      </button>
      <p id="more-info-element">{moreInfo}</p>
    </div>
  );
};

export default AboutPage;
