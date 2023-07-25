function populateTable(data) {
    var table = document.getElementById('apiTable');
    if (table === null) {
        console.error("Could not find 'apiTable' in the DOM");
        return;
    }
    data.entries.forEach(function (entry) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = entry.API;
        row.appendChild(nameCell);
        var descriptionCell = document.createElement('td');
        descriptionCell.textContent = entry.Description;
        row.appendChild(descriptionCell);
        var linkCell = document.createElement('td');
        var link = document.createElement('a');
        link.href = entry.Link;
        link.textContent = "Link";
        linkCell.appendChild(link);
        row.appendChild(linkCell);
        if (table) {
            table.appendChild(row);
        }
    });
}
document.addEventListener('DOMContentLoaded', function (event) {
    fetch('url.txt')
        .then(function (response) { return response.text(); })
        .then(function (data) {
        var jsonData = JSON.parse(data);
        populateTable(jsonData);
    });
});
