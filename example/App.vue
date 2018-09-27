<style lang="scss" scoped>
.navbar {
    height: 60px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: white;
    line-height: 60px;
    padding: 0 30px;
    .title {
        font-size: 26px;
        margin: 0;
        color: #4f4f4f;
        text-decoration: none;
        font-family: "Tekton Pro", "SignPainter", "Pointfree", Helvetica Neue,
            helvetica, arial, verdana, sans-serif;
    }
}
.main {
    overflow: auto;
    position: absolute;
    bottom: 0;
    top: 60px;
    right: 0;
    left: 0;
    padding: 0 300px 0 100px;
    display: flex;
    background-color: #eee;
}
.content {
    flex: 1;
    margin: 20px 100px;
    section {
        box-sizing: border-box;
        background-color: white;
        width: 100%;
        min-height: 300px;
        margin: 20px auto;
        padding: 30px;
    }
}
.sidebar {
    width: 300px;
    min-height: 100px;
    background-color: #f0f0f0;
    top: 60px;
    right: 50px;
    bottom: 0;
    position: fixed;
    hr {
        margin-top: 80px;
        height: 2px;
        background-color: #dfdfdf;
        border: none;
        display: block;
    }
    > span {
        display: block;
        width: 100px;
        height: 8px;
        margin-bottom: 40px;
        background-color: #dfdfdf;
    }
    .tags {
        span {
            background-color: #dfdfdf;
            height: 30px;
            float: left;
            width: 100px;
            margin: 4px 10px;
            &:nth-child(4n + 1) {
                width: 70px;
                margin-left: 0;
            }
            &:nth-child(4n + 2) {
                width: 40px;
            }
            &:nth-child(4n + 3) {
                width: 120px;
            }
            &:nth-child(4n + 4) {
                width: 80px;
                margin-left: 0;
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    .main {
        padding: 0 300px 0 0px;
    }
    .content {
        margin: 20px 100px 0 50px;
    }
    .sidebar {
        right: 40px;
    }
}
</style>

<template>
    <div class="container">
        <div class="navbar">
            <a href="" class="title">vue-awesome-skeleton</a>
        </div>
        <div class="main">
            <div class="content">
                <section v-for="item in sections" :key="item">
                    <!-- vue-awesome-skeleton use -->
                    <skeleton>
                        <skeleton-heading />
                        <skeleton-text :lines="lines" />
                    </skeleton>
                </section>
            </div>
            <div class="sidebar">
                <hr>
                <span></span>
                <div class="tags">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            sections: 4,
            lines: 3
        }
    }
}
</script>
