const fs = require('fs');

// Create
fs.writeFileSync('data.txt', 'Nội dung ban đầu!');
console.log('create file success:::::::::');

// Read
try {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log('read file::::::::', data);
} catch (err) {
    console.error('Lỗi khi đọc file:', err);
}

// Update
for (let i = 1; i <= 10; i++) {
  fs.appendFileSync('data.txt', `\nNội dung đã được cập nhật! ${i}\n`);
}

// Read lại sau khi cập nhật
try {
    const updatedData = fs.readFileSync('data.txt', 'utf8');
    console.log('edit::::::::', updatedData);
} catch (err) {
    console.error('Lỗi khi đọc file:', err);
}

// Delete
fs.unlinkSync('tofile.txt');
console.log('File đã được xóa thành công!');
