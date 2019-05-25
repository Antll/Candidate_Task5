<template>
    <div>
        <h1>Blender?</h1>

        <p>Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation.</p>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/Z4C82eyhwgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <img class="wide"src="https://i0.wp.com/www.blendernation.com/wp-content/uploads/2019/05/Composition_Wide.jpg?ssl=1">
        <img class="wide-higher" src="https://i2.wp.com/www.blendernation.com/wp-content/uploads/2019/05/123123.jpg?ssl=1">
    </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style>
h1, p{
    color: #FFFFFF;
    text-align: center;
    margin: 50px auto;
    width: 50%;
}

iframe, img {
    display: block;
    margin: 0 auto;
}

img {
    width: 853px;
    height: 480px;
}

.wide {
    margin-top: 100px;
    height: 285px;
}

.wide-higher {
    height: 380px;
}
</style>
