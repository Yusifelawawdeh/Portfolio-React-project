import * as React from 'react';
import { Flex, Box } from 'grid-styled';
import { NavMenu } from './NavMenu';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <MuiThemeProvider>
            <Flex wrap>

                <Box width={[1, 1/4]}>

                    <NavMenu />

                </Box>
                <Box width={[1, 3/4]}>

                    {this.props.children}

                </Box>
            </Flex>
        </MuiThemeProvider>;
    }
}
