const button = document.createElement('button');

button.innerText = 'Click Me';

button.onclick = () => {
  System.import('./image_view').then(module => {
    module.default();
  });
};

document.body.appendChild(button);