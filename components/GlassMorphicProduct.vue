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
<style lang="scss" scoped>

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
    
    .container > {
        .card {
        position: relative;
        @include md {
            width: 180px;
            height: 320px;
            margin: 20px 40px;
        }
        width:130px;
        height:200px;
        margin: 5px 15px;
        display: inline-block;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(20 px);
        border-radius: 15px;
        .img-box{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 20px;
            transition: 0.5s ease-in-out;
            img {
                max-width: 100%;
                margin: 0 0 20px;
                transition: 0.5s ease-in-out;
            }
            h2 {
                color: #fff;
                font-weight: 800;
                font-size: 12px;
                @include md{
                    font-size:18px;
                }
                text-align: center;
            }
        }
        .content {
            position: absolute;
            bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: 0.5s ease-in-out;
            opacity: 0;
            visibility: hidden;

            .color {
            display: flex;
            justify-content: center;
            align-items: center;
            @include md {
                padding: 8px 20px;
            }
            padding-left: 10px;

            

        

            h3{
            color: #fff;
            font-weight: 300;
            font-size: 10px;
            @include md {
                font-weight: 400;
                font-size: 14px;
                margin-right:10px;
            }
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-right: 2px;
            }
            span{
                width: 15px;
                height: 15px;
                background: #fff;
                border-radius: 50%;
                @include md {
                    width: 20px;
                    height: 20px;
                }
                margin: 0 5px;
                border: 2px solid #fff;
                box-sizing: border-box;
                cursor: pointer;
                &:nth-child(2){
                    background: #111;
                }
                &:nth-child(3){
                    
                    background: #a4b2bf;
                }
            }
            }
            a{
                position: relative;
                top: 10px;
                display: inline-block;
                background: #fff;
                border-radius: 40px;
                font-weight: 500;
                padding: 1px;
                font-size: 10px;
                @include md{
                    font-weight: 600;
                    padding: 8px;
                    font-size: 12px;
                }
                letter-spacing: 1px;
                color: #111;
                text-decoration: none;
                text-transform: uppercase;
            }

        }
        &:hover{
            .img-box{
                transform: translateY(-40px);
                img {
                    transform: translate(-20px, -40px) rotate(-25deg) scale(1.4);
                }
                h2 {
                    transform: translateY(-60px);
                }
                
            }
            .content {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(-50px);
                }
        }
    }
}
    
    


</style>