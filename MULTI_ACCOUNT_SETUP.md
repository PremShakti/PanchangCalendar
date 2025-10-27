# Multi-Account Git Setup Guide

## Method 1: Repository-Specific Configuration (Recommended for HTTPS)

### For Personal Repositories:
1. Clone with personal account:
   ```
   git clone https://github.com/PremShakti/repo-name.git
   cd repo-name
   git config user.name "PremShakti"
   git config user.email "premshakti.ps@gmail.com"
   ```

### For Office Repositories:
1. Clone with office account:
   ```
   git clone https://github.com/office-org/repo-name.git
   cd repo-name
   git config user.name "premsds"
   git config user.email "prem.sds@outlook.com"
   ```

## Method 2: Directory-Based Configuration

Create different directories for personal and office projects:
- D:\Personal\
- D:\Office\

### Setup conditional Git config:
1. Edit global git config: `git config --global --edit`
2. Add these sections:

```
[includeIf "gitdir:D:/Personal/"]
    path = ~/.gitconfig-personal

[includeIf "gitdir:D:/Office/"]
    path = ~/.gitconfig-office
```

## Method 3: Use Account Manager Script

Run the script we created:
```
# Switch to personal account
.\git-account-manager.ps1 personal

# Switch to office account  
.\git-account-manager.ps1 office
```

## Method 4: Quick Commands (Add to Profile)

Add these functions to your PowerShell profile:
```powershell
function Set-GitPersonal {
    git config --global user.name "PremShakti"
    git config --global user.email "premshakti.ps@gmail.com"
    Write-Host "Switched to Personal Account" -ForegroundColor Green
}

function Set-GitOffice {
    git config --global user.name "premsds" 
    git config --global user.email "prem.sds@outlook.com"
    Write-Host "Switched to Office Account" -ForegroundColor Blue
}
```

## Current Repository Setup
For your current repository (PanchangCalendar):
```
git config user.name "PremShakti"
git config user.email "premshakti.ps@gmail.com"
```