document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const playButton = document.querySelector('.play-btn');
    let isPlaying = false;

    function updateProgressBar() {
        const duration = audio.duration; 
        const currentTime = audio.currentTime; 

        // Calculate the percentage of progress
        const progressPercentage = (currentTime / duration) * 100;

        // Update the progress bar width
        progress.style.width = `${progressPercentage}%`;

        // Update the time display
        const progressText = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        progressBar.querySelectorAll('span')[0].textContent = formatTime(currentTime);
        progressBar.querySelectorAll('span')[1].textContent = formatTime(duration);
    }

    // Format time from seconds to mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Toggle play/pause
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = '▶'; // Play button
            isPlaying = false;
        } else {
            audio.play();
            playButton.textContent = '⏸'; // Pause button
            isPlaying = true;
        }
    });

    // Update progress bar periodically
    audio.addEventListener('timeupdate', updateProgressBar);
});