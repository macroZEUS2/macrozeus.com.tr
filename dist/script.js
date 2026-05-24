const projectList = document.getElementById("projectList");

const projects = [
    {
        title: "Dijital Saat",
        desc: "Canlı saat uygulaması",
        path: "projects/dijital-saat/index.html",
        icon: "bx-time"
    },
    {
        title: "Döviz Çevirici",
        desc: "Döviz çevirici",
        path: "projects/doviz-cevirici/doviz-cevirici.html",
        icon: "bx-transfer"
    },
    {
        title: "QR Kod Oluşturucu",
        desc: "QR generator",
        path: "projects/qr-kod-olusturucu/index.html",
        icon: "bx-qr"
    },
    {
        title: "Renk Oluşturucu",
        desc: "Renk üretici",
        path: "projects/renk-olusturucu/index.html",
        icon: "bx-palette"
    },
    {
        title: "Şifre Oluşturucu",
        desc: "Password generator",
        path: "projects/sifre-olusturucu/index.html",
        icon: "bx-lock"
    }
];

projects.forEach(p => {
    const a = document.createElement("a");
    a.className = "card";

    // 🔥 EN GARANTİLİ FIX
    a.href = "./" + p.path;

    a.innerHTML = `
        <i class='bx ${p.icon}'></i>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
    `;

    projectList.appendChild(a);
});