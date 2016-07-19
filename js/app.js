/**
 * Created by zhu on 2016/7/19.
 */
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//import HelloHandler from './hello.js';

/*
let App = React.createClass({
    render() {
    return (
        <div className="nav">
        <Link to="app" className="homelink">Home  </Link>
        <Link to="hello" className="hellolink">  Say Hello</Link>
    {/!* this is the importTant part *!/}
    <RouteHandler/>
    </div>
);
}
});

let routes = (
    <Route name="app" path="/" handler={App}>
    <Route name="hello" path="/hello" handler={HelloHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});*/


var Helloworld = React.createClass({
    render: function () {
        return(
            <p>
                Hello,<input type="text" placeholder="Your name here" />!
                It is {this.props.data.toTimeString()}
            </p>
        );
    }
});

setInterval(function(){
    React.render(
        <Helloworld data={new Date()} />,
        document.getElementById('example')
    );
},500);






