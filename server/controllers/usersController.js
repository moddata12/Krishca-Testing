const UserModel = require("../models/Users.js");

//Get Users - api/v1/users
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

//updateUser - api/v1/users/:id
const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, role, service } = req.body;
      const user = await UserModel.findByIdAndUpdate(
        id,
        { name, email, role, service },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating user" });
    }
  };

  //deleteUser - api/v1/users/:id
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting user" });
    }
  };  


module.exports = {
     
    getUsers, 
    updateUser, 
    deleteUser,
};
