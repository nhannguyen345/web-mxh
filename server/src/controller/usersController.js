const Users = require("../model/Users");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    return res.status(200).json({ allUsers: allUsers });
  } catch (err) {
    res.status(500).json({ message: "Đã có lỗi xảy ra!", err: err.message });
  }
};

const Login = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await Users.findOne({ UserName: username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy người dùng này! Vui lòng nhập lại!" });
    }
    return res
      .status(200)
      .json({ message: "Đăng nhập thành công", user: user });
  } catch (err) {
    res.status(500).json({ message: "Đã có lỗi xảy ra!", err: err.message });
  }
};

module.exports = { getAllUsers, Login };
