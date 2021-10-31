// window.alert("hi");
// 创建对象
var map = new BMapGL.Map("container");
// 创建点坐标
var point = new BMapGL.Point(118.09519697640226, 24.580204352692867);
// 初始化地图，设置中心点坐标和地图级别
map.centerAndZoom(point,15);
// 鼠标缩放可用
map.enableScrollWheelZoom(true);

// 创建点标记
var p = new BMapGL.Point(118.096, 24.581)
var marker1 = new BMapGL.Marker(p);
// 点拖动可用
marker1.enableDragging(true);
// 在地图上添加点标记
map.addOverlay(marker1);



// 1.添加地图
// 2.增加额外的地图，需要修改css文件
// 3.在地图上添加点，及可拖动的点
// 4.更换点图标（CORS错误）
