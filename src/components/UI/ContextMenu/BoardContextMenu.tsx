import React, { useRef } from 'react';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuItemWithSubmenu from './ContextMenuWithSubmenu';


// @ts-ignore
const ContextMenu = ({ classes, menuItems }, ref : any) => {
    let closePreviousSubmenu = useRef(null);
    function closePreviousSubmenuIfOpen(closeSubmenu = null) {
        if (closePreviousSubmenu.current) {
            closePreviousSubmenu.current();
        }

        closePreviousSubmenu.current = closeSubmenu;
    }

    return (
        <ul className={classes} ref={ref}>
            {menuItems.map(({ label, subMenuItems, classes }) => {
                if (subMenuItems) {
                    return (
                        <ContextMenuItemWithSubmenu
                            key={label}
                            subMenuItems={subMenuItems}
                            onMouseEnter={closePreviousSubmenuIfOpen}
                        >
                            {label}
                        </ContextMenuItemWithSubmenu>
                    );
                }

                return (
                    <ContextMenuItem
                        key={label}
                        classes={classes}
                        onMouseEnter={closePreviousSubmenuIfOpen}
                    >
                        {label}
                    </ContextMenuItem>
                );
            })}
        </ul>
    );
}

export default React.forwardRef(ContextMenu);