const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Thiết lập lưu trữ file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Thư mục lưu trữ file
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Đặt tên file duy nhất
    }
});

const upload = multer({ storage });

// Tạo endpoint để upload file
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully: ' + req.file.filename);
});

// Tạo endpoint để hiển thị trang upload
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
