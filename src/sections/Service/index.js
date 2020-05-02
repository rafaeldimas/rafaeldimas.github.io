import React from 'react'

import Section from 'components/Section'
import SectionLink from 'components/Section/Link'

export const SECTION_NAME = 'service'

export function SectionService(props) {
  return <Section {...props} name={SECTION_NAME}></Section>
}

export function LinkService(props) {
  return <SectionLink {...props} name={SECTION_NAME} label="Serviço" />
}
