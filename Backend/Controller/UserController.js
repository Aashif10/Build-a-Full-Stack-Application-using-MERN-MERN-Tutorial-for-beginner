const User = require("../Model/Schema");
//  ! Create User
exports.createUser = async (req, res) => {
  const { name, email, phone} = req.body;
  try {
    const dataAdded = await User.create({
      name,
      email,
      phone
    });
    return res.status(201).json({ messge: "Successfully userAdded", dataAdded });
  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
};
//! Fetch All Data
exports.fetchAll = async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(201).json(showAll);
    console.log(showAll);
  } catch (error) {
    res.status(404).json({ message: error.mesage });
  }
};
//!Find Single User
exports.SingleUser = async (req, res) => {
  let { id } = req.params;
  try {
    const oneData = await User.findById(id);
    if (!oneData) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(oneData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// !  Delete Data
exports.DeleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    let Delete = await User.findByIdAndDelete({ _id: id });
    if (!Delete) {
      res.status(201).json("Not found data!");
    }
    res.status(200).json(Delete);
  } catch (error) {
    res.status(404).json("404 Error");
  }
};
// ! Update Data
exports.UpdateData = async (req, res) => {
  const id = req.params.id;
  try {
    let update = await User.findByIdAndUpdate(id,req.body,{new:true}   
    );
    if (!update) {
      res.status(404).json("Data not found");
    }
    return res.status(200).json(update)
  } catch (error) {
    res.status(404).json({ error: error.mesage });
  }
};
