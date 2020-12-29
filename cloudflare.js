const app = document.getElementById('root')
console.log(app)

const links = JSON.stringify([{
    "name": "Github", "url": "https://github.com/alpizano"},
  { "name": "LinkedIn", "url": "https://www.linkedin.com/in/alpizano/" },
  { "name": "LeetCode", "url": "https://leetcode.com/" }
  ]);

  console.log(JSON.parse(links))

  const data = JSON.parse(links);

data.forEach((link) => {
    console.log(link.name + link.url);
    const element = document.createElement('a')
    element.innerHTML = link.name;
    element.setAttribute('href', link.url)
    app.appendChild(element)
});

