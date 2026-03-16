// 拼豆颜色映射表 (Mard 221色完整色号)
const perlerColors = [
    // A系列
    { name: 'A1', code: 'A1', rgb: [250, 245, 205] },
    { name: 'A2', code: 'A2', rgb: [252, 254, 214] },
    { name: 'A3', code: 'A3', rgb: [252, 255, 146] },
    { name: 'A4', code: 'A4', rgb: [247, 236, 92] },
    { name: 'A5', code: 'A5', rgb: [240, 216, 58] },
    { name: 'A6', code: 'A6', rgb: [253, 169, 81] },
    { name: 'A7', code: 'A7', rgb: [250, 140, 79] },
    { name: 'A8', code: 'A8', rgb: [251, 218, 77] },
    { name: 'A9', code: 'A9', rgb: [247, 157, 95] },
    { name: 'A10', code: 'A10', rgb: [244, 126, 56] },
    { name: 'A11', code: 'A11', rgb: [254, 219, 153] },
    { name: 'A12', code: 'A12', rgb: [253, 162, 118] },
    { name: 'A13', code: 'A13', rgb: [254, 198, 103] },
    { name: 'A14', code: 'A14', rgb: [247, 88, 66] },
    { name: 'A15', code: 'A15', rgb: [251, 246, 94] },
    { name: 'A16', code: 'A16', rgb: [254, 255, 151] },
    { name: 'A17', code: 'A17', rgb: [253, 225, 115] },
    { name: 'A18', code: 'A18', rgb: [252, 191, 128] },
    { name: 'A19', code: 'A19', rgb: [253, 126, 119] },
    { name: 'A20', code: 'A20', rgb: [249, 214, 102] },
    { name: 'A21', code: 'A21', rgb: [250, 227, 147] },
    { name: 'A22', code: 'A22', rgb: [237, 248, 120] },
    { name: 'A23', code: 'A23', rgb: [228, 200, 186] },
    { name: 'A24', code: 'A24', rgb: [243, 246, 169] },
    { name: 'A25', code: 'A25', rgb: [253, 247, 133] },
    { name: 'A26', code: 'A26', rgb: [255, 199, 52] },
    
    // B系列
    { name: 'B1', code: 'B1', rgb: [223, 241, 59] },
    { name: 'B2', code: 'B2', rgb: [100, 243, 67] },
    { name: 'B3', code: 'B3', rgb: [161, 245, 134] },
    { name: 'B4', code: 'B4', rgb: [95, 223, 52] },
    { name: 'B5', code: 'B5', rgb: [57, 225, 88] },
    { name: 'B6', code: 'B6', rgb: [100, 224, 164] },
    { name: 'B7', code: 'B7', rgb: [62, 174, 124] },
    { name: 'B8', code: 'B8', rgb: [29, 155, 84] },
    { name: 'B9', code: 'B9', rgb: [42, 80, 55] },
    { name: 'B10', code: 'B10', rgb: [154, 209, 186] },
    { name: 'B11', code: 'B11', rgb: [98, 112, 50] },
    { name: 'B12', code: 'B12', rgb: [26, 110, 61] },
    { name: 'B13', code: 'B13', rgb: [200, 232, 125] },
    { name: 'B14', code: 'B14', rgb: [171, 232, 79] },
    { name: 'B15', code: 'B15', rgb: [48, 83, 53] },
    { name: 'B16', code: 'B16', rgb: [192, 237, 156] },
    { name: 'B17', code: 'B17', rgb: [158, 179, 62] },
    { name: 'B18', code: 'B18', rgb: [230, 237, 79] },
    { name: 'B19', code: 'B19', rgb: [38, 183, 142] },
    { name: 'B20', code: 'B20', rgb: [203, 236, 207] },
    { name: 'B21', code: 'B21', rgb: [24, 97, 106] },
    { name: 'B22', code: 'B22', rgb: [10, 66, 65] },
    { name: 'B23', code: 'B23', rgb: [52, 59, 26] },
    { name: 'B24', code: 'B24', rgb: [232, 250, 166] },
    { name: 'B25', code: 'B25', rgb: [78, 132, 109] },
    { name: 'B26', code: 'B26', rgb: [144, 124, 53] },
    { name: 'B27', code: 'B27', rgb: [208, 224, 175] },
    { name: 'B28', code: 'B28', rgb: [158, 229, 187] },
    { name: 'B29', code: 'B29', rgb: [198, 223, 95] },
    { name: 'B30', code: 'B30', rgb: [227, 251, 177] },
    { name: 'B31', code: 'B31', rgb: [180, 230, 145] },
    { name: 'B32', code: 'B32', rgb: [146, 173, 96] },
    
    // C系列
    { name: 'C1', code: 'C1', rgb: [240, 254, 228] },
    { name: 'C2', code: 'C2', rgb: [171, 248, 254] },
    { name: 'C3', code: 'C3', rgb: [162, 224, 247] },
    { name: 'C4', code: 'C4', rgb: [68, 205, 251] },
    { name: 'C5', code: 'C5', rgb: [6, 170, 223] },
    { name: 'C6', code: 'C6', rgb: [84, 167, 233] },
    { name: 'C7', code: 'C7', rgb: [57, 119, 202] },
    { name: 'C8', code: 'C8', rgb: [15, 82, 189] },
    { name: 'C9', code: 'C9', rgb: [51, 73, 195] },
    { name: 'C10', code: 'C10', rgb: [60, 188, 227] },
    { name: 'C11', code: 'C11', rgb: [42, 222, 211] },
    { name: 'C12', code: 'C12', rgb: [30, 51, 78] },
    { name: 'C13', code: 'C13', rgb: [205, 231, 254] },
    { name: 'C14', code: 'C14', rgb: [213, 252, 247] },
    { name: 'C15', code: 'C15', rgb: [33, 197, 196] },
    { name: 'C16', code: 'C16', rgb: [24, 88, 162] },
    { name: 'C17', code: 'C17', rgb: [2, 209, 243] },
    { name: 'C18', code: 'C18', rgb: [33, 50, 68] },
    { name: 'C19', code: 'C19', rgb: [24, 134, 157] },
    { name: 'C20', code: 'C20', rgb: [26, 112, 169] },
    { name: 'C21', code: 'C21', rgb: [188, 221, 252] },
    { name: 'C22', code: 'C22', rgb: [107, 177, 187] },
    { name: 'C23', code: 'C23', rgb: [200, 226, 253] },
    { name: 'C24', code: 'C24', rgb: [126, 197, 249] },
    { name: 'C25', code: 'C25', rgb: [169, 232, 224] },
    { name: 'C26', code: 'C26', rgb: [66, 173, 207] },
    { name: 'C27', code: 'C27', rgb: [208, 222, 249] },
    { name: 'C28', code: 'C28', rgb: [189, 206, 232] },
    { name: 'C29', code: 'C29', rgb: [54, 74, 137] },
    
    // D系列
    { name: 'D1', code: 'D1', rgb: [172, 183, 239] },
    { name: 'D2', code: 'D2', rgb: [134, 141, 211] },
    { name: 'D3', code: 'D3', rgb: [53, 84, 175] },
    { name: 'D4', code: 'D4', rgb: [22, 45, 123] },
    { name: 'D5', code: 'D5', rgb: [179, 78, 198] },
    { name: 'D6', code: 'D6', rgb: [179, 123, 220] },
    { name: 'D7', code: 'D7', rgb: [135, 88, 169] },
    { name: 'D8', code: 'D8', rgb: [227, 210, 254] },
    { name: 'D9', code: 'D9', rgb: [213, 185, 244] },
    { name: 'D10', code: 'D10', rgb: [48, 26, 73] },
    { name: 'D11', code: 'D11', rgb: [190, 185, 226] },
    { name: 'D12', code: 'D12', rgb: [220, 153, 206] },
    { name: 'D13', code: 'D13', rgb: [181, 3, 141] },
    { name: 'D14', code: 'D14', rgb: [134, 41, 147] },
    { name: 'D15', code: 'D15', rgb: [47, 31, 140] },
    { name: 'D16', code: 'D16', rgb: [226, 228, 240] },
    { name: 'D17', code: 'D17', rgb: [199, 211, 249] },
    { name: 'D18', code: 'D18', rgb: [154, 100, 184] },
    { name: 'D19', code: 'D19', rgb: [216, 194, 217] },
    { name: 'D20', code: 'D20', rgb: [154, 53, 173] },
    { name: 'D21', code: 'D21', rgb: [148, 5, 149] },
    { name: 'D22', code: 'D22', rgb: [56, 56, 154] },
    { name: 'D23', code: 'D23', rgb: [234, 219, 248] },
    { name: 'D24', code: 'D24', rgb: [118, 138, 225] },
    { name: 'D25', code: 'D25', rgb: [73, 80, 194] },
    { name: 'D26', code: 'D26', rgb: [214, 198, 235] },
    
    // E系列
    { name: 'E1', code: 'E1', rgb: [246, 212, 203] },
    { name: 'E2', code: 'E2', rgb: [252, 193, 221] },
    { name: 'E3', code: 'E3', rgb: [246, 189, 232] },
    { name: 'E4', code: 'E4', rgb: [232, 100, 158] },
    { name: 'E5', code: 'E5', rgb: [240, 86, 159] },
    { name: 'E6', code: 'E6', rgb: [235, 65, 114] },
    { name: 'E7', code: 'E7', rgb: [197, 54, 116] },
    { name: 'E8', code: 'E8', rgb: [253, 219, 233] },
    { name: 'E9', code: 'E9', rgb: [227, 118, 199] },
    { name: 'E10', code: 'E10', rgb: [209, 59, 149] },
    { name: 'E11', code: 'E11', rgb: [247, 218, 212] },
    { name: 'E12', code: 'E12', rgb: [246, 147, 191] },
    { name: 'E13', code: 'E13', rgb: [181, 2, 106] },
    { name: 'E14', code: 'E14', rgb: [250, 212, 191] },
    { name: 'E15', code: 'E15', rgb: [245, 201, 202] },
    { name: 'E16', code: 'E16', rgb: [251, 244, 236] },
    { name: 'E17', code: 'E17', rgb: [247, 227, 236] },
    { name: 'E18', code: 'E18', rgb: [249, 200, 219] },
    { name: 'E19', code: 'E19', rgb: [246, 187, 209] },
    { name: 'E20', code: 'E20', rgb: [215, 203, 206] },
    { name: 'E21', code: 'E21', rgb: [192, 157, 164] },
    { name: 'E22', code: 'E22', rgb: [179, 140, 159] },
    { name: 'E23', code: 'E23', rgb: [147, 125, 138] },
    { name: 'E24', code: 'E24', rgb: [222, 190, 229] },
    
    // F系列
    { name: 'F1', code: 'F1', rgb: [254, 147, 129] },
    { name: 'F2', code: 'F2', rgb: [246, 61, 75] },
    { name: 'F3', code: 'F3', rgb: [238, 78, 62] },
    { name: 'F4', code: 'F4', rgb: [251, 42, 64] },
    { name: 'F5', code: 'F5', rgb: [225, 3, 40] },
    { name: 'F6', code: 'F6', rgb: [145, 54, 53] },
    { name: 'F7', code: 'F7', rgb: [145, 25, 50] },
    { name: 'F8', code: 'F8', rgb: [187, 1, 38] },
    { name: 'F9', code: 'F9', rgb: [224, 103, 122] },
    { name: 'F10', code: 'F10', rgb: [135, 70, 40] },
    { name: 'F11', code: 'F11', rgb: [89, 35, 35] },
    { name: 'F12', code: 'F12', rgb: [243, 83, 107] },
    { name: 'F13', code: 'F13', rgb: [244, 92, 69] },
    { name: 'F14', code: 'F14', rgb: [252, 173, 178] },
    { name: 'F15', code: 'F15', rgb: [213, 5, 39] },
    { name: 'F16', code: 'F16', rgb: [248, 192, 169] },
    { name: 'F17', code: 'F17', rgb: [232, 155, 125] },
    { name: 'F18', code: 'F18', rgb: [208, 127, 74] },
    { name: 'F19', code: 'F19', rgb: [190, 69, 74] },
    { name: 'F20', code: 'F20', rgb: [198, 148, 149] },
    { name: 'F21', code: 'F21', rgb: [242, 184, 198] },
    { name: 'F22', code: 'F22', rgb: [247, 195, 208] },
    { name: 'F23', code: 'F23', rgb: [237, 128, 108] },
    { name: 'F24', code: 'F24', rgb: [224, 157, 175] },
    { name: 'F25', code: 'F25', rgb: [232, 72, 84] },
    
    // G系列
    { name: 'G1', code: 'G1', rgb: [255, 228, 211] },
    { name: 'G2', code: 'G2', rgb: [252, 198, 172] },
    { name: 'G3', code: 'G3', rgb: [241, 196, 165] },
    { name: 'G4', code: 'G4', rgb: [220, 179, 135] },
    { name: 'G5', code: 'G5', rgb: [231, 179, 78] },
    { name: 'G6', code: 'G6', rgb: [227, 160, 20] },
    { name: 'G7', code: 'G7', rgb: [152, 92, 58] },
    { name: 'G8', code: 'G8', rgb: [113, 61, 47] },
    { name: 'G9', code: 'G9', rgb: [228, 182, 133] },
    { name: 'G10', code: 'G10', rgb: [218, 140, 66] },
    { name: 'G11', code: 'G11', rgb: [218, 200, 152] },
    { name: 'G12', code: 'G12', rgb: [254, 201, 147] },
    { name: 'G13', code: 'G13', rgb: [178, 113, 75] },
    { name: 'G14', code: 'G14', rgb: [139, 104, 76] },
    { name: 'G15', code: 'G15', rgb: [246, 248, 227] },
    { name: 'G16', code: 'G16', rgb: [242, 216, 193] },
    { name: 'G17', code: 'G17', rgb: [119, 84, 78] },
    { name: 'G18', code: 'G18', rgb: [255, 227, 213] },
    { name: 'G19', code: 'G19', rgb: [221, 125, 65] },
    { name: 'G20', code: 'G20', rgb: [165, 69, 47] },
    { name: 'G21', code: 'G21', rgb: [179, 133, 97] },
    
    // H系列
    { name: 'H1', code: 'H1', rgb: [255, 255, 255] },
    { name: 'H2', code: 'H2', rgb: [251, 251, 251] },
    { name: 'H3', code: 'H3', rgb: [180, 180, 180] },
    { name: 'H4', code: 'H4', rgb: [135, 135, 135] },
    { name: 'H5', code: 'H5', rgb: [70, 70, 72] },
    { name: 'H6', code: 'H6', rgb: [44, 44, 44] },
    { name: 'H7', code: 'H7', rgb: [1, 1, 1] },
    { name: 'H8', code: 'H8', rgb: [231, 214, 220] },
    { name: 'H9', code: 'H9', rgb: [239, 237, 238] },
    { name: 'H10', code: 'H10', rgb: [235, 235, 235] },
    { name: 'H11', code: 'H11', rgb: [205, 205, 205] },
    { name: 'H12', code: 'H12', rgb: [253, 246, 238] },
    { name: 'H13', code: 'H13', rgb: [244, 237, 241] },
    { name: 'H14', code: 'H14', rgb: [206, 215, 212] },
    { name: 'H15', code: 'H15', rgb: [154, 166, 166] },
    { name: 'H16', code: 'H16', rgb: [27, 18, 19] },
    { name: 'H17', code: 'H17', rgb: [240, 238, 239] },
    { name: 'H18', code: 'H18', rgb: [252, 255, 246] },
    { name: 'H19', code: 'H19', rgb: [242, 238, 229] },
    { name: 'H20', code: 'H20', rgb: [150, 160, 159] },
    { name: 'H21', code: 'H21', rgb: [248, 251, 230] },
    { name: 'H22', code: 'H22', rgb: [202, 202, 210] },
    { name: 'H23', code: 'H23', rgb: [155, 156, 148] },
    
    // M系列
    { name: 'M1', code: 'M1', rgb: [187, 198, 182] },
    { name: 'M2', code: 'M2', rgb: [144, 153, 148] },
    { name: 'M3', code: 'M3', rgb: [105, 126, 129] },
    { name: 'M4', code: 'M4', rgb: [224, 212, 188] },
    { name: 'M5', code: 'M5', rgb: [209, 204, 175] },
    { name: 'M6', code: 'M6', rgb: [176, 170, 134] },
    { name: 'M7', code: 'M7', rgb: [176, 167, 150] },
    { name: 'M8', code: 'M8', rgb: [174, 128, 130] },
    { name: 'M9', code: 'M9', rgb: [166, 136, 98] },
    { name: 'M10', code: 'M10', rgb: [196, 179, 187] },
    { name: 'M11', code: 'M11', rgb: [157, 118, 147] },
    { name: 'M12', code: 'M12', rgb: [100, 75, 81] },
    { name: 'M13', code: 'M13', rgb: [199, 146, 102] },
    { name: 'M14', code: 'M14', rgb: [194, 117, 99] },
    { name: 'M15', code: 'M15', rgb: [116, 125, 122] }
];

// 板子尺寸配置
const boardSizes = {
    '100x100': { width: 100, height: 100 },
    '52x52': { width: 52, height: 52 },
    '40x40': { width: 40, height: 40 },
    '30x30': { width: 30, height: 30 },
    '20x20': { width: 20, height: 20 }
};

let currentImage = null;
let currentBoardSize = '52x52';
let pixelData = [];
let colorLegend = [];

// DOM 元素
const imageUpload = document.getElementById('image-upload');
const boardSizeSelect = document.getElementById('board-size');
const convertBtn = document.getElementById('convert-btn');
const previewContainer = document.getElementById('preview-container');
const colorLegendContainer = document.getElementById('color-legend-container');

// 事件监听
imageUpload.addEventListener('change', handleImageUpload);
boardSizeSelect.addEventListener('change', handleBoardSizeChange);
convertBtn.addEventListener('click', convertToPerler);

// 处理图片上传
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            currentImage = img;
            convertToPerler();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 处理板子尺寸变化
function handleBoardSizeChange(e) {
    currentBoardSize = e.target.value;
    if (currentImage) {
        convertToPerler();
    }
}

// 转换为拼豆
function convertToPerler() {
    if (!currentImage) {
        alert('请先上传图片');
        return;
    }
    
    const size = boardSizes[currentBoardSize];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = size.width;
    canvas.height = size.height;
    
    // 缩放图片到板子尺寸
    ctx.drawImage(currentImage, 0, 0, size.width, size.height);
    
    // 获取像素数据
    const imageData = ctx.getImageData(0, 0, size.width, size.height);
    pixelData = [];
    const colorCount = {};
    
    for (let y = 0; y < size.height; y++) {
        for (let x = 0; x < size.width; x++) {
            const index = (y * size.width + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];
            
            const closestColor = findClosestColor(r, g, b);
            pixelData.push(closestColor);
            
            // 统计颜色使用数量
            if (colorCount[closestColor.code]) {
                colorCount[closestColor.code]++;
            } else {
                colorCount[closestColor.code] = 1;
            }
        }
    }
    
    // 生成颜色图例（包含使用数量）
    colorLegend = [];
    for (const code in colorCount) {
        const color = perlerColors.find(c => c.code === code);
        if (color) {
            colorLegend.push({
                ...color,
                count: colorCount[code]
            });
        }
    }
    
    // 渲染预览
    renderPreview(size.width, size.height);
    
    // 渲染颜色图例
    renderColorLegend();
}

// 找到最接近的拼豆颜色
function findClosestColor(r, g, b) {
    let closestColor = perlerColors[0];
    let minDistance = Infinity;
    
    for (const color of perlerColors) {
        const distance = Math.sqrt(
            Math.pow(r - color.rgb[0], 2) +
            Math.pow(g - color.rgb[1], 2) +
            Math.pow(b - color.rgb[2], 2)
        );
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    }
    
    return closestColor;
}

// 渲染预览
function renderPreview(width, height) {
    previewContainer.innerHTML = '';
    
    const pixelGrid = document.createElement('div');
    pixelGrid.className = 'pixel-grid';
    pixelGrid.style.gridTemplateColumns = `repeat(${width}, 20px)`;
    pixelGrid.style.gridTemplateRows = `repeat(${height}, 20px)`;
    
    for (let i = 0; i < pixelData.length; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = `rgb(${pixelData[i].rgb.join(',')})`;
        pixel.dataset.colorCode = pixelData[i].code;
        
        // 添加色号文本
        const colorCodeText = document.createElement('span');
        colorCodeText.className = 'pixel-code';
        colorCodeText.textContent = pixelData[i].code;
        pixel.appendChild(colorCodeText);
        
        pixel.addEventListener('click', function() {
            highlightColor(this.dataset.colorCode);
        });
        
        pixelGrid.appendChild(pixel);
    }
    
    previewContainer.appendChild(pixelGrid);
}

// 渲染颜色图例
function renderColorLegend() {
    colorLegendContainer.innerHTML = '';
    
    for (const color of colorLegend) {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.dataset.colorCode = color.code;
        
        const colorSwatch = document.createElement('div');
        colorSwatch.className = 'color-swatch';
        colorSwatch.style.backgroundColor = `rgb(${color.rgb.join(',')})`;
        
        const colorCode = document.createElement('span');
        colorCode.className = 'color-code';
        colorCode.textContent = color.code;
        
        const colorName = document.createElement('span');
        colorName.textContent = color.name;
        
        const colorCount = document.createElement('span');
        colorCount.className = 'color-count';
        colorCount.textContent = `x${color.count}`;
        
        colorItem.appendChild(colorSwatch);
        colorItem.appendChild(colorCode);
        colorItem.appendChild(colorName);
        colorItem.appendChild(colorCount);
        
        colorItem.addEventListener('click', function() {
            highlightColor(this.dataset.colorCode);
        });
        
        colorLegendContainer.appendChild(colorItem);
    }
}

// 高亮显示特定颜色
function highlightColor(colorCode) {
    const pixels = document.querySelectorAll('.pixel');
    const colorItems = document.querySelectorAll('.color-item');
    
    pixels.forEach(pixel => {
        if (pixel.dataset.colorCode === colorCode) {
            pixel.classList.add('highlighted');
            pixel.classList.remove('grayed-out');
        } else {
            pixel.classList.remove('highlighted');
            pixel.classList.add('grayed-out');
        }
    });
    
    colorItems.forEach(item => {
        if (item.dataset.colorCode === colorCode) {
            item.style.backgroundColor = '#e0e0e0';
        } else {
            item.style.backgroundColor = '';
        }
    });
}
