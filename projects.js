projects = [
    {
        title: 'HADES',
        link: 'https://github.com/Gloobinours/HADES'
    },
    {
        title: 'Stock Prediction AI',
        link: 'https://github.com/jhailos/stock-prediction'
    },
    {
        title: 'Maze AI',
        link: 'https://github.com/Gloobinours/maze-ai'
    },
    {
        title: 'Tetris Game',
        link: 'https://gloobinours.github.io/Tetris/Front/'
    }
]

for (let i = 0; i < projects.length; i++) {
    let node = document.createElement('li');

    let a = document.createElement('a');
    a.textContent = projects[i].title;
    a.href = projects[i].link;
    node.appendChild(a);

    document.getElementById('project-list').appendChild(node);
}