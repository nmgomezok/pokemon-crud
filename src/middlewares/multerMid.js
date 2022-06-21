const path = require ("path")
const multer = require ("multer");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, "./public/img")
    },

    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-img${path.extname(file.originalname)}`
      cb(null, fileName)
    }
  })
  
const upload = multer({storage})

module.exports = upload;