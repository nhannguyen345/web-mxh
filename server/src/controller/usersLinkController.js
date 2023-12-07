const UsersLink = require("../model/UsersLink");

const getAllUsersLink = async (req, res) => {
  try {
    const allUsersLink = await UsersLink.find();
    return res.status(200).json({ allUsersLink: allUsersLink });
  } catch (err) {
    res.status(500).json({ message: "Đã có lỗi xảy ra!", err: err.message });
  }
};

module.exports = getAllUsersLink;
