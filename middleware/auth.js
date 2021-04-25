const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const JWT_SECRET = process.env.JWT_SECRET

exports.auth = async (req, res, next) => {
  const token = req.header('x-auth-token')

  if (!token) {
    return res.status(401).json({ msg: 'No token, access denied'})
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    req.user = decoded
    next()
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid'})
  }
}
