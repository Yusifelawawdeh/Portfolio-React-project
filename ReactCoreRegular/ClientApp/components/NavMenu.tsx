import * as React from 'react';
import Paper from "material-ui/Paper";
import { Flex, Box } from 'grid-styled';
import { NavLink } from 'react-router-dom';




export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <Paper zDepth={3} className="paper-navigation">
                    <div className='navbar navbar-inverse'>
                        <div className='clearfix'></div>
                        <div className='navbar-collapse collapse'>
                            <ul className='nav navbar-nav'>
                                <li>
                                    <NavLink to={'/'} exact activeClassName='active'>
                                        <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/counter'} activeClassName='active'>
                                        <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/fetchdata'} activeClassName='active'>
                                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </Paper>;
    }
}
