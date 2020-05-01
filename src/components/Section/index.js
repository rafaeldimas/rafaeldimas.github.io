import React from 'react';

function Section({ name, children, ...props }) {
    return (
        <div id={name} {...props}>
            {children}
        </div>
    );
}

export default Section