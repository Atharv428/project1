const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const boy = document.getElementById('Boy').value;
    const girl = document.getElementById('Girl').value;

    const l1 = boy.length;
    const l2 = girl.length;

    const result = Math.pow(l1 + l2, 3) % 101;

    document.getElementById('result').textContent =
        `Love Percentage: ${result}%`;
});