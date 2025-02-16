// Data portfolio
const portfolioData = [
    {
        title: 'Sistem Manajemen Mahasiswa',
        description: 'Aplikasi web untuk mengelola data mahasiswa',
        image: 'https://source.unsplash.com/random/400x300/?student'
    },
    {
        title: 'Aplikasi E-Commerce',
        description: 'Platform jual beli online dengan sistem pembayaran terintegrasi',
        image: 'https://source.unsplash.com/random/400x300/?ecommerce'
    },
    {
        title: 'Sistem Inventory',
        description: 'Aplikasi tracking stok barang untuk warehouse',
        image: 'https://source.unsplash.com/random/400x300/?warehouse'
    }
];

// Menampilkan portfolio
function displayPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Menangani form kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    this.reset();
});

// Memanggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayPortfolio();
}); 