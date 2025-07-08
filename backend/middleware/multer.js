import multer from "multer";
//multer = translator -> parse special HTTP request Express cant handle when upload file
//(multipart/form-data), pass req to controller with req.file obj contain path
//save the uploaded file directly to disk on my server not memory
const storage = multer.diskStorage({
  //call function for every file uploaded
  //when req arrive at productRouter and it calls upload req will be pass here for use
  filename: function (req, file, callback) {
    callback(null, file.originalname); //use original file name from user computer
  },
});

const upload = multer({ storage });

export default upload;
