export const addCartData = async (data) => {
  const response = await fetch(
    "https://react-http-1022b-default-rtdb.firebaseio.com/cart.json",
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add the items.");
  }

  return response.json();
};

export const getCartData = async () => {
  const response = await fetch(
    "https://react-http-1022b-default-rtdb.firebaseio.com/cart.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch the items.");
  }
  return response.json();
};
