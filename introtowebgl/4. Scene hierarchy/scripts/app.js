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
          new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true, transparency: true }));

        scene.add(box);

        var childBox = new THREE.Mesh(
            new THREE.CubeGeometry(10, 10, 10),
            new THREE.MeshBasicMaterial({ color: 0x00FF00 })
        );

        box.add(childBox);

        requestAnimationFrame(render);

    };

    function render() {
        renderer.render(scene, camera);

        moveParentCude();
        requestAnimationFrame(render);
    };

    var step = 0.2;
    function moveParentCude() {

        if (box.position.x <= -80) {
            step = Math.abs(step);
        }
        if (box.position.x >= 80) {
            step = -1 * Math.abs(step);
        }

        box.position.x += step;
    }

    window.onload = initScene;

})();
