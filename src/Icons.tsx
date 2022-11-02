import React from "react";
import {ReactComponent as IconDown} from "../src/assests/Icon/Thumbs/Down.svg";
import {ReactComponent as IconUp} from "../src/assests/Icon/Thumbs/Icon-Thumbs-Up.svg";
import {ReactComponent as IconBookmark} from "../src/assests/Icon/Controls/Icon-Bookmark.svg";



const Icon = (iconName: any): any => {
  switch (iconName) {
    case 'down':
      return <IconDown />
    case 'up':
      return  <IconUp />
    case 'bookmark':
      return  <IconBookmark />
  }
};

export default Icon;