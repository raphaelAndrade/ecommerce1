const FilterByCategory = async (category) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
      throw response.statusText;
    } else {
      const filteredProduct = await response.json();
      return filteredProduct;
    }
  } catch (error) {
    console.log(`Error = ${error} : Failed to fetch product by category`);
    return error;
  }
};

export default FilterByCategory;