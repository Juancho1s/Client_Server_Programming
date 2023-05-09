var query = {
    pages: {
        count: 276,
        ns: 0,
        title: "Albert Einstein",
        links: [
            { "ns": 0, "title": "20th Century Press Archives" },
            { "ns": 0, "title": "A priori and a posteriori" },
            { "ns": 0, "title": "Aage Bohr" }, { "ns": 0, "title": "Aarau" },
            { "ns": 0, "title": "Abba Eban" }
        ]
    }
}

var doc = document.querySelector("body");
doc.textContent = JSON.stringify(query);

threeRandom(query);

function threeRandom(query) {

    //This function returns a random number
    function randInt(n) {
        return Math.floor(Math.random() * n)
    }

    //this is the main valiables that this methoc contains
    var linksLength = query.pages.links.length;
    var auxArray = [];
    //This variable represents the number of the titles of the links which are going to be displayed.
    var titlesNumber = 3;

    //Here the auxiliary array is filled with all the titles that are randomly selected
    while (auxArray.length < titlesNumber) {
        var randLink = query.pages.links[randInt(linksLength)];
        if (!auxArray.includes(randLink)) {
            auxArray.push(randLink);
        }
    }
    //this foreach is due to the array that contains all the titles
    auxArray.forEach(i => {
        doc.textContent += i["title"]; //Here is suposed to add the title to the element 
    });
}