# 🚀 Portfolio Website

Portfolio website hiện đại được xây dựng bằng **Vite + React + TypeScript** với **TailwindCSS** và **Framer Motion**.

## ✨ Tính năng

- 🎨 **UI/UX hiện đại** với màu blue gradient đẹp mắt
- 📱 **Responsive Design** hoàn hảo trên mọi thiết bị  
- ⚡ **Animations mượt mà** với Framer Motion
- 🎬 **Video demos** cho các dự án (hover to play)
- 🔧 **Interactive Skills** với progress bars
- 📧 **Contact Form** hoạt động
- 🎯 **Smooth scrolling** navigation

## 🛠️ Tech Stack

- **Frontend:** Vite, React 18, TypeScript
- **Styling:** TailwindCSS
- **Animation:** Framer Motion  
- **Icons:** React Icons
- **Deploy:** Vercel/Netlify (miễn phí)

## 📂 Cấu trúc Project

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section với CTA
│   ├── About.tsx       # About section  
│   ├── Projects.tsx    # Projects với video demo
│   ├── Skills.tsx      # Skills với progress bars
│   └── Contact.tsx     # Contact form + footer
├── index.css           # TailwindCSS + custom styles
└── App.tsx            # Main app component
```

## 🚀 Cách chạy Local

```bash
# Clone repo
git clone <your-repo-url>
cd portfolio

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview
```

## 📝 Tùy chỉnh nội dung

### 1. Thông tin cá nhân
Cập nhật trong các file:
- `src/components/Hero.tsx` - Tên, position, mô tả
- `src/components/About.tsx` - Thông tin chi tiết
- `src/components/Contact.tsx` - Email, phone, địa chỉ

### 2. Dự án
Trong `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Tên dự án",
    description: "Mô tả ngắn",
    longDescription: "Mô tả chi tiết",
    videoUrl: "/videos/demo.mp4", // Đường dẫn video
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://your-demo.com",
    category: "web"
  }
]
```

### 3. Kỹ năng
Trong `src/components/Skills.tsx` cập nhật:
- `frontendSkills` - Kỹ năng frontend
- `backendSkills` - Kỹ năng backend  
- `toolsSkills` - Tools & others

### 4. Video Demos
Để thêm video demos:
1. Tạo thư mục `public/videos/`
2. Thêm file video (MP4, < 10MB)
3. Cập nhật `videoUrl` trong projects

## 🌐 Deploy miễn phí

### Option 1: Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Truy cập [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Deploy tự động! 🎉

### Option 2: Netlify  
1. Build project: `npm run build`
2. Upload thư mục `dist/` lên [netlify.com](https://netlify.com)
3. Hoặc connect GitHub repo

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages

# Thêm vào package.json:
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 🎨 Customization

### Màu sắc
Trong `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#0066CC', // Màu chính
    700: '#003399', // Màu đậm hơn
  }
}
```

### Fonts
Trong `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

## 📱 Screenshots

- **Desktop**: Hiển thị đầy đủ tất cả sections
- **Tablet**: Layout responsive tự động  
- **Mobile**: Navigation menu collapse, touch-friendly

## 💡 Tips cho HR

1. **Video Demos**: Hover vào project cards để xem video preview
2. **Interactive Elements**: Tất cả buttons và links đều có hover effects
3. **Contact Form**: Functional form với validation
4. **Smooth Navigation**: Click menu để scroll smooth tới sections
5. **Performance**: Fast loading với Vite build optimization

## 🔧 Troubleshooting

### Video không play
- Kiểm tra đường dẫn video trong `public/videos/`
- Đảm bảo format MP4 và size < 10MB
- Test trên local trước khi deploy

### Animations lag
- Giảm số lượng animations đồng thời
- Sử dụng `will-change` CSS cho performance
- Test trên thiết bị yếu hơn

### Deploy errors
- Check build locally: `npm run build`
- Verify all imports và paths
- Clear cache và rebuild

## 📞 Support

Nếu cần hỗ trợ:
- 📧 Email: your.email@gmail.com
- 💬 GitHub Issues
- 📱 Phone: +84 123 456 789

---

**Made with ❤️ using React + TypeScript**
