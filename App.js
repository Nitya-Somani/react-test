const heading = React.createElement("h1",{id:"heading",class:"heading-1"},"text");
const html = React.createElement("div",{},[React.createElement("h1",{id:"h1"},"I am h1 tag"),
    React.createElement("h2",{id:"h2"},"I am h2 tag"),
    React.createElement("h3",{id:"h3"},"I am h3 tag")
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(html);