export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: "controller",
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  // cookieExpires: 1 / 48,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: "http://127.0.0.1:9000/api",
    pro: ""
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: "home",
  /**
   * @description 需要加载的插件
   */
  plugin: {}
};
