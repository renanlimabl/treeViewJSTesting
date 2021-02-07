const menu = [
  { id: 1, name: "Desktops", parent: 3 },
  { id: 3, name: "Computers", parent: 8 },
  { id: 4, name: "Smartphones", parent: 6 },
  { id: 6, name: "Portables", parent: 3 },
  { id: 7, name: "Tablets", parent: 6 },
  { id: 8, name: "Electronics", parent: null },
  { id: 18, name: "Camping", parent: null },
  { id: 10, name: "TV", parent: 8 },
  { id: 20, name: '11 pol', parent: 7 },
  { id: 13, name: "Remotes", parent: 14 },
  { id: 14, name: "Accessories", parent: 10 },
  { id: 30, name: 'Mouse', parent: 18}
]

function Tree(data) {
  // pegar elemento que vai ser populado a árvore de links
  var tree = document.querySelector('#tree')

  // criar o primeiro ul.
  var menuPrincipal = document.createElement('ul')



  // Verifica quais não tem parent, então são os "first level"
  var firstLevels = data.filter(item => !item.parent)
  /**
   * console.log(firstLevels) = 
   * { id: 8, name: "Electronics", parent: null },
   * { id: 18, name: "Camping", parent: null },
   */

  var gerFirstLis = firstLevels.map(item => {
    var li = document.createElement('li')
    // ADICIONAR O TEXTO DE CADA FIRST LEVEL NA LI;
    li.innerHTML = item.name

    // PROCURAREMOS OS FILHOS DOS ELEMENTOS parent.
    var filho = data.filter(child => child.parent === item.id)

    if (filho.length > 0) {
      li.addEventListener('click', function (event) {
        event.stopPropagation()
        event.target.classList.toggle('open')
      })
      li.classList.add('has-children')
      var subMenu = document.createElement('ul')
      filho
        .map(buildTree)
        .forEach(li => subMenu.append(li))
      li.append(subMenu)
    }

    return li
  })
  
  gerFirstLis.forEach(li => menuPrincipal.append(li))

  function buildTree(item) {
    // PARA CADA LEVEL, VOU TER QUE CRIAR UM LI;
    var li = document.createElement('li')
    // ADICIONAR O TEXTO DE CADA FIRST LEVEL NA LI;
    li.innerHTML = item.name

    // PROCURAREMOS OS FILHOS DOS ELEMENTOS parent.
    var filho = data.filter(child => child.parent === item.id)

    if (filho.length > 0) {
      li.addEventListener('click', function (event) {
        event.stopPropagation()
        event.target.classList.toggle('open')
      })
      li.classList.add('has-children')
      var subMenu = document.createElement('ul')
      filho
        .map(item => {
          var li = document.createElement('li')
          // ADICIONAR O TEXTO DE CADA FIRST LEVEL NA LI;
          li.innerHTML = item.name
      
          // PROCURAREMOS OS FILHOS DOS ELEMENTOS parent.
          var filho = data.filter(child => child.parent === item.id)
      
          if (filho.length > 0) {
            li.addEventListener('click', function (event) {
              event.stopPropagation()
              event.target.classList.toggle('open')
            })
            li.classList.add('has-children')
            var subMenu = document.createElement('ul')
            filho
              .map(buildTree)
              .forEach(li => subMenu.append(li))
            li.append(subMenu)
          }
      
          return li
        })
        .forEach(li => subMenu.append(li))
      li.append(subMenu)
    }

    return li
  }





  //add algum texto a li



  // Inserir a ul pricipal na tree
  tree.append(menuPrincipal)
}

Tree(menu)