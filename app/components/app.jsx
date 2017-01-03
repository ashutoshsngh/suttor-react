var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var reactCookie = require("react-cookie");
var sessionCookie = reactCookie.load("session");
module.exports = React.createClass({
    render:function(){
        let html;
        if(sessionCookie) {
            html = (
                <div>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/addsutta">Add sutta</Link></li>
                    <li><Link to="/suttalist">Sutta List</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div></div>
        );
        }else{
            html = (
                <div>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
                </div>
            );
        }
        return (
            <div>
                <h1>Suttor React App</h1>
                {html}
            </div>

        );
    }
})