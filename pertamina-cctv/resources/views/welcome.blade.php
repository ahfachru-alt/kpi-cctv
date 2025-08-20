<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome - KILANG PERTAMINA INTERNASIONAL</title>
    <style>
        html, body { height: 100%; margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; }
        .bg { position: fixed; inset: 0; background: url('/images/kilang.png') center/cover no-repeat; filter: brightness(0.75); }
        .overlay { position: fixed; inset: 0; background: radial-gradient(ellipse at 20% 10%, rgba(255,255,255,.08), transparent 40%), linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.6)); }
        .content { position: relative; z-index: 1; min-height: 100%; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .card { width: 100%; max-width: 960px; background: rgba(255,255,255,0.06); backdrop-filter: blur(10px); border-radius: 24px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 30px 80px rgba(0,0,0,.35); overflow: hidden; }
        .header { display: flex; align-items: center; gap: 16px; padding: 32px; }
        .logo { width: 72px; height: 72px; background: url('/images/Pertamina.png') center/contain no-repeat; filter: drop-shadow(0 8px 16px rgba(0,0,0,.3)); }
        .title { color: #fff; }
        .title h1 { margin: 0; font-size: 28px; letter-spacing: .5px; }
        .title p { margin: 6px 0 0; color: #e5e7eb; font-size: 14px; }
        .actions { margin-left: auto; display: flex; gap: 12px; }
        .btn { appearance: none; border: 0; padding: 10px 16px; border-radius: 12px; font-weight: 600; letter-spacing: .3px; cursor: pointer; transition: transform .15s ease, box-shadow .15s ease, background .2s ease; }
        .btn:active { transform: translateY(1px); }
        .btn-primary { background: linear-gradient(135deg, #0ea5e9, #2563eb); color: #fff; box-shadow: 0 8px 20px rgba(37,99,235,.35); }
        .btn-primary:hover { box-shadow: 0 12px 28px rgba(37,99,235,.45); }
        .btn-ghost { background: rgba(255,255,255,.12); color: #fff; border: 1px solid rgba(255,255,255,.2); }
        .body { padding: 24px 32px 32px; color: #e5e7eb; display: grid; grid-template-columns: 1fr; gap: 18px; }
        .badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .badge { font-size: 12px; padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); }
        .footer { padding: 16px 32px 28px; color: #9ca3af; font-size: 12px; display: flex; justify-content: space-between; align-items: center; }
        .note { color: #cbd5e1; }
        @media (max-width: 640px) { .header { flex-wrap: wrap; } .actions { width: 100%; justify-content: flex-start; } }
        a { text-decoration: none; }
    </style>
    <link rel="icon" href="/images/Pertamina.png">
    <meta name="color-scheme" content="light dark">
</head>
<body>
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="content">
        <div class="card">
            <div class="header">
                <div class="logo" aria-label="Pertamina"></div>
                <div class="title">
                    <h1>KILANG PERTAMINA INTERNASIONAL</h1>
                    <p>Platform Monitoring CCTV • RU VI Balongan</p>
                </div>
                <div class="actions">
                    <a href="{{ url('/user/login') }}" class="btn btn-ghost">User Login</a>
                    <a href="{{ url('/admin/login') }}" class="btn btn-primary">Admin Login</a>
                    <a href="{{ route('register') }}" class="btn btn-ghost">Register</a>
                </div>
            </div>
            <div class="body">
                <div class="badges">
                    <span class="badge">Realtime Stream (HLS)</span>
                    <span class="badge">Interactive OpenStreetMap + Satellite</span>
                    <span class="badge">Roles: Admin & User</span>
                    <span class="badge">Gmail OAuth & SMTP</span>
                    <span class="badge">Notifications & Messaging</span>
                    <span class="badge">Export Excel</span>
                </div>
                <div class="note">Gunakan tombol di kanan untuk mulai login atau registrasi.</div>
            </div>
            <div class="footer">
                <div>© {{ date('Y') }} PT Kilang Pertamina Internasional</div>
                <div>Made with Laravel + React + TypeScript</div>
            </div>
        </div>
    </div>
</body>
</html>

