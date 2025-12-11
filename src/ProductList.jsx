import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // 🚨 IMPORT useSelector
import { addItem } from "./CartSlice";
import "./ProductList.css";
import CartItem from "./CartItem";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.itemCount);

  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          id: 101,
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: 15.0,
        },
        {
          id: 102,
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: 12.0,
        },
        {
          id: 103,
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: 18.0,
        },
        {
          id: 104,
          name: "Boston Fern",
          image:
            "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: 20.0,
        },
        {
          id: 105,
          name: "Rubber Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: 17.0,
        },
        {
          id: 106,
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies the air and has healing properties for skin.",
          cost: 14.0,
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          id: 201,
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: 20.0,
        },
        {
          id: 202,
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: 18.0,
        },
        {
          id: 203,
          name: "Rosemary",
          image:
            "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating scent, often used in cooking.",
          cost: 15.0,
        },
        {
          id: 204,
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: 12.0,
        },
        {
          id: 205,
          name: "Lemon Balm",
          image:
            "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Citrusy scent, relieves stress and promotes sleep.",
          cost: 14.0,
        },
        {
          id: 206,
          name: "Hyacinth",
          image:
            "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Beautiful flowering plant known for its fragrant.",
          cost: 22.0,
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          id: 301,
          name: "Oregano",
          image:
            "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description: "Contains compounds that can deter certain insects.",
          cost: 10.0,
        },
        {
          id: 302,
          name: "Marigold",
          image:
            "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          description: "Natural insect repellent, adds color.",
          cost: 8.0,
        },
        {
          id: 303,
          name: "Geraniums",
          image:
            "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
          description: "Known for their insect-repelling properties.",
          cost: 20.0,
        },
        {
          id: 304,
          name: "Basil",
          image:
            "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
          description: "Repels flies and mosquitoes, also used in cooking.",
          cost: 9.0,
        },
        {
          id: 305,
          name: "Catnip",
          image:
            "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
          description: "Repels mosquitoes and attracts cats.",
          cost: 13.0,
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          id: 401,
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Soothing gel used for skin ailments.",
          cost: 14.0,
        },
        {
          id: 402,
          name: "Echinacea",
          image:
            "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          description: "Boosts immune system, helps fight colds.",
          cost: 16.0,
        },
        {
          id: 403,
          name: "Peppermint",
          image:
            "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description: "Relieves digestive issues and headaches.",
          cost: 13.0,
        },
        {
          id: 404,
          name: "Chamomile",
          image:
            "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description: "Soothes anxiety and promotes sleep.",
          cost: 15.0,
        },
        {
          id: 405,
          name: "Calendula",
          image:
            "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
          description: "Heals wounds and soothes skin irritations.",
          cost: 12.0,
        },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          id: 501,
          name: "ZZ Plant",
          image:
            "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Thrives in low light and requires minimal watering.",
          cost: 25.0,
        },
        {
          id: 502,
          name: "Pothos",
          image:
            "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Tolerates neglect and can grow in various conditions.",
          cost: 10.0,
        },
        {
          id: 503,
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description:
            "Needs infrequent watering and is resilient to most pests.",
          cost: 15.0,
        },
        {
          id: 504,
          name: "Cast Iron Plant",
          image:
            "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          description: "Hardy plant that tolerates low light and neglect.",
          cost: 20.0,
        },
        {
          id: 505,
          name: "Succulents",
          image:
            "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          description: "Drought-tolerant plants with unique shapes and colors.",
          cost: 18.0,
        },
        {
          id: 506,
          name: "Aglaonema",
          image:
            "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          description: "Requires minimal care and adds color to indoor spaces.",
          cost: 22.0,
        },
      ],
    },
  ];

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const badgeStyle = {
    position: 'absolute',
    top: '80%',
    left: '50%',
    // Added a small pixel offset to correct visual misalignment
    transform: 'translate(calc(-50% + 1px), calc(-50% + 2px))', 
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '24px',
    fontWeight: '900',
};

  const cartLinkStyle = {
    position: "relative", // Set parent to relative for absolute positioning of badge
    display: "inline-block",
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));

    setTimeout(() => {
      setAddedToCart((prevState) => ({
        ...prevState,
        [product.name]: false,
      }));
    }, 1500);
  };

  return (
    <div>
      {/* Navbar container */}
      <div className="navbar" style={styleObj}>
        {/* ... (Brand Logo/Name) ... */}
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={styleObjUl}>
          <div>
            {" "}
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants
            </a>
          </div>

          {/* 🚨 MODIFIED: Cart Link to properly apply relative positioning to the h1 container */}
          <div>
            <a
              href="#"
              onClick={(e) => handleCartClick(e)}
              style={styleA} // Keep styleA for the link appearance
            >
              {/* 🚨 ADDED: Inline style to h1 to make it the positioning context for the badge */}
              <h1
                className="cart"
                style={{ position: "relative", display: "inline-block" }} // Added position: relative and display: inline-block
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>

                {/* 🚨 Cart Badge with item count */}
                {itemCount > 0 && <span style={badgeStyle}>{itemCount}</span>}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area (Product Grid or Cart) */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">
                      {plant.description}
                    </div>
                    <div className="product-cost">
                      ${plant.cost ? plant.cost.toFixed(2) : plant.cost}
                    </div>

                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? "✅ Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
