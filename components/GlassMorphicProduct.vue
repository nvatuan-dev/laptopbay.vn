<template>
    
        <div class="container">
            <div class="card">
                <div class="img-box">
                    <img :src="laptop.src">
                    <h2>{{laptop.title}}</h2>
                </div>
                <div class="content">
                    <div class="color">
                        <h3>Color</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">Discorver</a>
                </div>
                
            </div>
        </div>
        
    
</template>
<script>
export default {
    props: ['laptop']
}
</script>
<style>
    /* section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        background-color: #232323;
        overflow: hidden;
        padding: 100px 20px;
        box-sizing: border-box;
    } */
    
    /* .container {
        position: relative;
        display: border-box;
        z-index: 10;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    } */
    
    .container .card {
        position: relative;
        width: 180px;
        height: 320px;
        margin: 20px 40px;
        display: inline-block;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(20 px);
        border-radius: 15px;
    }
    
    .container .card .img-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        transition: 0.5s ease-in-out;
    }
    
    .container .card:hover .img-box {
        transform: translateY(-40px);
    }
    
    .container .card .img-box img {
        max-width: 100%;
        margin: 0 0 20px;
        transition: 0.5s ease-in-out;
    }
    
    .container .card:hover .img-box img {
        transform: translate(-20px, -40px) rotate(-25deg) scale(1.4);
    }
    
    .container .card .img-box h2 {
        color: #fff;
        font-weight: 800;
        font-size: 18px;
        text-align: center;
    }
    .container .card:hover .img-box h2
    {
        transform: translateY(-60px);
    }
    
    .container .card .content {
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 0.5s ease-in-out;
        opacity: 0;
        visibility: hidden;
    }
    
    .container .card:hover .content {
        opacity: 1;
        visibility: visible;
        transform: translateY(-50px);
    }
    
    .container .card .content .color {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
    }
    
    .container .card .content .color h3 {
        color: #fff;
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 10px;
    }
    
    .container .card .content .color span {
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        margin: 0 5px;
        border: 2px solid #fff;
        box-sizing: border-box;
        cursor: pointer;
    }

    .container .card .content .color span:nth-child(2){
        background: #111;
    }

    .container .card .content .color span:nth-child(3){
        background: #a4b2bf;
    }
    .container .card .content a {
        position: relative;
        top: 10px;
        display: inline-block;
        padding: 8px;
        background: #fff;
        border-radius: 40px;
        font-weight: 600;
        letter-spacing: 1px;
        color: #111;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>