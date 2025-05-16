import { ref } from 'vue';

const darkMode = ref(localStorage.getItem('darkMode') === 'true');

function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    localStorage.setItem('darkMode', darkMode.value);
    applyDarkMode();
}

function applyDarkMode() {
    document.documentElement.classList.toggle('dark', darkMode.value);
}

export default () => ({
    darkMode,
    toggleDarkMode,
    applyDarkMode,
});
