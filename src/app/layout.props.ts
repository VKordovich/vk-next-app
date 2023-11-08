import {
    ReactNode
} from 'react';

export interface LayoutProps {
    children: ReactNode;
    params: {
        type: string;
    }
}
