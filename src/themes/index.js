import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

import light from './light';
import dark from './dark';

const themes = {
    light,
    dark
}

export default theme => deepMerge(grommet, themes[theme] || {});