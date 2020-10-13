<template>
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        :key="item.path"
        v-for="(item,index) in levelList"
      >
        <span
          class="no-redirect"
          v-if="item.redirect==='noRedirect'||index==levelList.length-1"
        >{{ item.meta.title }}</span>
        <a
          @click.prevent="handleLink(item)"
          v-else
        >{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      const matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      )
      // console.log(matched)
      if (matched.length > 1) {
        // if (!this.isDashboard(first)) {
        //   matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
        // }
        this.levelList = matched.filter(
          (item) =>
            item.meta && item.meta.title && item.meta.breadcrumb !== false
        )
      } else if (matched.length === 1) {
        const oneMatched = matched[0]
        if (oneMatched.meta && oneMatched.meta.totalTitle) {
          const levelList = []
          const array = oneMatched.path.split('/')
          array.shift()
          array.forEach((item, index) => {
            levelList.push({
              path: this.getFullPath(array, index),
              meta: {
                title: oneMatched.meta.totalTitle[index]
              }
            })
          })
          this.levelList = levelList
        } else {
          this.levelList = matched.filter(
            (item) =>
              item.meta && item.meta.title && item.meta.breadcrumb !== false
          )
        }
      } else {
        this.levelList = []
      }
    },
    getFullPath(array, index) {
      return array.reduce((total, currentValue, currentIndex) => {
        if (currentIndex > index) return total
        return `${total}/${currentValue}`
      }, '')
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return (
        name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
      )
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
