import React, { ReactChild, ReactNode, ReactText } from 'react';

export interface MytextProps {
    children?: ReactNode
}

export function MyText(props: MytextProps) {
    return (
        <div>
            text
        </div>
    );
}
