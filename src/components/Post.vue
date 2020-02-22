<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
            @titanabrian
            </p>
            <!-- <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </a> -->
        </header>
        <div class="card-content">
            <div class="content justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Up</a>
            <a href="#" class="card-footer-item">Down</a>
            <a href="/post/usds-asd-xa" class="card-footer-item" v-if="this.allow_reply">Reply</a>
        </footer>
    </div>
</template>
<script>
    export default{
        name:"post",
        props:[
            "allow_reply"
        ]
    }
</script>

<style scoped>
    .justify{
        text-align: justify !important;
    }

    .card:hover{
        background-color:#f5f4f2 !important;
    }
</style>