interface Entry {
    API: string;
    Description: string;
    Link: string;
}

interface Data {
    entries: Entry[];
}

function populateTable(data: Data) {
    let table = document.getElementById('apiTable');

    if (table === null) {
        console.error("Could not find 'apiTable' in the DOM");
        return;
    }

    data.entries.forEach((entry: Entry) => {
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
        
        if (table) {
            table.appendChild(row);
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('url.txt')
        .then(response => response.text())
        .then(data => {
            let jsonData: Data = JSON.parse(data);
            populateTable(jsonData);
        });
});
