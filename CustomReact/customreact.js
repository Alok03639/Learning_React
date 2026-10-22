
function customRender(reactElement, mainContainer){

    /*
    --i is not a appropriate methode to write such codes we will use modular way written below

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;

    for(const prop in reactElement.props){
        if(prop === 'Children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
