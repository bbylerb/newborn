import React, { useState } from "react";
import { User, Pencil, ChevronRight } from "lucide-react";

// 🔥 mock data (แก้เป็นของจริงได้)
const INFO_ITEMS = [
  { label: "Email", val: "john@example.com", icon: "📧" },
  { label: "Phone", val: "0999999999", icon: "📱" }
];

const SETTINGS_SECTIONS = [
  {
    label: "General",
    items: [
      {
        label: "Edit Profile",
        desc: "Update your info",
        action: () => alert("Edit Profile"),
        icon: "✏️"
      },
      {
        label: "Logout",
        desc: "Sign out of account",
        action: () => alert("Logout"),
        icon: "🚪",
        danger: true
      }
    ]
  }
];

export default function ProfilePage() {
  const [avatarSrc, setAvatarSrc] = useState(null);

  const user = {
    full_name: "John Doe",
    student_id: "12345"
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#f5f5f5"
      }}
    >
      {/* 🔴 HEADER */}
      <div
        style={{
          background: "linear-gradient(135deg,#C8102E,#9B0C23)",
          padding: "40px 20px 80px",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div className="avatar-wrap">
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(255,255,255,.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              overflow: "hidden"
            }}
          >
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt="avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <User size={36} color="#fff" />
            )}
          </div>

          <div style={{ marginTop: 8 }}>
            <input type="file" accept="image/*" onChange={handleAvatarUpload} />
          </div>
        </div>

        <div
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: 800,
            marginTop: 10
          }}
        >
          {user.full_name}
        </div>

        <div style={{ color: "rgba(255,255,255,.7)", fontSize: 13 }}>
          ID: {user.student_id}
        </div>
      </div>

      {/* ⚪ CONTENT */}
      <div style={{ marginTop: -50, padding: "0 16px", flex: 1 }}>
        {/* INFO CARD */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
          }}
        >
          {INFO_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: 10,
                padding: "10px 0",
                borderBottom: "1px solid #eee"
              }}
            >
              <span>{item.icon}</span>
              <div>
                <div style={{ fontSize: 12, color: "#888" }}>
                  {item.label}
                </div>
                <div style={{ fontWeight: "bold" }}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* SETTINGS */}
        {SETTINGS_SECTIONS.map((section) => (
          <div key={section.label} style={{ marginBottom: 16 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginBottom: 8,
                color: "#666"
              }}
            >
              {section.label}
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
              }}
            >
              {section.items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    padding: 12,
                    border: "none",
                    background: "none",
                    cursor: "pointer"
                  }}
                >
                  <span style={{ marginRight: 10 }}>{item.icon}</span>

                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: item.danger ? "red" : "#000"
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      {item.desc}
                    </div>
                  </div>

                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}