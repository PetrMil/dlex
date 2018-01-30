import React, { Component } from 'react';
import watchLogo from '../svgComponents/svg/watchLogo.js';
import mobileLogo from '../svgComponents/svg/mobileLogo.js';
import tabletLogo from '../svgComponents/svg/tabletLogo.js';
import laptopLogo from '../svgComponents/svg/laptopLogo.js';
import desktopLogo from '../svgComponents/svg/desktopLogo.js';;

const data = 
    {
    watch: watchLogo,
    mobile: mobileLogo,
    tablet: tabletLogo,
    laptop: laptopLogo,
    desktop: desktopLogo
	}

const names = Object.keys(data)
        
export {data, names};
