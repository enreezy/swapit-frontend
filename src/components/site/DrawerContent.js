import React from 'react';
import { Drawer, Button } from 'antd';

const DrawerContent = React.memo(({ visible, onClose, showChildrenDrawer, onChildrenDrawerClose, childrenDrawer }) => {
    return (
        <Drawer
          title="Messages"
          maskClosable={false}
          width={520}
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <Button type="primary" onClick={showChildrenDrawer}>
            Two-level drawer
          </Button>
          <Drawer
            title="John Doe"
            width={320}
            closable={true}
            onClose={onChildrenDrawerClose}
            visible={childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
        </Drawer>
    )
});

export default DrawerContent;