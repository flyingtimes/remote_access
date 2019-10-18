<template>
  <div class="sshOptions">
    <van-row>
      <van-cell-group>
        <van-field v-model="remoteUrl" required label="远端url" placeholder="server:port" />
        <van-field v-model="localPort" label="本地端口" placeholder="localport" required />
      </van-cell-group>
    </van-row>
    <van-row>
      <van-button type="primary" size="normal">普通按钮</van-button>
    </van-row>
    <h3>ssh -fnL 127.0.0.1:{{ localPORT }}:{{remoteURL}}</h3>
    <van-row>
      <van-col span="8">
        <TreeChart :json="treeDataLocal" />
      </van-col>
      <van-col span="4"></van-col>
      <van-col span="8">
        <TreeChart :json="treeDataRemote" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import TreeChart from "vue-tree-chart";
export default {
  name: "sshOptions",
  components: {
    TreeChart
  },
  computed: {
    remoteUrl: {
      get() {
        return this.$store.state.remoteUrl;
      },
      set(val) {
        this.$store.commit("changeRemoteUrl", val);
      }
    },
  },
  data: function() {
    return {
      msg: "",
      localPort: "",
      treeDataLocal: {
        name: "本地服务器",
        children: [
          {
            name: this.$store.state.localPort
          }
        ]
      },
      treeDataRemote: {
        name: "远端服务器",
        children: [
          {
            name: this.$store.state.remoteUrl
          }
        ]
      }
    };
  }
};
</script>

