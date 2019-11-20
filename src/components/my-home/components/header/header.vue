<template>
  <Row class="header">
    <div class="logo">
      <div class="img">
        <img :src="logo" alt="" />
      </div>
    </div>
    <div class="tags-nav">
      <router-link :to="{ path: '/overview' }">概览</router-link>
      <router-link :to="{ path: `/chart` }">图表</router-link>
      <router-link :to="{ path: `/graphs` }">仪表盘</router-link>
      <router-link :to="{ path: `/analyzer` }">分析</router-link>
      <router-link :to="{ path: `/alerts` }">警报</router-link>
      <router-link :to="{ path: `/loadbalancing` }">负载均衡</router-link>
    </div>

    <div class="profile">
      <Dropdown
        style="margin-left: 20px"
        placement="bottom-end"
        trigger="click"
      >
        <a href="javascript:void(0)" class="trigger">
          user
          <Badge></Badge>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="sysControl">
            <router-link :to="{ path: `/system` }" style="color: #333"
              >系统管理 <Badge></Badge
            ></router-link>
          </DropdownItem>
          <DropdownItem name="logout">退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </Row>
</template>
<script>
import logo from "@/assets/images/logo.png";
export default {
  name: "my-header",
  data() {
    return {
      logo: logo
    };
  }
};
</script>
<style scoped lang="less">
.router-link-exact-active,
.router-link-active {
  color: #00c5a2 !important;
}
.header {
  /* background-image: url('../../../../assets/images/logo.png');*/
  background-color: #000;
  display: flex;
  height: 94px;
  min-width: 996px;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    .img {
      height: 55px;
      width: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 30px;
      color: #ffffff;
    }
    width: 239px;
    height: 69px;
    margin-left: 20px;
  }
  .tags-nav {
    flex: 1;
    margin-left: 50px;
    a {
      font-size: 24px;
      color: #fff;
      margin: 0 20px;
    }
  }
  .profile {
    //background: #e5e5e5;
    &:hover {
      background: #333;
    }
    height: 100%;
    display: flex;
    align-items: center;
    /deep/.ivu-dropdown {
      height: 100%;
    }
    /deep/.ivu-dropdown-rel {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
      padding: 0 30px;
      a {
        color: #fff;
      }
    }
  }
}
.ivu-select-dropdown {
  background-color: #333333;
}
</style>
