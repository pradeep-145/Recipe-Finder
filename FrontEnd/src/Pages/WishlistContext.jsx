import React, { createContext,useState } from 'react';

// Create the Wishlist Context
export const WishlistContext = createContext();

// Wishlist provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (recipe) => {
    if (wishlist.includes(recipe)) {
      setWishlist(wishlist.filter(item => item !== recipe)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, recipe]); // Add to wishlist
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
