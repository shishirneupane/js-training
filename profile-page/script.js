const skills = {
  html: 'HTML',
  css: 'CSS',
  js: 'Javascript',
  ts: 'Typescript',
  react: 'React',
};

const contactMe = {
  name: 'Name',
  message: 'Message',
};

function submitForm() {
  console.log('form submitted');
}

const root = document.getElementById('main');
let ul = document.createElement('ul');

function makeNewElement(tag, content) {
  const element = document.createElement(tag);
  if (tag === 'img') {
    element.src = 'https://avatars.githubusercontent.com/u/58262449?v=4';
    element.setAttribute('height', '250px');
    element.setAttribute('width', '250px');
    element.style.borderRadius = '50%';
    element.style.border = '1px solid #000';
    root.appendChild(element);
    return;
  }

  if (tag === 'li') {
    let liText = document.createTextNode(content);
    element.appendChild(liText);
    ul.appendChild(element);
    root.appendChild(ul);
    return;
  }

  if (tag === 'input') {
    element.style.margin = '0 0 10px 10px';
  }

  if (tag === 'button') {
    element.addEventListener('click', submitForm);
  }

  const element_content = document.createTextNode(content);
  element.appendChild(element_content);
  root.appendChild(element);
}

makeNewElement('img');
makeNewElement('h1', 'Shishir Neupane');
makeNewElement('h2', 'Web Developer');
makeNewElement('h3', 'Skills');

for (let index = 0; index < Object.keys(skills).length; index++) {
  makeNewElement('li', Object.values(skills)[index]);
}

makeNewElement('hr', '');

makeNewElement('h2', 'Contact Me');

for (let index = 0; index < Object.keys(contactMe).length; index++) {
  makeNewElement('label', Object.values(contactMe)[index]);
  makeNewElement('input', '');
  makeNewElement('br', '');
}

makeNewElement('button', 'Submit');
