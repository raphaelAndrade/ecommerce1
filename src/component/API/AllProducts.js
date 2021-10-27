const AllProducts = async () => {
  try {
    const productResponse = await fetch("https://fakestoreapi.com/products");
    if (!productResponse.ok) {
      throw productResponse.statusText;
    } else {
      const productList = await productResponse.json();
      return productList;
    }
  } catch (error) {
    console.log(`Error = ${error} : Failed to fetch productList`);
    return error;
  }
};
export default AllProducts;