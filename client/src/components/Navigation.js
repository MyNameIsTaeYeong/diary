import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/today">일일</Link>
      <Link to="/calendar">달력</Link>
      <Link to="#">통계</Link>
      <Link to="#">분석</Link>
    </div>
  );
}

export default Navigation;
