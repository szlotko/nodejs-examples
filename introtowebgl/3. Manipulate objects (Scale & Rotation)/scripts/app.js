var demo = (function () {

    "use strict";

    var scene = new THREE.Scene(),
        light = new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls = null;

    function initScene() {

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene.add(light);

        camera = new THREE.PerspectiveCamera(
                35,
                window.innerWidth / window.innerHeight,
                1,
                1000
            );

        camera.position.set(0, 0, 100);

        scene.add(camera);

        box = new THREE.Mesh(
          new THREE.CubeGeometry(
            20,
            20,
            20),
          new THREE.MeshBasicMaterial({ color: 0xFF0000 }));

        scene.add(box);

        requestAnimationFrame(render);

    };

    function render() {
        renderer.render(scene, camera);

        //Create an animation that rotates and resizes the cube
        rotateAndScale();
        requestAnimationFrame(render);
    };

    var degrees = 0;
    var scale = 1;
    var scaleStep = 0.005;
    function rotateAndScale() {
        degrees = degrees >= 360 ? 1 : ++degrees;
        if (scale <= 1) {
            scaleStep = Math.abs(scaleStep);
        }
        if (scale >= 2) {
            scaleStep = -1 * Math.abs(scaleStep);
        }
        scale += scaleStep;
        box.rotation.y = degrees * (Math.PI / 180);
        box.scale.set(scale, scale, scale);
    }

    window.onload = initScene;

})();
