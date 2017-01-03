var React = require("react");
var Actions = require("../actions/SuttorActions");
var reactCookie = require("react-cookie");
var sessionCookie = reactCookie.load("session");

module.exports = React.createClass({
    getInitialState:function(){
        dateTime = Date.now();
        return {
            suttacount:1,
            userid:sessionCookie,
            created:Math.floor(dateTime / 1000),
            amount:10
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
        this.state.amount = 10 * this.state.suttacount;
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

                <div className="form-group">
                    <input type="text" className="form-control" id="userid" name="userid" value={this.state.userid} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="created" name="created" value={this.state.created} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="amount" name="amount" value={this.state.amount} onChange={this.handleInputChange} />
                </div>
            </form>
        )
    }
})