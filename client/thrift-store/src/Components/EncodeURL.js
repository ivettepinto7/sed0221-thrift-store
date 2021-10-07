import React from "react";

export default function EncodeURL(props){
    return encodeURIComponent(props.path).
    replace(/['()*]/g, c => "%" + c.charCodeAt(0).toString(16))
}