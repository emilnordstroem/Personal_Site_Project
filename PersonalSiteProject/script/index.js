function pageSetup(){
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

function addImagesToList(images, id){
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

    const span = document.createElement('span');
    span.id = "inProgress";
    span.className = "material-symbols-outlined";
    span.textContent = "more_horiz"
    list.appendChild(span);
}


