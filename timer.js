let intervalId = null;
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const inputs = Array.from(document.querySelectorAll('.input-group input'));

// 타이머 시작/일시정지 기능
startButton.addEventListener('click', () => {
    if (startButton.textContent === 'START') {
        let [hours, minutes, seconds] = inputs.map(input => Number(input.value));
        let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

        startButton.textContent = 'PAUSE';

        intervalId = setInterval(() => {
            totalTimeInSeconds--;

            const displayHours = Math.floor(totalTimeInSeconds / 3600);
            const displayMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
            const displaySeconds = totalTimeInSeconds % 60;

            inputs[0].value = String(displayHours).padStart(2, '0');
            inputs[1].value = String(displayMinutes).padStart(2, '0');
            inputs[2].value = String(displaySeconds).padStart(2, '0');

            if (totalTimeInSeconds <= 0) {
                clearInterval(intervalId);
                alert('Timer Finished!');
                startButton.textContent ='START';
            }
        }, 1000);

    } else if (startButton.textContent === 'PAUSE') {
        clearInterval(intervalId);
        startButton.textContent ='START';
    }
});

// RESET 버튼 기능
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.textContent ='START';
    inputs.forEach(input => input.value='00');
});
