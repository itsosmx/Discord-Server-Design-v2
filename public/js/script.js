
const packages = document.getElementById("packages");
changePackage('basic')


async function changePackage(type) {
    const selected = await fetch('./public/js/packages.json').then((response) => { return response.json() }
    )
    const list = selected[type]
    const navList = document.getElementsByClassName('nav-list')

    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.remove('active')
    }
    document.getElementById(type).classList.add('active')
    packages.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        const child = document.createElement("li")
        const icon = document.createElement('i')
        const paragraph = document.createElement('p')
        icon.classList = 'far fa-check-circle'
        paragraph.innerHTML = list[i]
        packages.appendChild(child);
        child.appendChild(icon)
        child.appendChild(paragraph);
    }
}

