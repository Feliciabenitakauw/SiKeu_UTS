document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form-login');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin') {
                window.location.href = 'Admin/admin.html';
            } else if (username === 'kepsek' && password === 'kepsek') {
                window.location.href = 'Kepsek/kepsek.html';
            } else if (username === 'siswa' && password === 'siswa') {
                window.location.href = 'Siswa/siswa.html';
            } else if (username === 'yayasan' && password === 'yayasan') {
                window.location.href = 'Yayasan/yayasan.html';
            } else {
                alert('Username atau password salah!');
            }
        });
    }

    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('http')) {
                window.location.href = href;
            }
        });
    });

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    const formTransaksi = document.getElementById('form-transaksi');
    if (formTransaksi) {
        formTransaksi.addEventListener('submit', (e) => {
            e.preventDefault();

            const jenis = document.getElementById('jenis').value;
            const nominal = document.getElementById('nominal').value;
            const keterangan = document.getElementById('keterangan').value;

            alert(`Berhasil menyimpan transaksi!\nJenis: ${jenis}\nNominal: Rp ${nominal}\nKeterangan: ${keterangan || '-'}`);

            formTransaksi.reset();
        });
    }

    const forgotPasswordLink = document.querySelector('.forgot-password, #btn-forgot');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = prompt("Lupa Password?\nMasukkan NIP atau Email Anda yang terdaftar:");
            if (email && email.trim() !== "") {
                alert(`Tautan reset password telah dikirim ke: ${email}\nSilakan cek kotak masuk Anda.`);
            }
        });
    }

    const bellButtons = document.querySelectorAll('.btn-bell');
    bellButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("🔔 Tidak ada notifikasi baru hari ini.");
        });
    });

    const profileAvatars = document.querySelectorAll('.topbar-avatar, .admin-profile');
    profileAvatars.forEach(avatar => {
        avatar.addEventListener('click', (e) => {
            e.preventDefault();
            let currentRole = "User";
            if (window.location.pathname.includes('Admin')) currentRole = "Admin";
            else if (window.location.pathname.includes('Kepsek')) currentRole = "Kepala Sekolah";
            else if (window.location.pathname.includes('Siswa')) currentRole = "Siswa/Orangtua";
            else if (window.location.pathname.includes('Yayasan')) currentRole = "Ketua Yayasan";

            alert(`👤 Informasi Profil:\n\nRole Aktif: ${currentRole}\nStatus: Aktif 🟢`);
        });
    });

    const filterInputs = document.querySelectorAll('.filter-select, .input-control[type="date"]');
    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            document.body.style.cursor = 'wait';
            setTimeout(() => {
                document.body.style.cursor = 'default';
                alert("✅ Data berhasil difilter berdasarkan pilihan Anda.");
            }, 600);
        });
    });

    const actionButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    actionButtons.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if (text.includes('ekspor') || text.includes('excel') || text.includes('cetak') || text.includes('pdf') || text.includes('unduh')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`⏳ Mengunduh dokumen...\n(Simulasi aksi: ${btn.textContent.trim()})`);
            });
        }
    });

    const paginationItems = document.querySelectorAll('.page-item');
    paginationItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            paginationItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const pageNum = item.textContent.trim();
            alert(`📄 Menampilkan data untuk halaman [${pageNum}]`);
        });
    });

    const cancelButtons = document.querySelectorAll('.btn-cancel');
    cancelButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const form = btn.closest('form');
            if (form) {
                form.reset();
                alert("Input form telah dibatalkan/dibersihkan.");
            } else {
                window.history.back();
            }
        });
    });

    document.addEventListener('click', (e) => {
        const dummyTarget = e.target.closest('a[href="#"], .btn-dummy');

        if (dummyTarget) {
            e.preventDefault();
            const textContent = dummyTarget.textContent.trim() || dummyTarget.getAttribute('title') || 'Ini';
            if (textContent) {
                alert(`🛠️ Fitur [${textContent}] masih dalam tahap pengembangan.`);
            }
        }
    });

});
