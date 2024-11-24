import { Space, Typography } from 'antd';
import React, { useState } from 'react';

export function Hello() {
  const [text1, setText1] = useState('这是一个可编辑的单行文本');
  const [text2, setText2] = useState(`这是一个可编辑的多行文本

可以包含多行内容

试试看编辑它！`);

  return (
    <Space direction="vertical" style={{ width: '100%', padding: 20 }}>
      <Typography.Title level={4}>Typography 编辑演示</Typography.Title>

      <div>
        <div style={{ marginBottom: 8 }}>单行文本：</div>
        <Typography.Text
          editable={{
            onChange: setText1,
          }}
        >
          {text1}
        </Typography.Text>
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>多行文本：</div>
        <Typography.Text
          editable={{
            onChange: setText2,
            autoSize: { minRows: 3, maxRows: 5 }
          }}
        >
          {text2}
        </Typography.Text>
      </div>
    </Space>
  );
}
