//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var SuttorStore = require("./stores/suttorStore");
var Suttorlist = require("./components/SuttorList.jsx");
var _records = [];
var getallrecords = function(record){
    _records = record;
    render();
};
SuttorStore.onChange(getallrecords);

function render(){
    ReactDOM.render(<Suttorlist sutta={_records}/>, document.getElementById("container"));
}