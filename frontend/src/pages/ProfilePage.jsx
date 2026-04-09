import React from "react";
import { User, Pencil, ChevronRight } from "lucide-react";

export default function ProfilePage() {
  // 👉 สมมติ state / data (ต้องมีจริงในโปรเจคคุณ)
  const avatarSrc = null;
  const user = { full_name: "John Doe", student_id: "12345" };
  const toast = null;

  const handleAvatarUpload = () => {};
  const clearToast = () => {};

  const INFO_ITEMS = [];
  const SETTINGS_SECTIONS = [];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      paddingTop: '60px'
    }}>
      <div style={{ background: 'linear-gradient(135deg,#C8102E,#9B0C23)', padding: '28px 22px 56px', textAlign: 'center', flexShrink: 0, position: 'relative' }}>
        <div className="avatar-wrap">
          <div className="avatar">
            {avatarSrc ? <img src={avatarSrc} alt="avatar" /> : <User size={36} color="rgba(255,255,255,.8)" />}
          </div>
          <div className="avatar-edit">
            <Pencil size={11} color="#fff" />
            <input type="file" accept="image/*" onChange={handleAvatarUpload} />
          </div>
        </div>
        <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, marginTop: 10 }}>{user?.full_name}</div>
        <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, marginTop: 2 }}>ID: {user?.student_id}</div>
      </div>

      <div className="scrl" style={{ paddingBottom: 90 }}>
        <div style={{ margin: '-36px 16px 16px', background: 'var(--card)', borderRadius: 'var(--rad)', padding: '16px 18px', boxShadow: 'var(--sh2)' }}>
          {INFO_ITEMS.map(({ icon, label, val }) => (
            <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }} className="last-no-border">
              <span style={{ width: 22, display: 'flex', justifyContent: 'center', flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: 11, color: 'var(--t2)', fontWeight: 600 }}>{label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--t1)', wordBreak: 'break-all' }}>{val}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '0 16px' }}>
          {SETTINGS_SECTIONS.map(section => (
            <div key={section.label} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--t3)', letterSpacing: .8, textTransform: 'uppercase', marginBottom: 7, paddingLeft: 4 }}>
                {section.label}
              </div>
              <div className="settings-card">
                {section.items.map((item, idx) => (
                  <button key={idx} className={`settings-item${item.danger ? ' danger' : ''}`} onClick={item.action} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', fontFamily: 'inherit', cursor: 'pointer' }}>
                    <div className={`settings-icon ${item.bg}`}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div className="settings-label" style={{ color: item.danger ? '#DC2626' : 'var(--t1)' }}>{item.label}</div>
                      {item.desc && <div className="settings-desc">{item.desc}</div>}
                    </div>
                    <ChevronRight size={16} color="var(--t3)" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {toast && <Toast key={toast.key} message={toast.message} type={toast.type} onClose={clearToast} />}
    </div>
  );
}