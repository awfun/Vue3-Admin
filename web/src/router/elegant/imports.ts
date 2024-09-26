/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteComponent } from "vue-router";
import type { LastLevelRouteKey, RouteLayout } from "@elegant-router/types";

import BaseLayout from "@/layouts/base-layout/index.vue";
import BlankLayout from "@/layouts/blank-layout/index.vue";

export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  base: BaseLayout,
  blank: BlankLayout,
};

export const views: Record<LastLevelRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: () => import("@/views/_builtin/403/index.vue"),
  404: () => import("@/views/_builtin/404/index.vue"),
  500: () => import("@/views/_builtin/500/index.vue"),
  "iframe-page": () => import("@/views/_builtin/iframe-page/[url].vue"),
  login: () => import("@/views/_builtin/login/index.vue"),
  about: () => import("@/views/about/index.vue"),
  administrative_framework: () => import("@/views/administrative/framework/index.vue"),
  "administrative_message-detail": () => import("@/views/administrative/message-detail/[id].vue"),
  administrative_message: () => import("@/views/administrative/message/index.vue"),
  administrative_organization: () => import("@/views/administrative/organization/index.vue"),
  "administrative_post-manage": () => import("@/views/administrative/post-manage/index.vue"),
  features_captcha: () => import("@/views/features/captcha/index.vue"),
  features_colorthief: () => import("@/views/features/colorthief/index.vue"),
  "features_eye-dropper": () => import("@/views/features/eye-dropper/index.vue"),
  features_flow: () => import("@/views/features/flow/index.vue"),
  features_gantt: () => import("@/views/features/gantt/index.vue"),
  features_lazyload: () => import("@/views/features/lazyload/index.vue"),
  features_pickr: () => import("@/views/features/pickr/index.vue"),
  features_print: () => import("@/views/features/print/index.vue"),
  features_viewer: () => import("@/views/features/viewer/index.vue"),
  "features_vue-directive": () => import("@/views/features/vue-directive/index.vue"),
  "features_vue-office": () => import("@/views/features/vue-office/index.vue"),
  home: () => import("@/views/home/index.vue"),
  "system-manage_internalization": () => import("@/views/system-manage/internalization/index.vue"),
  "system-manage_menu-manage": () => import("@/views/system-manage/menu-manage/index.vue"),
  "system-manage_operation-log": () => import("@/views/system-manage/operation-log/index.vue"),
  "system-manage_role-manage": () => import("@/views/system-manage/role-manage/index.vue"),
  "system-manage_user-manage": () => import("@/views/system-manage/user-manage/index.vue"),
  "user-center": () => import("@/views/user-center/index.vue"),
};
