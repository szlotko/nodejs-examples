var demo = (function(){

    "use strict";

    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null,
        goose;

        function initScene(){

            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);

            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );

            camera.position.set( 0, 0, 500 );

            scene.add(camera);

            box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({color: 0xFF0000}));

            //scene.add(box);

            var loader = new THREE.JSONLoader();

            loader.load("models/goose/gooseFull.js", function(geometry) {
                var gooseMaterial = new THREE.MeshLambertMaterial({
                    map: THREE.ImageUtils.loadTexture("models/goose/goose.jpg")
                });

                goose = new THREE.Mesh(geometry, gooseMaterial);
                goose.scale.set(50, 50, 50);
                goose.position.x = -80;
                goose.position.y = -80;
                goose.rotation.y = 45 * (Math.PI / 180);
                scene.add(goose);
            });

            var loader = new THREE.ObjectLoader();
            loader.load("models/tree.json", function(tree) {

              scene.add(tree);
            });


            requestAnimationFrame(render);
        };

        var degrees = 0;
        function rotateGoose() {
            if(!goose)return;
            degrees = degrees >= 360 ? 1 : ++degrees;
            goose.rotation.y = degrees * (Math.PI / 180);
        }

        function render() {
                renderer.render(scene, camera);
                rotateGoose();
                requestAnimationFrame(render);
        };

        window.onload = initScene;

})();
