# Git Account Manager for Windows PowerShell
# Usage: .\git-account-manager.ps1 personal|office

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("personal", "office")]
    [string]$Account
)

switch ($Account) {
    "personal" {
        Write-Host "Switching to Personal GitHub Account..." -ForegroundColor Green
        git config --global user.name "PremShakti"
        git config --global user.email "premshakti.ps@gmail.com"
        Write-Host "✓ User: PremShakti" -ForegroundColor Green
        Write-Host "✓ Email: premshakti.ps@gmail.com" -ForegroundColor Green
    }
    "office" {
        Write-Host "Switching to Office GitHub Account..." -ForegroundColor Blue
        git config --global user.name "premsds"
        git config --global user.email "prem.sds@outlook.com"
        Write-Host "✓ User: premsds" -ForegroundColor Blue
        Write-Host "✓ Email: prem.sds@outlook.com" -ForegroundColor Blue
    }
}

Write-Host "`nCurrent Git Configuration:" -ForegroundColor Yellow
git config --global user.name
git config --global user.email