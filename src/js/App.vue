<template>
    <div class="wrapper">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

    $additionColor: #25AB75;
    $mainColor: #000000;
    $textColor: #fff;

    ::selection {
        background: $additionColor;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: $mainColor;
        color: $textColor;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 1em;
    }

    .wrapper {
        overflow: hidden;
    }

    a {
        color: #ABABAB;
        text-decoration: none;

        &:hover {
            color: #c7c7c7;
        }
    }

    .container {

        @media (min-width: 1500px) {
            width: 1300px;
            margin: 0 auto;
        }
        @media (max-width: 1500px) and (min-width: 900px) {
            width: 80%;
            margin: 0 10%;
        }
        @media (max-width: 900px) {
            width: 90%;
            margin: 0 5%;
        }
    }
</style>