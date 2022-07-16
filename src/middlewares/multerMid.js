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
  
const upload = multer({storage,

  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png') {
      file.error = "type";
      req.file = file;
      return cb(null, false, new Error ("Wrong mimeType"))
    }
    return cb (null, true);
  }
})

module.exports = upload;