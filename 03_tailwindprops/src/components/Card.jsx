import React from "react";

function Card({ title, subtitle, children, footer, style }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "16px",
      width: "300px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      ...style
    }}>
      
      {title && <h2 style={{ margin: "0 0 8px 0" }}>{title}</h2>}
      
      {subtitle && (
        <p style={{ margin: "0 0 12px 0", color: "#6b7280" }}>
          {subtitle}
        </p>
      )}

      <div style={{ marginBottom: "12px" }}>
        {children}
      </div>

      {footer && (
        <div style={{
          borderTop: "1px solid #e5e7eb",
          paddingTop: "8px",
          fontSize: "14px",
          color: "#6b7280"
        }}>
          {footer}
        </div>
      )}
      
    </div>
  );
}

export default Card;