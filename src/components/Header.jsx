import React from "react";
import { Link } from "react-router-dom";
export default  function Header(){
    return <div>
        <Link to="/">首页</Link>
        <Link style={{marginLeft:10}} to="/movies">电影列表</Link>
    </div>
}