<template>
  <div>
    <div ref="map" style="height: 500px;"></div>
  </div>
</template>

<script>
export default ({
  name: "gaodeView",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 创建地图对象
      var map = new AMap.Map(this.$refs.map, {
        zoom: 14,
        center: [116.39, 39.9]
      });

      // 解析XML数据
      var kmlString = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document id="root_doc">
    <Document id="______">
      <name>乡镇</name>
      <Placemark id="______.1">
        <name>青年路街道</name>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <coordinates>
                114.01395048662,34.7584291986628,0
                114.014492486943,34.7583002003184,0
                114.016718487064,34.7597171820816,0
                114.017441486239,34.7601771757711,0
                114.018993486691,34.7599951786064,0
                114.02219648643,34.7596191829986,0
                114.023904486518,34.7594181859161,0
                114.024218486337,34.7593811863227,0
                114.027500486617,34.7560732291729,0
                114.035256486882,34.7535282616835,0
                114.039579486354,34.7489693206875,0
                114.042111486797,34.7462983553593,0
                114.043762486983,34.7445563779028,0
                114.045078486535,34.743168395885,0
                114.044767487089,34.734762503953,0
                114.041846486483,34.7335345198359,0
                114.042858486262,34.7314785465701,0
                114.045495486287,34.7261186153187,0
                114.045711487095,34.72601561639,0
                114.047642486765,34.7228016584122,0
                114.050439486624,34.71814371788,0
                114.042327486707,34.7182087169345,0
                114.041598486786,34.7182957160094,0
                114.028672486229,34.7198276966539,0
                114.028629486572,34.7198326961403,0
                114.025702487017,34.7201786922105,0
                114.025686486225,34.7201806917013,0
                114.022079486254,34.7206066862466,0
                114.022005486635,34.7206156861233,0
                114.017814486508,34.721109679575,0
                114.017499486864,34.7211476790626,0
                114.017286486428,34.7211726790463,0
                114.013511486228,34.721617673652,0
                114.013155486576,34.7216596725546,0
                114.011570486513,34.7219386691532,0
                114.0112404868,34.721997668361,0
                114.00289648708,34.7234686493393,0
                114.002704486561,34.7235016492167,0
                113.998179486523,34.7242996390206,0
                113.997939486324,34.7243416380374,0
                113.997812487001,34.7243646376658,0
                113.99626948677,34.7236716469224,0
                113.994621486957,34.7229326562424,0
                113.984511486525,34.7183947151509,0
                113.983464486587,34.718367715531,0
                113.983691486367,34.7246686343994,0
                113.983852486924,34.7247686329835,0
                113.991671486937,34.7296395700929,0
                113.991723486816,34.7296725697219,0
                113.990431486655,34.7301315635296,0
                113.996888487086,34.7349535011479,0
                113.996847487078,34.7353864962269,0
                113.996322486473,34.7410054235198,0
                113.994577486576,34.7434153923917,0
                113.994226486947,34.7481693311199,0
                113.993547486356,34.7481653312782,0
                113.993988486397,34.7488213226776,0
                113.993789487104,34.7505513003226,0
                113.990463486442,34.7534492627011,0
                113.988714486347,34.7549742430194,0
                113.990274486296,34.7577942066862,0
                113.990955486537,34.7590241911295,0
                113.994212486703,34.7621901503032,0
                113.996867486271,34.762907141185,0
                113.997914487108,34.7631891371523,0
                114.003768487116,34.7625441459158,0
                114.005216486912,34.7623841474697,0
                114.008523486409,34.7597241821171,0
                114.01395048662,34.7584291986628,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
    </Document>
  </Document>
</kml>`
      var parser = new DOMParser();
      var kml = parser.parseFromString(kmlString, 'text/xml');

      // 获取多边形经纬度数据
      var coordinatesRaw = kml.getElementsByTagName('coordinates')[0].textContent.trim();
      var coordinatesArray = coordinatesRaw.split('\n');
      var coordinates = [];
      for (var i = 0; i < coordinatesArray.length; i++) {
        var coordinateRaw = coordinatesArray[i].trim().split(',');
        var coordinate = [parseFloat(coordinateRaw[0]), parseFloat(coordinateRaw[1])];
        coordinates.push(coordinate);
      }
      console.log(coordinates);
      // 在高德地图上绘制多边形
      var polygon = new AMap.Polygon({
        map: map,
        path: coordinates,
        fillColor: '#FF0000', // 填充颜色
        strokeColor: '#0000FF', // 边框颜色
        strokeWeight: 3, // 边框宽度
        strokeOpacity: 0.5, // 边框透明度
        fillOpacity: 0.2, // 填充透明度
        zIndex: -9999
      });
    }
  }
})
</script>
<style scoped>
  #container {
    width: 1000px;
    height: 1000px;
  }
</style>