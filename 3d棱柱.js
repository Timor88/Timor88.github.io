// 随机颜色
var getRandomColor = function () {
    return (
      "#" +
      (function (color) {
        return (color += "0123456789abcdef"[Math.floor(Math.random() * 16)]) &&
          color.length == 6
          ? color
          : arguments.callee(color);
      })("")
    );
};
// 棱柱图
function pris(name,height){
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    var bd = new BMapGL.Boundary();
    bd.get(name, function (rs) {
        var count = rs.boundaries.length; //行政区域的点有多少个
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            // window.alert(count);
            var path = [];
            str = rs.boundaries[i].replace(' ', '');
            points = str.split(';');
            for (var j = 0; j < points.length; j++) {
                var lng = points[j].split(',')[0];
                var lat = points[j].split(',')[1];
                path.push(new BMapGL.Point(lng, lat));
            }
            // 参数：路径，高度，颜色：{顶，透明度，侧，透明度}
            var prism = new BMapGL.Prism(path, height, {
                topFillColor: color1,
                topFillOpacity: 0.5,
                sideFillColor: color2,
                sideFillOpacity: 0.9

            });
            map.addOverlay(prism);
        }
    });
}

json = [
    {"省份":"广东","gdp":"88009.86"},
    {"省份":"江苏","gdp":"84895.7"},
    {"省份":"山东","gdp":"60439.2"},
    {"省份":"浙江","gdp":"52853"},
    {"省份":"河南","gdp":"44016.24"},
    {"省份":"四川","gdp":"38998.66"},
    {"省份":"福建","gdp":"35196.61"},
    {"省份":"湖北","gdp":"34731.56"},
    {"省份":"湖南","gdp":"33222.57"},
    {"省份":"安徽","gdp":"31874.8"},
    {"省份":"上海","gdp":"30866.73"},
    {"省份":"北京","gdp":"29753"},
    {"省份":"河北","gdp":"29060.7"},
    {"省份":"江西","gdp":"21601"},
    {"省份":"陕西","gdp":"21193.18"},
    {"省份":"重庆","gdp":"19951.89"},
    {"省份":"辽宁","gdp":"19722.7"},
    {"省份":"云南","gdp":"19607.76"},
    {"省份":"广西","gdp":"18046.96"},
    {"省份":"山西","gdp":"15584.85"},
    {"省份":"内蒙古","gdp":"14491.5"},
    {"省份":"贵州","gdp":"13985.53"},
    {"省份":"天津","gdp":"11417.55"},
    {"省份":"新疆","gdp":"11396.14"},
    {"省份":"黑龙江","gdp":"9747.6"},
    {"省份":"吉林","gdp":"9536.61"},
    {"省份":"甘肃","gdp":"7401"},
    {"省份":"海南","gdp":"4508.06"},
    {"省份":"宁夏","gdp":"3180.64"},
    {"省份":"青海","gdp":"2401.8"},
    {"省份":"西藏","gdp":"1440.35"}
];
// 百度地图API功能
var map = new BMapGL.Map("container");
var point = new BMapGL.Point(116.404, 39.925);
var p = new BMapGL.Point(118.09519697640226, 24.580204352692867);
map.centerAndZoom(p, 10);
// 设置视角倾斜
map.setTilt(50);
map.enableScrollWheelZoom();
// pris("福建")
// pris("河南")
// pris("北京")
for (i in json){
    pris(json[i]["省份"],json[i]["gdp"]);
    console.log(json[i]["省份"])
}
 
