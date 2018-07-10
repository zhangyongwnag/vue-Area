<template>
  <div style="padding-top: 200px;">
    <select v-model="provinceStatus">
      <option disabled value="请选择省">请选择省</option>
      <option v-for="(item,index) in provinceList" :value="item">{{item.name}}</option>
    </select>
    <select v-model="cityStatus">
      <option disabled value="请选择市">请选择市</option>
      <option v-for="(item,index) in cityListAll" :value="item">{{item.name}}</option>
    </select>
    <select v-model="areaStatus">
      <option disabled value="请选择区、县">请选择区、县</option>
      <option v-for="(item,index) in areaListAll" :value="item">{{item.name}}</option>
    </select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        provinceList:[
          {
            id:1000,
            name:'内蒙古'
          },
          {
            id:1001,
            name:'山西省'
          },
          {
            id:1002,
            name:'宁夏省'
          },
          {
            id:1003,
            name:'四川省'
          },
          {
            id:1004,
            name:'北京市'
          },
        ],
        cityList:[
          {
            cid:1000,
            name:'包头市',
            aid:10000,
          },
          {
            cid:1000,
            name:'呼和浩特市',
            aid:10001,
          },
          {
            cid:1000,
            name:'赤峰市',
            aid:10002,
          },
          {
            cid:1001,
            name:'太原市',
            aid:10003,
          },
          {
            cid:1001,
            name:'大同市',
            aid:10004,
          },
          {
            cid:1002,
            name:'银川市',
            aid:10005,
          },
          {
            cid:1002,
            name:'乌鲁木齐市',
            aid:10006,
          },
          {
            cid:1003,
            name:'成都市',
            aid:10007,
          },
          {
            cid:1003,
            name:'汶川市',
            aid:10008,
          },
          {
            cid:1004,
            name:'海淀区',
            aid:10009,
          },
          {
            cid:1004,
            name:'朝阳区',
            aid:10010,
          },
        ],
        cityListAll:[],
        areaList:[
          {
            aid:10000,
            name:'东河区'
          },
          {
            aid:10001,
            name:'清水河县'
          },
          {
            aid:10002,
            name:'赤峰区'
          },
          {
            aid:10003,
            name:'太原区'
          },
          {
            aid:10004,
            name:'大同区'
          },
          {
            aid:10005,
            name:'银川区'
          },
          {
            aid:10006,
            name:'乌鲁木齐区'
          },
          {
            aid:10007,
            name:'成都县'
          },
          {
            aid:10008,
            name:'汶川大地震'
          },
          {
            aid:10009,
            name:'西三旗'
          },
          {
            aid:10010,
            name:'十里河'
          },
        ],
        areaListAll:[],
        provinceStatus:'请选择省',
        cityStatus:'请选择市',
        areaStatus:'请选择区、县',
      }
    },
    watch:{
      provinceStatus(v){
        this.areaListAll = []
        this.cityListAll = this.cityList.filter(item => item.cid == v.id)
      },
      cityStatus(v){
        this.areaListAll = this.areaList.filter(item => item.aid == v.aid)
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
  select{
    width: 30%;
  }
</style>
