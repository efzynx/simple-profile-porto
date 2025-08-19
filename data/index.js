import { Code, Server, Brain } from 'lucide-react';

export const portfolioData = {
  name: "Ahmad Fauzan Adiman",
  title: "Junior Web Developer | Mahasiswa Teknik Informatika",
  location: "Situbondo, Indonesia",
  email: "me@efzyn.my.id",
  phone: "+62 8177-5442-315",
  github: "https://github.com/efzynx",
  linkedin: "https://linkedin.com/in/efzyn",
  cvPath: "/CV_Ahmad_Fauzan_Adiman.pdf", 
  
  about: "Saya adalah mahasiswa Teknik Informatika di Universitas Nurul Jadid yang bersemangat dalam membangun aplikasi web modern. Dengan keahlian utama di JavaScript (React, Next.js) dan minat pada Machine Learning, saya menggabungkan fondasi akademis dengan proyek-proyek praktis untuk menciptakan solusi digital yang efisien dan inovatif.",
  
  navLinks: [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ],

  skills: [
    { icon: <Code size={24} />, title: "Frontend", description: "React, Next.js, Vue.js, Javascript, Tailwind CSS" },
    { icon: <Server size={24} />, title: "Backend", description: "Node.js, PostgreSQL, MongoDB, Python" },
    { icon: <Brain size={24} />, title: "Lainnya", description: "Docker, CI/CD, PostgreSQL, Machine Learning" }
  ],

  projects: [
    { 
      title: "RekoMind", 
      description: "RekoMind merupakan sebuah project berbasis Machine Learning untuk bidang pendidikan.", 
      link: "https://github.com/efzynx/RekoMind",
      image: "https://raw.githubusercontent.com/efzynx/RekoMind/refs/heads/main/public/assets/raw_logo.png",
      tags: ["Machine Learning", "Python", "Flask"]
    },
    { 
      title: "Cek Resi App", 
      description: "Project berbasis pada Android pertama saya yang berfungsi untuk tracking paket dengan membaca kode resi pengiriman.", 
      link: "https://github.com/efzynx/cek-resi-app",
      image: "https://raw.githubusercontent.com/efzynx/cek-resi-app/refs/heads/master/screenshots/raw_logo.png",
      tags: ["Android", "Java"]
    },
    { 
      title: "Engine Calc ID", 
      description: "Web app untuk membantu mekanik atau otomotif antusias menghitung rumus pada mesin", 
      link: "https://github.com/efzynx/Engine-Calc-ID",
      image: "https://raw.githubusercontent.com/efzynx/Engine-Calc-ID/refs/heads/main/public/icons/android-chrome-512x512.png",
      tags: ["TypeScript", "Node.js"]
    },
    { 
      title: "Guess Age", 
      description: "Project Computer Vision dengan menebak umur orang berdasarkan wajah.", 
      link: "https://github.com/efzynx/guess-age",
      image: "https://raw.githubusercontent.com/efzynx/guess-age/refs/heads/main/src/img/raw_logo.png",
      tags: ["Computer Vision", "Python", "OpenCV"]
    },
    { 
      title: "Swapi", 
      description: "Simple memory swap manager for linux using CLI.", 
      link: "https://github.com/efzynx/swapi",
      image: "https://blog.nashtechglobal.com/wp-content/uploads/2024/01/swapdiagram-1-1024x536.jpg",
      tags: ["Python", "system"]
    },
    { 
      title: "Situistik", 
      description: "Situistik 🕵️Alat diagnostik web sederhana untuk memeriksa status, catatan DNS, dan informasi Whois dari sebuah domain.", 
      link: "https://github.com/efzynx/situistik",
      image: "https://i.ibb.co.com/PZJFz45G/screenshot-20082025-011226.png",
      tags: ["JavaScript", "Python", "CSS", "HTML"]
    },
  ]
};
