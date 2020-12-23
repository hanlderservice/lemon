import React, {Component} from 'react';

/**
 * 版权----豫ICP备2020036180号
 * @returns {*}
 * @constructor
 */
function CopyRight() {
    return (
        <div>
            豫ICP备2020036180号
            CopyRight ©{new Date().getFullYear()}
        </div>
    );
}

export default CopyRight;