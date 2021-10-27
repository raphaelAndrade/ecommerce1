const AllUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw response.statusText;
    } else {
      const users = await response.json();
      return users;
    }
  } catch (error) {
    console.log(`Error = ${error} : Failed to fetch users`);
    return error;
  }
};

export default AllUsers;