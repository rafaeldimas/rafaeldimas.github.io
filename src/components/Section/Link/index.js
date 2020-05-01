import React from 'react';
import { Anchor } from 'grommet'

function SectionLink({ name, label, ...props }) {
    const handleClick = () => {
        const $section = document.getElementById(name)

        $section.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <Anchor onClick={handleClick} label={label} {...props}></Anchor>
    );
}

export default SectionLink