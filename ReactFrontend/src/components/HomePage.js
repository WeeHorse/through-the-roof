import AuctionList from "./AuctionList";
const HomePage = () => {
  return (
    <div className="active-auctions">
      <h2>Active auctions</h2>
      <AuctionList />
    </div>
  );
};

export default HomePage;
