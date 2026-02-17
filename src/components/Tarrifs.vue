<template>
    <div>
        <h3>Тарифы</h3>
        <div class="tarrifs">
            <div>
                <h4>Бесплатно</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <span><a href="">Больше</a><i class="fas fa-arrow-right"></i></span>
            </div>
            <div>
                <h4>Плюс+</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <button>Присоединиться</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    h3 {
        margin: 70px 0;
        font-weight: 400;
        font-size: 3em;
    }

    .tarrifs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 150px;

        >div {

            @media (min-width: 1100px) {
                width: 35%;
            }

            @media (max-width: 1100px) and (min-width: 750px) {
                width: 39%;
            }

            @media (max-width: 750px) {
                &:first-of-type {
                    margin-bottom: 20px;
                }
            }

            background: #232532;
            color: #A8A7A8;
            padding: 50px 5%;

            &:last-of-type {
                background: #323443;
                color: #ADACAE;
            }

            h4 {
                color: #fff;
                text-align: center;
                font-size: 2em;
                margin-bottom: 30px;
            }

            ul {
                margin: 20px 30px 60px 30px;
            }

            span {
                a {
                     color: #0070C9;
                }

                i {
                    margin-left: 7px;
                    font-size: 1.2em;
                }
            }

            button {
                background: #0070C9;
                border: 0;
                border-radius: 10px;
                color: #fff;
                padding: 5px 10px;
                cursor: pointer;

                &:hover {
                    background: #04477e;
                }
            }
        }
    }
</style>