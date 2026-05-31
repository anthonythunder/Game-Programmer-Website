@echo off
echo Starting local Astro dev server...
call npm run dev
if %errorlevel% neq 0 (
    echo.
    echo Server failed to start or was stopped with an error.
    pause
)
