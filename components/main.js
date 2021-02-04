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
  { id: 14, name: "Accessories", parent: 10 }
]

function Tree(data) {
  // pegar elemento que vai ser populado a árvore de links
  var tree = document.querySelector('#tree')

  // criar o primeiro ul.
  var menuPrincipal = document.createElement('ul')



  // Verifica quais não tem pai, então são os "first level"
  var firstLevels = data.filter(item => !item.parent)
  /**
   * console.log(firstLevels) = 
   * { filho: 8, name: "Electronics", pai: null },
   * { filho: 18, name: "Camping", pai: null },
   */


  firstLevels.forEach(item => {
    // PARA CADA LEVEL, VOU TER QUE CRIAR UM LI;
    var li = document.createElement('li')

    // ADICIONAR O TEXTO DE CADA FIRST LEVEL NA LI;
    li.innerHTML = item.name

    // PROCURAREMOS OS FILHOS DOS ELEMENTOS PAIS.
    var filho = data.filter(child => child.parent === item.id)
    filho.forEach(subfilho => {
      var subMenu = document.createElement('ul')
      var li2 = document.createElement('li')
      li2.innerHTML = subfilho.name;
      subMenu.append(li2)
      li.append(subMenu)
    })


    // ADICIONA AO MEU PRINCIPAL O LI CRIADO.
    menuPrincipal.append(li)
  })




  //add algum texto a li



  // Inserir a ul pricipal na tree
  tree.append(menuPrincipal)
}

Tree(menu)