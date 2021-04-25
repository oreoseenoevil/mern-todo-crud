const User = require('../models/User')

// add User
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}
