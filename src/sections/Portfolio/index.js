import React from 'react'

import Section from '../../components/Section'
import SectionLink from '../../components/Section/Link'

export const SECTION_NAME = 'portfolio';

export function SectionPortfolio(props) {
    return (
        <Section {...props} name={SECTION_NAME}></Section>
    )
}

export function LinkPortfolio(props) {
    return (
        <SectionLink {...props} name={SECTION_NAME} label='Portfólio' />
    )
}
