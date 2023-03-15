const AuctionComponent = ({ auction }) => {
  //console.log(auction);

  let url = auction.images;
  return (
    <div className="card">
      <div>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{auction.title}</h5>
          <p className="card-text">{auction.description}</p>
        </div>
      </div>

      <div className="card-flex">
        <div className="card-body">
          <a href="#" className="card-link">
            Put in a bid!
          </a>
          <a href="#" className="card-link">
            Seller account
          </a>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Start Price: {auction.startPrice}</li>
          <li className="list-group-item">End time: {auction.end}</li>
          <li className="list-group-item">Seller: {auction.seller.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default AuctionComponent;

/*  <div className="card" style={{ width: "30em" }}>
      <div className="card-flex">
        <div className="card-body">
          <h5 className="card-title">{auction.title}</h5>
          <p className="card-text">{auction.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Start Price: {auction.startPrice}</li>
          <li className="list-group-item">End time: {auction.end}</li>
          <li className="list-group-item">
            Seller name: {auction.seller.name}
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Put in a bid!
          </a>
          <a href="#" className="card-link">
            Seller account
          </a>
        </div>
      </div>
      <img src={url} className="card-img-top" alt="..." />
    </div>
  );
};*/
