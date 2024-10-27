function checkDarkModeExtension(callback) {
    const testElement = document.createElement('div');
    testElement.id = 'test-element';
    testElement.style.position = 'absolute';
    testElement.style.top = '-9999px';
    testElement.style.left = '-9999px';
    testElement.style.width = '1px';
    testElement.style.height = '1px';
    testElement.style.backgroundColor = 'rgb(255, 255, 255)';
    document.body.appendChild(testElement);

    // 给扩展一些时间来修改元素
    setTimeout(() => {
        const computedStyle = window.getComputedStyle(testElement);
        const backgroundColor = computedStyle.backgroundColor;
        const textColor = computedStyle.color;

        const isDarkMode = backgroundColor !== 'rgb(255, 255, 255)' || textColor !== 'rgb(0, 0, 0)';

        document.body.removeChild(testElement);

        // 调用回调函数，传递检测结果
        callback(isDarkMode);
    }, 50); // 等待50毫秒
}

// 如果需要在其他文件中使用这个函数，可以将其导出
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = checkDarkModeExtension;
}
