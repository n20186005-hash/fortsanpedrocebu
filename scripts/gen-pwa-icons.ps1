Add-Type -AssemblyName System.Drawing
$srcPath = 'c:/Users/Administrator/Documents/GitHub/fortsanpedrocebu/public/icons/apple-touch-icon.png'
$outDir = 'c:/Users/Administrator/Documents/GitHub/fortsanpedrocebu/public/icons'
$src = [System.Drawing.Image]::FromFile($srcPath)
foreach ($size in @(192, 512)) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.DrawImage($src, 0, 0, $size, $size)
  $out = Join-Path $outDir "icon-$size.png"
  $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
  Write-Output "generated: $out"
}
$src.Dispose()
