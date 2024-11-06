document.addEventListener('DOMContentLoaded', () => {
    const newsData = [
        { 
            title: 'Turnamen Sepak Bola Nasional Dimulai', 
            content: 'Turnamen sepak bola tingkat nasional akan dimulai minggu depan. Banyak tim besar akan berpartisipasi dalam kompetisi ini untuk merebutkan gelar juara.', 
            image: 'images/Liga_3_IDN.png' 
        },
        { 
            title: 'Pemain Baru Akademi Mencetak Gol Pertama', 
            content: 'Pemain muda yang baru bergabung, mencetak gol pertamanya dalam pertandingan uji coba minggu lalu. Dia menunjukkan potensi besar untuk masa depan akademi.', 
            image: 'images/pemainjago.jpg' 
        },
        { 
            title: 'Pelatihan Khusus untuk Posisi Kiper', 
            content: 'Akademi menawarkan pelatihan khusus bagi calon penjaga gawang. Program ini dirancang untuk meningkatkan keterampilan kiper muda agar siap bersaing di level profesional.', 
            image: 'images/kiper.jpg' 
        }
    ];

    const newsSidebar = document.getElementById('news-sidebar-list');
    newsData.forEach(news => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${news.image}" alt="Image for ${news.title}">
            <div class="news-content">
                <h4>${news.title}</h4>
                <p>${news.content}</p>
            </div>
        `;
        newsSidebar.appendChild(listItem);
    });

    // Validasi usia pada formulir pendaftaran
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
        const ageInput = document.getElementById('age');
        const age = parseInt(ageInput.value);

        // Cek apakah usia di luar batas 5–17 tahun
        if (age < 5 || age > 17) {
            alert("Usia harus antara 5 hingga 17 tahun.");
            event.preventDefault();  // Hentikan submit form jika usia tidak valid
        } else {
            // Setelah usia valid, arahkan ke halaman test.html
            window.location.href = 'test.html';
        }
    });
});
