// import jwt from 'jsonwebtoken'
// import bcrypt from "bcrypt";
// import UserModel from '../models/User.js'


// export const register = async (req, res) => {
//   try {
//     const password = req.body.password
//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const doc = new UserModel({
//       email: req.body.email,
//       passwordHash: hash,
//       fullName: req.body.fullName,
//       avatarUrl: req.body.avatarUrl,
//     })

//     const user = await doc.save()

//     const token = jwt.sign({
//       _id: user._id,
//     }, 
//       'secret',
//       {
//         expiresIn: '30d'
//       })

//     const {passwordHash, ...userData} = user._doc;

//     res.json({
//       ...userData,
//       token,
//     })

//   } catch (error) {
//       console.log(error)
//       res.status(500).json({
//         message: 'не удалось зарегестрироваться'
//       })
//   }
// }

// export const login = async (req, res) => {
//   try {
//     const user = await UserModel.findOne({email: req.body.email})

//     if(!user) {
//       return req.status(404).json({
//         message: 'неверный логин',
//       })
//     }

//     const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

//     if(!isValidPass) {
//       return req.status(404).json({
//         message: 'неверный логин или пароль'
//       })
//     }

//     const token = jwt.sign({
//       _id: user._id,
//       }, 
//       'secret',
//       {
//         expiresIn: '30d'
//       }
//     )

//     const {passwordHash, ...userData} = user._doc;

//     res.json({
//       ...userData,
//       token,
//     })

//   } catch (error) {
//     console.log(error)
//       res.status(500).json({
//         message: 'не удалось авторизоваться'
//       })
//   }
// }

// export const getMe = async (req, res)=> {
//   try {
//     const userOne = await UserModel.findOnById(req.userId)

//     if(!userOne)  {
//       return res.status(404).json({
//         message: 'пользователь не найден'
//       })
//     } 

//     const {passwordHash, ...userData} = user._doc;

//     res.json(userData)
//   } catch (error) {
//   }
// }