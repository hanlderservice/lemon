import React from 'react';
import {Spin} from 'antd'


function Loading() {
    return (
        <div
            style={{
                background: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '4px',
                marginBottom: '20px',
                padding: '30px 50px',
                margin: '20px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',

            }}>
            <Spin tip="正在加载，请稍后......" size="large"/>
        </div>
    );
}


export default Loading;