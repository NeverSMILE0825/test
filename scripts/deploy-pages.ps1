# Build and publish to GitHub Pages (gh-pages branch)
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

$env:VITE_PROJECT_ID = if ($env:VITE_PROJECT_ID) { $env:VITE_PROJECT_ID } else { '8bd967a149ecc56b43d9725e728d7153' }

Write-Host 'Installing deps...'
npm ci

Write-Host 'Building...'
npm run build

# Ensure SPA fallback for GitHub Pages
Copy-Item dist/index.html dist/404.html -Force

$work = Join-Path $env:TEMP "test-gh-pages-$(Get-Random)"
New-Item -ItemType Directory -Path $work | Out-Null

try {
  git clone --depth 1 --branch gh-pages https://github.com/NeverSMILE0825/test.git $work 2>$null
  if ($LASTEXITCODE -ne 0) {
    git clone --depth 1 https://github.com/NeverSMILE0825/test.git $work
    Push-Location $work
    git checkout --orphan gh-pages
    git rm -rf . 2>$null
  } else {
    Push-Location $work
    Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force
  }

  Copy-Item -Path (Join-Path (Split-Path $PSScriptRoot -Parent) 'dist\*') -Destination $work -Recurse -Force
  ' ' | Set-Content -Path (Join-Path $work '.nojekyll') -NoNewline

  git add -A
  $status = git status --porcelain
  if (-not $status) {
    Write-Host 'No changes to publish.'
  } else {
    git -c user.name='NeverSMILE0825' -c user.email='NeverSMILE0825@users.noreply.github.com' commit -m "Deploy site $(Get-Date -Format o)"
    git push -u origin gh-pages
    Write-Host 'Published: https://neversmile0825.github.io/test/'
  }
}
finally {
  Pop-Location -ErrorAction SilentlyContinue
  Remove-Item -Recurse -Force $work -ErrorAction SilentlyContinue
}
