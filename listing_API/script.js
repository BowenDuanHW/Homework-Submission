function populateTable(data) {
    let table = document.getElementById('apiTable');

    data.entries.forEach(entry => {
        let row = document.createElement('tr');
        
        let nameCell = document.createElement('td');
        nameCell.textContent = entry.API;
        row.appendChild(nameCell);
        
        let descriptionCell = document.createElement('td');
        descriptionCell.textContent = entry.Description;
        row.appendChild(descriptionCell);
        
        let linkCell = document.createElement('td');
        let link = document.createElement('a');
        link.href = entry.Link;
        link.textContent = "Link";
        linkCell.appendChild(link);
        row.appendChild(linkCell);
        
        table.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('url.txt')
        .then(response => response.text())
        .then(data => {
            let jsonData = JSON.parse(data);
            populateTable(jsonData);
        });
});
