import React from 'react'

import Section from 'components/Section'
import SectionLink from 'components/Section/Link'

export const SECTION_NAME = 'about'

export function SectionAbout(props) {
  return <Section {...props} name={SECTION_NAME}></Section>
}

export function LinkAbout(props) {
  return <SectionLink {...props} name={SECTION_NAME} label="Sobre" />
}
