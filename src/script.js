document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row, index) => {
        row.classList.add("table-row", `delay-${index + 1}`);
    });
    });

    function toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('hidden');
    }

    function highlightMenu(menuItemId) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => item.classList.remove('bg-slate-700', 'text-white'));

        const selectedItem = document.getElementById(menuItemId);
        selectedItem.classList.add('bg-slate-700', 'text-white');

    }

    document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector("table");

    // Tambahkan kelas 'active' setelah halaman dimuat
    setTimeout(() => {
        table.classList.add("active");
    }, 120); // Beri sedikit jeda untuk efek yang lebih halus
    });

    // src/script.js

// Contoh fungsi untuk mengupdate data absensi
function updateAbsensi(today, previous) {
    document.getElementById('absensiToday').innerText = today;
    document.getElementById('absensiPrevious').innerText = previous;
}

// Panggil fungsi dengan data dummy
updateAbsensi(14, 8);
