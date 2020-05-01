import React from 'react'

import Section from '../../components/Section'
import SectionLink from '../../components/Section/Link'

export const SECTION_NAME = 'contact';

export function SectionContact(props) {
    return (
        <Section {...props} name={SECTION_NAME}></Section>
    )
}

export function LinkContact(props) {
    return (
        <SectionLink {...props} name={SECTION_NAME} label='Contato' />
    )
}
