import React from 'react';
import {ThemeContext} from './ThemeContext'

const ThemeButton = ({toggleTheme}) => (
	<ThemeContext.Consumer>
	{theme => <button style={{color:theme.textcolor,
				backgroundColor:theme.backgroundColor}}
				onClick={() => toggleTheme()}>Toggle</button>
	}
	</ThemeContext.Consumer>
)

export default ThemeButton;