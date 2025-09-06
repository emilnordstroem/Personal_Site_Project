function pageSetup(){
    addDevelopmentToolsOverview();
    addProjectsToList();
}

function addDevelopmentToolsOverview () {
    const programmingLanguageImages = [
        "JAVA_Icon.png",
        "JavaScript_Icon.png",
        "TypeScript_Icon.png"
    ];

    const backendDevelopmentTools = [
        "MicroSoft_SQL_Icon.png",
        "Node_js_Icon.png"
    ];

    const webDevelopmentTools = [
        "HTML_Icon.png",
        "CSS_Icon.png",
        "React_Icon.png",
    ];

    addImagesToList(programmingLanguageImages, 'programming-languages-list');
    addImagesToList(backendDevelopmentTools, 'backend-development-tools-list');
    addImagesToList(webDevelopmentTools, 'web-development-tools-list');
}

function addImagesToList (images, id) {
    const list = document.getElementById(id);

    for (const filename of images) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = `images/${filename}`;
        img.alt = filename.split('.')[0];
        img.style.height = "100px";

        li.appendChild(img);
        list.appendChild(li);
    }
}

function addProjectsToList () {
    const projectList = document.getElementById("projectList");

    fetch('files/projectObjects.json')
        .then(response => response.json())
        .then(rawData => {
            const projects = rawData.projectObjects;

            for (const projectObject of projects) {
                console.log(projects);
                const projectListElement = document.createElement("li");
                const projectTable = document.createElement("table");
                projectTable.className = 'main-content-list-table';

                for (const key in projectObject) {
                const tableRow = document.createElement("tr");
                const tableData = document.createElement("td");

                if (key === "link") {
                    const anchorElement = document.createElement("a");
                    anchorElement.href = projectObject[key];
                    anchorElement.target = "_blank";

                    const spanElement = document.createElement("span");
                    spanElement.className = "material-symbols-outlined";
                    spanElement.textContent = "link"
                    
                    anchorElement.appendChild(spanElement);
                    tableData.appendChild(anchorElement);
                } else {
                    tableData.textContent = projectObject[key];
                }

                tableRow.appendChild(tableData);
                projectTable.appendChild(tableRow);
                }

                projectListElement.appendChild(projectTable);
                projectList.appendChild(projectListElement);
            }
    });
}