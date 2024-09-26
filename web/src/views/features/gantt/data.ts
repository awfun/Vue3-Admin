import type { Task } from 'dhtmlx-gantt';

export const ganttTasks: Task[] = [
  {
    id: 1,
    text: 'Vue3 Admin 开发周期',
    type: 'project',
    progress: 0,
    open: true,
    start_date: new Date('2024-07-09 03:18'),
    duration: 80,
    parent: 0,
  },
  {
    id: 2,
    text: '智能行政',
    start_date: new Date('2024-07-12 00:00'),
    type: 'project',
    duration: 6,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 3,
    text: '组织管理',
    start_date: new Date('2024-07-13 00:00'),
    end_date: new Date('2024-07-15 00:00'),
    parent: '2',
    open: true,
  },
  {
    id: 4,
    text: '岗位管理',
    start_date: new Date('2024-07-18 00:00'),
    duration: 4,
    parent: '2',
    open: true,
  },
  {
    id: 5,
    text: '系统设置',
    start_date: new Date('2024-07-20 00:00'),
    type: 'project',
    duration: 30,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 6,
    text: '国际化',
    start_date: new Date('2024-07-21 00:00'),
    duration: 2,
    parent: '5',
    open: true,
  },
  {
    id: 7,
    text: '操作日志',
    start_date: new Date('2024-07-24 00:00'),
    duration: 2,
    parent: '5',
    open: true,
  },
  {
    id: 8,
    text: '菜单管理',
    start_date: new Date('2024-07-28 00:00'),
    duration: 4,
    parent: '5',
    open: true,
  },
  {
    id: 9,
    text: '角色管理',
    start_date: new Date('2024-08-06 00:00'),
    duration: 4,
    parent: '5',
    open: true,
  },
  {
    id: 10,
    text: '用户管理',
    start_date: new Date('2024-08-12 00:00'),
    duration: 6,
    parent: '5',
    open: true,
  },
  {
    id: 11,
    text: '首页',
    start_date: new Date('2024-08-20 00:00'),
    type: 'project',
    duration: 2,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 12,
    text: '关于',
    start_date: new Date('2024-08-24 00:00'),
    type: 'project',
    duration: 2,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 13,
    text: '个人中心',
    start_date: new Date('2024-08-28 00:00'),
    type: 'project',
    duration: 3,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 14,
    text: '组织架构',
    start_date: new Date('2024-09-01 00:00'),
    duration: 1,
    parent: '2',
    open: true,
  },
  {
    id: 15,
    text: '消息公告',
    start_date: new Date('2024-09-03 00:00'),
    duration: 3,
    parent: '2',
    open: true,
  },
  {
    id: 16,
    text: '技术文档',
    start_date: new Date('2024-09-08 00:00'),
    type: 'project',
    duration: 2,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 17,
    text: 'Soybean（内链）',
    start_date: new Date('2024-09-08 00:00'),
    duration: 1,
    parent: '16',
    open: true,
  },
  {
    id: 18,
    text: 'Vue3',
    start_date: new Date('2024-09-09 00:00'),
    duration: 1,
    parent: '16',
    open: true,
  },
  {
    id: 19,
    text: 'Nest.js',
    start_date: new Date('2024-09-10 00:00'),
    duration: 1,
    parent: '16',
    open: true,
  },
  {
    id: 20,
    text: 'Ant Design Vue',
    start_date: new Date('2024-09-11 00:00'),
    duration: 1,
    parent: '16',
    open: true,
  },
  {
    id: 21,
    text: 'UnoCSS',
    start_date: new Date('2024-09-12 00:00'),
    duration: 1,
    parent: '16',
    open: true,
  },
  {
    id: 22,
    text: '功能页',
    start_date: new Date('2024-09-15 00:00'),
    type: 'project',
    duration: 8,
    render: 'split',
    parent: '1',
    progress: 0,
    open: true,
  },
  {
    id: 23,
    text: '验证码',
    start_date: new Date('2024-09-14 00:00'),
    duration: 3,
    parent: '22',
    open: true,
  },
  {
    id: 24,
    text: '打印',
    start_date: new Date('2024-09-17 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 25,
    text: '拾色器',
    start_date: new Date('2024-09-18 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 26,
    text: '甘特图',
    start_date: new Date('2024-09-19 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 27,
    text: '图片预览',
    start_date: new Date('2024-09-20 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 28,
    text: '自定义 Vue 指令',
    start_date: new Date('2024-09-21 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 29,
    text: '懒加载',
    start_date: new Date('2024-09-22 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 30,
    text: '图片取色盘',
    start_date: new Date('2024-09-23 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 31,
    text: '系统级取色器',
    start_date: new Date('2024-09-24 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 32,
    text: '文件预览',
    start_date: new Date('2024-09-25 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
  {
    id: 33,
    text: '流程图',
    start_date: new Date('2024-09-26 00:00'),
    duration: 1,
    parent: '22',
    open: true,
  },
];
