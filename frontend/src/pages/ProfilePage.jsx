import React, { useState } from "react";
import { User } from "lucide-react";

export default function ProfilePage() {
  const [avatarSrc, setAvatarSrc] = useState(null);

  const user = {
    full_name: "S",
    student_id: "123451234",
    dorm: "F3",
    room: "123",
    email: "student@mfu.ac.th",
    auth: "Email / Password"
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* 🔴 HEADER (ไม่โค้ง + เตี้ยลง) */}
      <div
        style={{
          background: "linear-gradient(135deg,#C8102E,#9B0C23)",
          padding: "24px 20px 30px",
          textAlign: "center"
        }}
      >
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

        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          style={{ marginTop: 8 }}
        />

        <div style={{ color: "#fff", fontWeight: "bold", marginTop: 10 }}>
          {user.full_name}
        </div>
        <div style={{ color: "#eee", fontSize: 13 }}>
          ID: {user.student_id}
        </div>
      </div>

      {/* ⚪ CONTENT */}
      <div style={{ padding: 16 }}>
        
        {/* INFO */}
        <div style={cardStyle}>
          <Item label="Dormitory" value={user.dorm} />
          <Item label="Room" value={user.room} />
          <Item label="Email" value={user.email} />
          <Item label="Authentication" value={user.auth} />
        </div>

        {/* ACCOUNT */}
        <Section title="ACCOUNT">
          <ButtonItem label="Edit Profile" desc="Update your information" />
          <ButtonItem label="Change Password" desc="Update your password" />
        </Section>

        {/* PREFERENCES */}
        <Section title="PREFERENCES">
          <ButtonItem label="Language" desc="English" />
          <ButtonItem label="Notifications" desc="Manage alerts" />
        </Section>

      </div>
    </div>
  );
}

/* 🔧 COMPONENT ย่อย */
const cardStyle = {
  background: "#fff",
  borderRadius: 12,
  padding: 16,
  marginBottom: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
};

function Item({ label, value }) {
  return (
    <div style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <div style={{ fontSize: 12, color: "#888" }}>{label}</div>
      <div style={{ fontWeight: "bold" }}>{value}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 8,
          color: "#666"
        }}
      >
        {title}
      </div>
      <div style={cardStyle}>{children}</div>
    </div>
  );
}

function ButtonItem({ label, desc }) {
  return (
    <div style={{ padding: "12px 0", borderBottom: "1px solid #eee" }}>
      <div style={{ fontWeight: "bold" }}>{label}</div>
      <div style={{ fontSize: 12, color: "#888" }}>{desc}</div>
    </div>
  );
}