// Dados do back
let usuario = {
   sobre: {
      nome: 'Lucas Selao Zluhan',
      endereço: 'Rua Acacias, 71 - Sao Leopoldo - RS',
      email: 'lszluhan93@gmail.com',
      telefone: '+55-51-9-9871-6255',
      descricao: 'Conhecimento move o mundo e eu junto dele. Sou viciado em balinha fini e growdever!',
      redesSociais: ['https://linkedin.com/in/lszluhan', 'https://github.com/lucaszluhan', 'https://instagram.com/lszluhan/', 'https://api.whatsapp.com/send?phone=5551998716255'],
   },
   conhecimentos: ['HTML', 'CSS', 'javaScript', 'Responsive Design', 'Bootstrap', 'API', 'node.JS'],
   objetivo: {
      pessoais: 'Ser independente e feliz. Trabalhar com o que amo, viajar o mundo, fazer muitas amizades e viver ao invés de sonhar.',
      profissionais:
         'Iniciar a carreia de TI como desenvolvedor, onde eu possa construir uma carreira de sucesso, receber um salário acima da média, por em prática meus conhecimentos, aprender novas habilidades e criar ferramentas e aplicações que mudem a vida das pessoas.',
   },
};

// Variaveis
const h1 = document.querySelectorAll('h1');
const p = document.querySelectorAll('p');

// Utilitarios
createOrangeSpan = () => {
   let orangeSpan = document.createElement('span');
   orangeSpan.setAttribute('class', 'orange');
   return orangeSpan;
};

// Nome
addNome = () => {
   let nomeCompleto = usuario.sobre.nome.split(' ');
   h1[0].innerHTML = nomeCompleto[0];
   let orangeSpan = createOrangeSpan();
   let sobrenome = nomeCompleto.splice(1).join(' ');
   orangeSpan.innerHTML = ` ${sobrenome}`;
   h1[0].appendChild(orangeSpan);
};
addNome();

// Endereço e contato
addEndereço = () => {
   p[0].innerHTML = `${usuario.sobre.endereço} `;
   let orangeSpan = createOrangeSpan();
   orangeSpan.innerHTML = usuario.sobre.email;
   p[0].appendChild(orangeSpan);
   p[0].innerHTML += ` ${usuario.sobre.telefone}`;
};
addEndereço();

// Descricao
addDescricao = () => {
   p[1].innerText = `${usuario.sobre.descricao}`;
};
addDescricao();

// Redes Sociais
addLinksRedesSociais = () => {
   for (let rede of usuario.sobre.redesSociais) {
      let aTag = document.createElement('a');
      aTag.setAttribute('href', rede);
      aTag.setAttribute('target', '_blank');
      let img = document.createElement('img');

      if (rede.includes('linkedin')) {
         aTag.setAttribute('alt', 'link para linkedin');
         img.setAttribute('src', './img/linkedin.png');
      } else if (rede.includes('github')) {
         aTag.setAttribute('alt', 'link para github');
         img.setAttribute('src', './img/github.png');
      } else if (rede.includes('instagram')) {
         aTag.setAttribute('alt', 'link para instagram');
         img.setAttribute('src', './img/instagram.png');
      } else if (rede.includes('whatsapp')) {
         aTag.setAttribute('alt', 'link para whatsapp');
         img.setAttribute('src', './img/whatsapp.png');
      }
      aTag.appendChild(img);
      document.querySelector('section').appendChild(aTag);
   }
};
addLinksRedesSociais();

// Conhecimentos
addListaSkills = () => {
   let skillsList = document.querySelector('#skillsList');
   for (let skills of usuario.conhecimentos) {
      let skill = document.createElement('li');
      skill.innerHTML = skills;
      skillsList.appendChild(skill);
   }
};
addListaSkills();

// Objetivos
addObjetivos = () => {
   p[2].innerText = usuario.objetivo.pessoais;
   p[3].innerText = usuario.objetivo.profissionais;
};
addObjetivos();

// Navegacao
let button = document.querySelectorAll('button');
button[0].setAttribute('onclick', 'clickSobre()');
button[1].setAttribute('onclick', 'clickConhecimentos()');
button[2].setAttribute('onclick', 'clickObjetivos()');

clickSobre = () => {
   button[0].style.color = '#fefae0';
   button[1].style.color = '#dda15e';
   button[2].style.color = '#dda15e';
   document.querySelector('#sobre').style.display = 'block';
   document.querySelector('#conhecimentos').style.display = 'none';
   document.querySelector('#objetivo').style.display = 'none';
};
clickConhecimentos = () => {
   button[0].style.color = '#dda15e';
   button[1].style.color = '#fefae0';
   button[2].style.color = '#dda15e';
   document.querySelector('#sobre').style.display = 'none';
   document.querySelector('#conhecimentos').style.display = 'block';
   document.querySelector('#objetivo').style.display = 'none';
};
clickObjetivos = () => {
   button[0].style.color = '#dda15e';
   button[1].style.color = '#dda15e';
   button[2].style.color = '#fefae0';
   document.querySelector('#sobre').style.display = 'none';
   document.querySelector('#conhecimentos').style.display = 'none';
   document.querySelector('#objetivo').style.display = 'block';
};
