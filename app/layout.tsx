/*
 * @Author: Deshun
 * @Date: 2023-11-29 21:20:17
 * @FilePath: /fin-ai/app/layout.tsx
 * @Description: 文件描述
 * Copyright (c) 2023 by Deshun email: contact.w3h5.com, All Rights Reserved.
 */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "FIN-AI.fun - 大家都会用的金融保险计算器",
  description: "金融工具箱(FIN-AI.fun)，大家都会用的金融保险计算器工具箱。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
