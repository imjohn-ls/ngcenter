<template>
  <div class="analyzeSystem">
    <ul>
      <li>
        <div class="ctitle">
          <div class="ctitle-left">CPU Usage %</div>
          <div class="ctitle-right">
            icon
          </div>
        </div>
        <div id="myChart" style="height:228px;width:300px;"></div>
      </li>
      <li>
        <div class="ctitle">
          <div class="ctitle-left">CPU Usage %</div>
          <div class="ctitle-right">
            icon
          </div>
        </div>
        <div id="myChart2" style="height:228px;width: 100%;"></div>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import echarts from "echarts";
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

export default {
  name: "my-chart",
  computed: {
    visSetOption() {
      return {
        /*title: {
          text: '折线图',
          subtext: '模拟数据',
          x: 'center'
        },*/
        legend:{
          show:false,
          orient: 'vertical',
          x: 'center',
          y:'bottom',
          data: ['total', 'dfs_used'],
          color:['#2db7f5','#ff6600'],
        },
        xAxis: {
          type: "category", // 还有其他的type，可以去官网喵两眼哦
          data: ["23：30", "23：40", "23：50", "6：Nov", "00：10", "00：20"], // x轴数据
          name: "", // x轴名称
          // x轴名称样式
          nameTextStyle: {
            fontSize: 6
          },
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: '#912CEE'
            }
          },
          // 设置X轴数据旋转倾斜
          axisLabel: {
            rotate: 0, // 旋转角度
            interval: 0  //设置X轴数据间隔几个显示一个，为0表示都显示
          },
          // boundaryGap值为false的时候，折线第一个点在y轴上
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          data: [0.00, 0.05, 0.1, 0.15],
          name: "", // y轴名称
          splitLine: { show: false }, //网格线显示
          // y轴名称样式
          nameTextStyle: {
            fontSize: 6
          },
          min:0.00, // 设置y轴刻度的最小值
          max:0.20,  // 设置y轴刻度的最大值
          splitNumber:6,  // 设置y轴刻度间隔个数
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#87CEFA'
            }
          },
        },
        tooltip: {
          trigger: "axis" /*axis   item   none三个值 悬浮框的样式*/
        },
        //工具框，可以选择
        toolbox: {
          feature: {
            brush: {
              type:'rect'
            } //下载工具
          }
        },
        //设置canvas构造内容的边距
        grid: {
          left: "4%",
          right: "12%",
          bottom: "3%",
          containLabel: true
        },
        label: {
          normal: {
            show: true
          }
        },
        series: [
          {
            name: "",
            data: [0.0, 0.1, 0.15, 0.2, 0.15, 0.1, 0.0],
            type: "line"
          },
          {
            name: "",
            data: [0.2, 0.15, 0.1, 0.0, 0.0, 0.0, 0.0],
            type: "line"
          }
        ]
      };
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.LineChart();
    })

  },
  methods: {
    LineChart() {
      this.myChart = echarts.init(document.getElementById("myChart"));
      this.myChart2 = echarts.init(document.getElementById("myChart2"));
      this.myChart.setOption(this.visSetOption);
      this.myChart2.setOption(this.visSetOption);
    }
  }
};
</script>

<style scoped>
@import "my-chart.less";
</style>
