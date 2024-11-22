import {defineConfig} from "vitepress";

export default defineConfig({
    title: "AppleAutoPro Docs",
    description: "Documentation for AppleAutoPro",

    locales: {
        root: {
            label: "简体中文",
            lang: "zh",
        },
        en: {
            label: "English",
            lang: "en",
        },
        vi: {
            label: "Tiếng Việt",
            lang: "vi",
        },
    },

    themeConfig: {
        search: {
          provider: "local",
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [],

        sidebar: {
            "/docs/": [
                {text: "简介", link: "/docs/index.md"},
                {text: "Demo演示", link: "/docs/demo.md"},
                {
                    text: "源码下载",
                    items: [
                        {
                            text: "个人版",
                            link: "https://github.com/SideCloudGroup/AppleAutoPro-Personal/releases",
                        },
                        {
                            text: "商业版",
                            link: "https://github.com/SideCloudGroup/AppleAutoPro-Business/releases",
                        },
                    ],
                },
                {
                    text: "安装",
                    items: [
                        {text: "前端安装", link: "/docs/install/frontend.md"},
                        {text: "后端安装", link: "/docs/install/backend.md"},
                        {text: "个人版授权证书安装", link: "/docs/install/license-manual.md"},
                        {text: "中国大陆服务器安装 Docker", link: "/docs/others/docker-install-cn.md"},
                    ],
                },
                {
                    text: "升级",
                    items: [
                        {text: "从开源版v2迁移", link: "/docs/install/upgrade-from-v2.md"},
                        {text: "程序升级", link: "/docs/install/upgrade.md"},
                    ],
                },
                {
                    text: "API文档",
                    items: [
                        {text: "分享页API", link: "/docs/api/share-api.md"},
                        {text: "V2Board知识库对接", link: "/docs/api/v2board.md"},
                        {text: "SSPanel-Metron对接", link: "/docs/api/sspanel-metron.md"},
                        {text: "VitePress对接", link: "https://vitepress-appleautopro.pages.dev/apple-examples"},
                        {text: "PHP库", link: "https://packagist.org/packages/sidecloud/appleauto-php"},
                    ],
                },
                {
                    text: "其他",
                    items: [
                        {text: "ionCube相关报错", link: "/docs/others/ioncube-error.md"},
                        {text: "从本地加载静态资源", link: "/docs/others/load-assets-from-server.md"},
                        {text: "服务器/代理商家统计表", link: "/docs/others/stat.md"},
                        {text: "关闭二步验证弹窗", link: "/docs/others/turn-off-2fa.md"},
                        {text: "常见问题", link: "/docs/others/faq.md"},
                        {text: "联系客服", link: "https://t.me/SideCloudCSBot"},
                    ]
                }
            ],
            "/en/docs/": [
                {text: "Introduction", link: "/en/docs/index.md"},
                {text: "Demo", link: "/en/docs/demo.md"},
                {
                    text: "Source Code Download",
                    items: [
                        {
                            text: "Personal Edition",
                            link: "https://github.com/SideCloudGroup/AppleAutoPro-Personal/releases",
                        },
                        {
                            text: "Business Edition",
                            link: "https://github.com/SideCloudGroup/AppleAutoPro-Business/releases",
                        },
                    ],
                },
                {
                    text: "Installation",
                    items: [
                        {text: "Frontend", link: "/en/docs/install/frontend.md"},
                        {text: "Backend", link: "/en/docs/install/backend.md"},
                        {text: "How to use the License", link: "/en/docs/install/license-manual.md"},
                    ],
                },
                {
                    text: "Upgrade",
                    items: [
                        {text: "Upgrade from v2", link: "/en/docs/install/upgrade-from-v2.md"},
                        {text: "Update the program", link: "/en/docs/install/upgrade.md"},
                    ],
                },
                {
                    text: "API Document",
                    items: [
                        {text: "Shared Page API", link: "/en/docs/api/share-api.md"},
                        {text: "V2Board Knowledge Controller", link: "/en/docs/api/v2board.md"},
                        {text: "SSPanel-Metron Connection", link: "/en/docs/api/sspanel-metron.md"},
                        {text: "PHP Library", link: "https://packagist.org/packages/sidecloud/appleauto-php"},
                    ],
                },
                {
                    text: "Others",
                    items: [
                        {text: "ionCube Issues", link: "/en/docs/others/ioncube-error.md"},
                        {text: "服务器/代理商家统计表", link: "/en/docs/others/stat.md"},
                        {text: "Q&A", link: "/en/docs/others/q-a.md"},
                    ]
                }
            ],
            "/vi/docs/": [
                {text: "Giới Thiệu", link: "/vi/docs/index.md"},
                {text: "Demo", link: "/vi/docs/demo.md"},
                {
                    text: "Tải xuống mã nguồn",
                    items: [
                        {
                            text: "Phiên bản cá nhân",
                            link: "https://github.com/SideCloudGroup/AppleAutoPro-Personal/releases",
                        },
                        {
                            text: "Phiên bản doanh nghiệp",
                            link: "https://github.com/SideCloudGroup/AppleAutoPro-Business/releases",
                        },
                    ],
                },
                {
                    text: "Hướng Dẫn Cài Đặt",
                    items: [
                        {text: "Cài Đặt Giao Diện Phía Trước", link: "/vi/docs/install/frontend.md"},
                        {text: "Cài Đặt Phần Mềm Phía Sau", link: "/vi/docs/install/backend.md"},
                        {text: "Phương Pháp Sử Dụng Giấy Phép Offline", link: "/vi/docs/install/license-manual.md"},
                    ],
                },
                {
                    text: "Nâng cấp",
                    items: [
                        {text: "Chuyển Đổi Từ Phiên Bản Mở Rộng v2", link: "/vi/docs/install/upgrade-from-v2.md"},
                        {text: "Quy Trình Nâng Cấp", link: "/vi/docs/install/upgrade.md"},
                    ],
                },
                {
                    text: "Tài Liệu API",
                    items: [
                        {text: "API Trang Chia Sẻ", link: "/vi/docs/api/share-api.md"},
                        {text: "Gọi Kho Kiến Thức V2Board", link: "/vi/docs/api/v2board.md"},
                        {text: "Tích Hợp SSPanel-Metron", link: "/vi/docs/api/sspanel-metron.md"},
                        {text: "Thư Viện PHP", link: "https://packagist.org/packages/sidecloud/appleauto-php"},
                    ],
                },
                {
                    text: "Khác",
                    items: [
                        {text: "Lỗi Liên Quan đến ionCube", link: "/vi/docs/others/ioncube-error.md"},
                        {text: "Bảng Thống Kê Các Dịch Vụ Máy Chủ/Proxy Có Thể Dùng Để Mở Khóa", link: "/vi/docs/others/stat.md"},
                        {text: "Q&A", link: "/vi/docs/others/q-a.md"},
                    ]
                }
            ],
        },
    },
});
