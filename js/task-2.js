const formRef = document.querySelector('.form');
const tableRef = document.querySelector('.table');


formRef.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.querySelector('#name');
    const vorname = document.querySelector('#vorname');

    const item = `<tr>
    <td>${name.value}</td>
    <td>${vorname.value}</td>
  </tr>`

  tableRef.insertAdjacentHTML('beforeend', item)

  name.value = '';
  vorname.value = '';
});

// ///////////////////////

tableRef.addEventListener('click', function (e) {
    tdRef.forEach(element => {
    if(e.target === element){
        const text = prompt('введите имя');

        if(text === null){
            return
        }

        element.textContent = text;
    }
  });
});

console.log();

const tdRef = document.querySelectorAll('td');
