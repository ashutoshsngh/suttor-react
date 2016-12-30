var React = require("react");
var Actions = require("../actions/SuttorActions");

module.exports = React.createClass({
    getInitialState:function(){
        return {
            suttacount:1
        }
    },
    handleInputChange:function(e){
        e.preventDefault();
        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        this.setState(state);
    },
    increasesuttacount:function(e) {
        e.preventDefault();
        var suttacount = this.state.suttacount;
        this.state.suttacount = suttacount + 1;
        this.setState(this.state);
        Actions.addSuttaCount(this.state);
    },
    render:function(){
        return(
            <form className="form">
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Sutta count:</label>
                    <input type="text" className="form-control" id="name" name="suttacount" value={this.state.suttacount} onChange={this.handleInputChange} placeholder="Sutta Count" />
                </div>

                <div className="form-group">
                    <div className="increase-count" onClick={this.increasesuttacount}>+</div>
                </div>
            </form>
        )
    }
})