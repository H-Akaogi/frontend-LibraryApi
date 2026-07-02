import type { NextConfig } from "next";

/**
 * 演習 8-1 APIプロキシ(BFF)の設定を追加する
 * Next.js プロジェクトの設定ファイル
 */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        /**
         * ユーザー管理API用のプロキシ設定
         */
        source: "/proxy-api/users/:path*",
        destination: "http://20.78.35.126/app2/library/api/auth/:path*",
      },
      {
        /**
         * 図書管理API用のプロキシ設定
         */
        source: "/proxy-api/library/api/:path*",
        destination: "http://20.78.35.126/app2/library/api/:path*",
      },
    ];
  },
};

export default nextConfig;