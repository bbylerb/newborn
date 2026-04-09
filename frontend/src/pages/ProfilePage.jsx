// ... โค้ดด้านบนเหมือนเดิมทุกอย่าง

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* 🔴 HEADER (แก้ตรงนี้) */}
      <div style={{ 
        background: 'linear-gradient(135deg,#C8102E,#9B0C23)', 
        padding: '20px 22px 28px', // ✅ ลดความสูง (เดิม 56)
        textAlign: 'center', 
        flexShrink: 0, 
        position: 'relative' 
      }}>
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
        <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, marginTop: 2 }}>
          ID: {user?.student_id}
        </div>
      </div>

      <div className="scrl" style={{ paddingBottom: 90 }}>
        
        {/* ⚪ INFO CARD (แก้ตรงนี้) */}
        <div style={{ 
          margin: '16px', // ✅ เอา margin ติดลบออก (เดิม -36px)
          background: 'var(--card)', 
          borderRadius: 'var(--rad)', 
          padding: '16px 18px', 
          boxShadow: 'var(--sh2)' 
        }}>
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

        