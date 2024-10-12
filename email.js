const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "huyhochanh02@gmail.com", // Địa chỉ email của bạn
    pass: process.env.PASS_MAIL, // Mật khẩu ứng dụng bạn đã tạo
  },
});

// Gửi email
async function main() {
  const info = await transporter.sendMail({
    from: '"huy.daoquang" <huyhochanh02@gmail.com>', // Tên và địa chỉ email người gửi
    to: "huycd02@gmail.com", // Địa chỉ người nhận
    subject: 'Chào mừng bạn đến với dịch vụ của chúng tôi!',
    html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h1 style="color: #007BFF;">Chào bạn!</h1>
            <p>Chúng tôi rất vui khi được chào đón bạn đến với dịch vụ của chúng tôi.</p>
            <p>Để bắt đầu, hãy nhấp vào nút dưới đây:</p>
            <a href="https://github.com/huydaoquang" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Bắt đầu ngay</a>
            <p>Chúc bạn một ngày tuyệt vời!</p>
        </div>
    `
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
