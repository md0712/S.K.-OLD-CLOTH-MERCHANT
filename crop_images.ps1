Add-Type -AssemblyName System.Drawing

$sourceDir = "C:\Users\acer\.gemini\antigravity-ide\brain\387c9f1f-5472-4b35-873c-23171cb22707\.user_uploaded"
$targetPublic = "c:\Users\acer\Documents\Web 01\frontend\public\images"

New-Item -ItemType Directory -Force -Path "$targetPublic\hero" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetPublic\products" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetPublic\process" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetPublic\gallery" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetPublic\about" | Out-Null

Write-Host "Cropping images from user reference files..."

# 1. 2x2 Showcase Image: media_1791472712141.jpg (1024 x 682)
$img4Path = Join-Path $sourceDir "media_1791472712141.jpg"
if (Test-Path $img4Path) {
    $img4 = [System.Drawing.Bitmap]::FromFile($img4Path)
    $w = [int]($img4.Width / 2)
    $h = [int]($img4.Height / 2)

    # Top-Left: Warehouse Bales
    $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $c = $img4.Clone($rect, $img4.PixelFormat)
    $c.Save("$targetPublic\hero\warehouse-hero.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\about\warehouse-stock.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\warehouse-bales.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Top-Right: Men's Racks & Denim
    $rect = New-Object System.Drawing.Rectangle($w, 0, $w, $h)
    $c = $img4.Clone($rect, $img4.PixelFormat)
    $c.Save("$targetPublic\hero\clothing-racks.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\products\men.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\mens-collection.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Bottom-Left: Women & Kids
    $rect = New-Object System.Drawing.Rectangle(0, $h, $w, $h)
    $c = $img4.Clone($rect, $img4.PixelFormat)
    $c.Save("$targetPublic\products\women.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\womens-collection.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Bottom-Right: Folded Garments & Fabrics / Jackets
    $rect = New-Object System.Drawing.Rectangle($w, $h, $w, $h)
    $c = $img4.Clone($rect, $img4.PixelFormat)
    $c.Save("$targetPublic\products\garments.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\folded-garments.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    $img4.Dispose()
    Write-Host "Completed 2x2 Showcase cropping"
}

# 2. 3x4 Process & Collection Grid: media_1791472712100.jpg (1024 x 935)
$imgGridPath = Join-Path $sourceDir "media_1791472712100.jpg"
if (Test-Path $imgGridPath) {
    $imgGrid = [System.Drawing.Bitmap]::FromFile($imgGridPath)
    # The grid has 3 columns and 4 rows (plus bottom banner)
    # Height of 4 image rows is approx 875px (each ~218px)
    $cellW = [int]($imgGrid.Width / 3)
    $cellH = [int](875 / 4)

    # Row 0: Bales, Quality Checking, Sorted & Graded
    # Col 0: Clothing Bales
    $r = New-Object System.Drawing.Rectangle(0, 0, $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\bales.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\clothing-bales-ready.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 1: Quality Checking & Sorting
    $r = New-Object System.Drawing.Rectangle($cellW, 0, $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\sorting.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\quality-checking.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 2: Sorted & Graded Stock
    $r = New-Object System.Drawing.Rectangle(($cellW * 2), 0, $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\grading.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\sorted-graded.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Row 1: Packing Process, Packed & Labeled, Ready for Dispatch
    # Col 0: Packing Process
    $r = New-Object System.Drawing.Rectangle(0, $cellH, $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\packing.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\packing-process.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 1: Packed & Labeled
    $r = New-Object System.Drawing.Rectangle($cellW, $cellH, $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\labeling.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\packed-labeled.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 2: Ready for Dispatch
    $r = New-Object System.Drawing.Rectangle(($cellW * 2), $cellH, $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\dispatch.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\ready-dispatch.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Row 2: Loading to Transport, On the Way, Safe Delivery
    # Col 0: Loading to Transport
    $r = New-Object System.Drawing.Rectangle(0, ($cellH * 2), $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\loading.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\loading-transport.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 1: On the Way (Truck)
    $r = New-Object System.Drawing.Rectangle($cellW, ($cellH * 2), $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\transport.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\transport-truck.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 2: Safe & Secure Transportation
    $r = New-Object System.Drawing.Rectangle(($cellW * 2), ($cellH * 2), $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\process\delivery.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\safe-transport.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Row 3: Men's, Women's, Kids' Collections
    # Col 0: Men's Collection
    $r = New-Object System.Drawing.Rectangle(0, ($cellH * 3), $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\products\jackets.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\mens-hangers.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 1: Women's Collection
    $r = New-Object System.Drawing.Rectangle($cellW, ($cellH * 3), $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\products\women-hangers.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\womens-hangers.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    # Col 2: Kids' Collection
    $r = New-Object System.Drawing.Rectangle(($cellW * 2), ($cellH * 3), $cellW, $cellH)
    $c = $imgGrid.Clone($r, $imgGrid.PixelFormat)
    $c.Save("$targetPublic\products\kids.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\kids-collection.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()

    $imgGrid.Dispose()
    Write-Host "Completed 3x4 Grid cropping"
}

# 3. Also copy Shoes & Accessories image from sample 1 (mockup) or create curated graphic
$mockupPath = Join-Path $sourceDir "media_1791472711995.jpg"
if (Test-Path $mockupPath) {
    $imgMock = [System.Drawing.Bitmap]::FromFile($mockupPath)
    # The shoes card in mockup is approximately at x=552, y=465, w=90, h=87 (in 682x1024)
    # Let's extract shoes from mockup
    $rShoes = New-Object System.Drawing.Rectangle(550, 465, 92, 88)
    $c = $imgMock.Clone($rShoes, $imgMock.PixelFormat)
    $c.Save("$targetPublic\products\shoes.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Save("$targetPublic\gallery\shoes-accessories.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $c.Dispose()
    $imgMock.Dispose()
    Write-Host "Completed Shoes extraction"
}

Write-Host "All reference images prepared successfully!"
