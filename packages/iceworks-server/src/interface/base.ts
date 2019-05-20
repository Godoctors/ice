/**
 * 项目信息
 */
export interface IProject {
  readonly name: string;
  readonly path: string;
}

/**
 * 功能模块的基类
 */
export interface IBaseModule {
  readonly projectName: string;
  readonly projectPath: string;
}

/**
 * 项目的模板
 */
export interface IProjectScaffold {
  /**
   * 名称
   */
  name: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 背景图
   */
  image?: string;
}

/**
 * 项目的布局
 */
export interface IProjectLayout {
  /**
   * 名称
   */
  name: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 描述
   */
  description: string;

  /**
   * 是否自定义
   */
  isCustom: boolean;

  /**
   * 截图 URL
   */
  screenshot: string;

  /**
   * 封面图 URL
   */
  thumbnail: string;
}

/**
 * TODO 物料的模板信息
 */
export interface IMaterialScaffold { }

/**
 * TODO 物料的组件信息
 */
export interface IMaterialComponent { }

/**
 * TODO 物料的区块信息
 */
export interface IMaterialBlock { }