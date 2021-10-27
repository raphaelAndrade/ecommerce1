const AllCategories = async () => {
    try {
        const categoryResponse = await fetch('https://fakestoreapi.com/products/categories')
        if (!categoryResponse.ok) {
            throw categoryResponse.statusText;
        } else {
            const categoryList = await categoryResponse.json();
            return categoryList;
        }
    } catch (error) {
        console.log(`Error = ${error} : Failed to fetch categoryList`);
        return error;
    }
};

export default AllCategories;