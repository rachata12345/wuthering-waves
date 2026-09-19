@echo off
chcp 65001 >nul
title ส่งโค้ดขึ้น GitHub อัตโนมัติ
color 0b

echo =======================================================
echo     ระบบส่งโค้ดขึ้น GitHub อัตโนมัติ (100%% Auto Push)
echo =======================================================
echo.

set "PATH=C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;%PATH%"
cd /d "C:\Users\Acer\OneDrive - Rajamangala University of Technology Lanna\Desktop\เก็บโค้ด"

echo [1/4] กำลังตรวจสอบไฟล์ทั้งหมด...
git add -A

echo [2/4] กำลังบันทึกโค้ด (Commit)...
git commit -m "feat: Upload portfolio and wuthering waves"

echo [3/4] กำลังตั้งค่า Branch และ GitHub Remote...
git branch -M main
git remote set-url origin https://github.com/rachata12345/wuthering-waves.git

echo [4/4] กำลังส่งโค้ดขึ้น https://github.com/rachata12345/wuthering-waves...
echo (หากมีหน้าต่างเด้งขึ้นมา ให้กดปุ่ม Sign in with browser สีเขียว 1 ครั้งครับ)
echo.
git push -u origin main --force

echo.
echo =======================================================
if %ERRORLEVEL% EQU 0 (
    color 0a
    echo    ส่งโค้ดขึ้น GitHub สำเร็จเรียบร้อย 100%% แล้วครับ!
    echo    ไปที่ Vercel แล้วกด Deploy ได้ทันทีครับ
) else (
    echo    หากติดปัญหา ลองตรวจสอบการยืนยันตัวตนในเบราว์เซอร์นะครับ
)
echo =======================================================
echo.
pause
