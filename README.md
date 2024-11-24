Ant Design Typography.Text Edit Demo
====================================

这个项目演示了 Ant Design 的 Typography.Text 组件的文本编辑功能。

## 功能演示

1. 单行文本编辑
   - 使用 Typography.Text 组件
   - 点击编辑图标进入编辑模式
   - 点击确认或按回车保存更改
   - 按 ESC 取消编辑

2. 多行文本编辑
   - 同样使用 Typography.Text 组件
   - 支持显示多行文本
   - 通过 autoSize 属性控制文本框大小

## 使用方式

1. 安装依赖：
```bash
pnpm install
```

2. 启动项目：
```bash
pnpm start
```

## 已知问题

1. 多行文本编辑的限制：
   - 在编辑模式下按回车键会直接退出编辑状态，而不是换行
   - 这是 Typography.Text 组件的一个限制，即使设置了 autoSize 也无法解决

2. 可能的解决方案：
   - 使用 Input.TextArea 组件代替 Typography.Text
   - 或者使用自定义的编辑器组件

## 技术栈

- React
- TypeScript
- Ant Design
- Vite
