import React from "react";
import { StaticRouter } from 'react-router-dom/server'
import Index from '@/pages/index'

export default function App({ url }) {
  console.log('Server App received URL:', url);

  try {
    return (
      <div>
        <StaticRouter location={url}>
          <Index />
        </StaticRouter>
      </div>

    )
  } catch (error) {

    // 返回一个错误页面组件
    return (
      <div>
        <h1>服务器渲染错误</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    )
  }
}
