window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

// create button to EditText in table (KS Feb.5)
function createBtnNode(btnTxt, e, l) {
  let btnNode = document.createElement("button");
  let btnNodeText = createTxtNode(btnTxt);
  btnNode.appendChild(btnNodeText);
  btnNode.addEventListener(e, l);
  return btnNode;
}

// TO DO STILL: See git stashed version of out-of-date main 
function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    // add second col to table for edit field button (KS Feb. 5)
    let col2 = createTDNode(createBtnNode("Edit text", "click", function() {
      edit(col1);
    }));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

// create function to edit the text (KS Feb. 5)
function edit(node) {
  let newNode = document.createElement("input");
  newNode.type = 'text';
  newNode.placeholder = 'Enter cell (x,y) ...';
  node.replaceChild(newNode, node.childNodes[0]);
}
