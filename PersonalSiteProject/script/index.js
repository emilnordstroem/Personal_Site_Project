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
        img.className = "image-list";

        li.appendChild(img);
        list.appendChild(li);
    }
}

function addProjectsToList () {
    const projectOverviewSpan = document.getElementById("projects-overview");

    fetch('files/projectObjects.json')
        .then(response => response.json())
        .then(rawData => {
            const projects = rawData.projectObjects;

            let groupUnorderedListElement = document.createElement("ul");
            groupUnorderedListElement.className = 'main-content-list project-list-group';
            
            let index = 0;
            let groupSizeLimit = 2;

            for (const projectObject of projects) {
                index++;

                const projectListElement = document.createElement("li");
                projectListElement.className = "project-list-item";

                const projectTable = document.createElement("table");
                projectTable.className = 'main-content-list-table';

                for (const key in projectObject) {
                    const tableRow = document.createElement("tr");
                    tableRow.className = "project-table-row";

                    const tableData = document.createElement("td");
                    tableData.className = "project-table-data";
                    
                    if (key === 'link') {
                        const anchorElement = document.createElement("a");
                        anchorElement.href = projectObject[key];
                        anchorElement.target = "_blank";

                        const spanElement = document.createElement("span");
                        spanElement.className = "material-symbols-outlined";
                        spanElement.textContent = "link"
                        
                        anchorElement.appendChild(spanElement);
                        tableData.appendChild(anchorElement);
                    } else {
                        if (key === 'project') {
                            tableData.class = "projectName";
                            tableData.classList = "table-row-project-data";
                        } else if (key === 'context') {
                            tableData.class = "projectContext";
                            tableData.classList = "table-row-context-data";
                        } 
                        tableData.textContent = projectObject[key];
                    }

                    tableRow.appendChild(tableData);
                    projectTable.appendChild(tableRow);
                }

                projectListElement.appendChild(projectTable);
                groupUnorderedListElement.appendChild(projectListElement);

                // Every fourth element will be placed in a new group
                if (index % groupSizeLimit === 0) {
                    projectOverviewSpan.appendChild(groupUnorderedListElement);

                    groupUnorderedListElement = document.createElement("ul");
                    groupUnorderedListElement.className = 'main-content-list project-list-group';
                }
            }
        });
}