var React = require("react");
var Actions = require("../actions/SuttorActions");
var SuttorAddForm = require("./SuttorAddForm.jsx");

var cols = [
    { key: '_id', label: 'Id' },
    { key: 'suttacount', label: 'Sutta count' }
];

module.exports = React.createClass({
    render:function(){
        var tableheaders = this.generateHeaders();
        rowComponents = this.generateRows();
        return (
            <div className="row">
                <div className="col-md-6">
                    <SuttorAddForm />
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <thead><tr>{tableheaders}</tr></thead>
                        <tbody>{rowComponents}</tbody>
                    </table>
                </div>
            </div>
        );
    },
    generateHeaders: function() {
        // generate our header (th) cell components
        return cols.map(function(colData) {
            return <th key={colData.key}>{colData.label}</th>;
        });
    },
    generateRows: function() {
        return this.props.sutta.map(function(item) {
            // handle the column data within each row
            var cells = cols.map(function(colData) {
                return <td>{item[colData.key]}</td>;
            });
            return <tr key={item._id}>{cells}</tr>;
        });
    }
})