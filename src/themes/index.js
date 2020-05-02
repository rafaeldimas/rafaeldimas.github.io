import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

import light from 'themes/light'
import dark from 'themes/dark'

const themes = {
  light,
  dark,
}

export default (theme) => deepMerge(grommet, themes[theme] || {})
