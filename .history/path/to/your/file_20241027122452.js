// 检查是否有深色模式扩展运行
function checkDarkModeExtension() {
  // 创建一个测试元素
  const testElement = document.createElement('div');
  testElement.style.display = 'none';
  document.body.appendChild(testElement);

  // 检查元素的计算样式
  const computedStyle = window.getComputedStyle(testElement);
  const backgroundColor = computedStyle.backgroundColor;

  // 移除测试元素
  document.body.removeChild(testElement);

  // 如果背景颜色被改变,可能有深色模式扩展在运行
  return backgroundColor !== 'rgb(255, 255, 255)';
}

// 使用函数
if (checkDarkModeExtension()) {
  console.log('可能有深色模式扩展在运行');
} else {
  console.log('没有检测到深色模式扩展');
}
