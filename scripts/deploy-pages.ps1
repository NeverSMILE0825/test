# Build and publish to GitHub Pages (gh-pages branch)
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

if (-not $env:VITE_PROJECT_ID) {
  $env:VITE_PROJECT_ID = '8bd967a149ecc56b43d9725e728d7153'
}

Write-Host 'Building...'
npm run build
Copy-Item dist/index.html dist/404.html -Force
New-Item -ItemType File -Path dist/.nojekyll -Force | Out-Null

$work = Join-Path $env:TEMP ("test-gh-pages-" + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $work | Out-Null

try {
  Copy-Item -Path (Join-Path $root 'dist\*') -Destination $work -Recurse -Force
  if (Test-Path (Join-Path $root 'dist\.nojekyll')) {
    Copy-Item (Join-Path $root 'dist\.nojekyll') $work -Force
  }

  Push-Location $work
  git init -b gh-pages | Out-Null
  git add -A
  git -c user.name='NeverSMILE0825' -c user.email='NeverSMILE0825@users.noreply.github.com' commit -m ("Deploy site " + (Get-Date -Format o)) | Out-Null
  git remote add origin https://github.com/NeverSMILE0825/test.git
  git push -f origin gh-pages
  Write-Host 'Published: https://neversmile0825.github.io/test/'
}
finally {
  Pop-Location -ErrorAction SilentlyContinue
  Remove-Item -Recurse -Force $work -ErrorAction SilentlyContinue
}
