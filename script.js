const hours = document.getElementById('hourId');
const mins = document.getElementById('minId');
const secs = document.getElementById('secId');
const dateEl = document.getElementById('dateId');

document.addEventListener("DOMContentLoaded", () => {
    const updateTime = () => {
        const now = new Date();

        // Time formatting
        let h = String(now.getHours()).padStart(2, '0');
        let m = String(now.getMinutes()).padStart(2, '0');
        let s = String(now.getSeconds()).padStart(2, '0');

        hours.innerHTML = h;
        mins.innerHTML = m;
        secs.innerHTML = s;

        // Date formatting: DD-MM-YYYY
        let day = String(now.getDate()).padStart(2, '0');
        let month = String(now.getMonth() + 1).padStart(2, '0');
        let year = now.getFullYear();

        dateEl.innerHTML = `${day}-${month}-${year}`;
    };

    setInterval(updateTime, 1000);
    updateTime();
});
