import * as React from 'react';
import { Flex, Box } from 'grid-styled';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <Flex>
            <Flex row width='100%' height='100%'>

                <Box column width={1 / 3} px={3}>

                    <NavMenu />

                </Box>

                <Box column width={2 / 3} px={3}>

                    {this.props.children}

                </Box>
            </Flex>
        </Flex>;
    }
}
