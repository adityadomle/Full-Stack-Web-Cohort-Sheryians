const users = [
  { id:1, name:"Alice Johnson", title:"Frontend Dev", avatar:"https://i.pravatar.cc/80?img=1" },
  { id:2, name:"Bob Smith", title:"UI/UX Designer", avatar:"https://i.pravatar.cc/80?img=2" },
  { id:3, name:"Charlie Lee", title:"Backend Engineer", avatar:"https://i.pravatar.cc/80?img=3" },
  { id:4, name:"Diana Prince", title:"Product Manager", avatar:"https://i.pravatar.cc/80?img=4" },
  { id:5, name:"Ethan Hunt", title:"QA Specialist", avatar:"https://i.pravatar.cc/80?img=5" },
  { id:6, name:"Fiona Gallagher", title:"Data Analyst", avatar:"https://i.pravatar.cc/80?img=6" },
  { id:7, name:"George Best", title:"DevOps Engineer", avatar:"https://i.pravatar.cc/80?img=7" },
  { id:8, name:"Hannah Wells", title:"Content Strategist", avatar:"https://i.pravatar.cc/80?img=8" },
  { id:9, name:"Ian Malcolm", title:"AI Researcher", avatar:"https://i.pravatar.cc/80?img=9" },
  { id:10, name:"Jasmine Lee", title:"Marketing Lead", avatar:"https://i.pravatar.cc/80?img=10" }
];
  
const container = document.querySelector('.card-container');

function renderUsers(list) {
  container.innerHTML = '';
  list.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
    
      <img class="avatar" src="${user.avatar}" alt="${user.name}" />
      <div class="name">${user.name}</div>
      <div class="title">${user.title}</div>
      <a href="#" class="btn">Message</a>
    `;
    container.appendChild(card);
  });
}

renderUsers(users);
