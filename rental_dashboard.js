function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const tableBody = document.getElementById("booking-list");
    tableBody.innerHTML = "";
    bookings.forEach((booking) => {
        const row = `<tr>
            <td>${booking.bikeDetails}</td>
            <td>${booking.name}</td>
            <td>${booking.phone}</td>
            <td>${booking.method === "cash" ? "เงินสด" : "โอนเงิน"}</td>
            <td>${booking.method === "cash" ? (booking.cashAmount || "-") : "-"}</td>
            <td>${booking.timestamp}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function exportToExcel() {
    let table = document.querySelector("table");
    let tableHtml = table.outerHTML;
    let blob = new Blob([tableHtml], { type: "application/vnd.ms-excel" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bike_rental_bookings.xls";
    a.click();
}

window.onload = loadBookings;
