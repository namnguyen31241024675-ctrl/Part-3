@echo off
title TOEIC Part 3
echo Open http://127.0.0.1:8765/ in your browser.
echo Keep this window open while studying.
node "%~dp0serve.cjs"
if errorlevel 1 pause
