import React, { Component } from 'react';
import WatchLogo from '../svgComponents/svg/WatchLogo.js';
import MobileLogo from '../svgComponents/svg/MobileLogo.js';
import TabletLogo from '../svgComponents/svg/TabletLogo.js';
import LaptopLogo from '../svgComponents/svg/LaptopLogo.js';
import DesktopLogo from '../svgComponents/svg/DesktopLogo.js';;

const data = 
    {
    watch: WatchLogo,
    mobile: MobileLogo,
    tablet: TabletLogo,
    laptop: LaptopLogo,
    desktop: DesktopLogo
	}

const names = Object.keys(data)
        
export {data, names};
