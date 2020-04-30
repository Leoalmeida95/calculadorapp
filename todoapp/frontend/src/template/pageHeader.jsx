import React from 'react'

export default props =>(
<ol className="breadcrumb">
  <li className="breadcrumb-item"><a href="#">{props.name}</a></li>
  <li className="breadcrumb-item active">{props.small}</li>
</ol>
)