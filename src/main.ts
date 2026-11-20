import './styles/main.css';

const app = document.querySelector<HTMLElement>('#app');

if (!app) {
  throw new Error('Application root not found');
}

const heading = document.createElement('h1');
heading.textContent = 'Characterize';

app.append(heading);
