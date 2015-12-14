var demo = (function(){

    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null;

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

            var loader = new THREE.JSONLoader(),
                mesh;

            loader.load("Scripts/gooseFull.js", function(geometry) {
                var gooseMaterial = new THREE.MeshLambertMaterial({
                    map: THREE.ImageUtils.loadTexture("Scripts/goose.jpg")
                });

                mesh = new THREE.Mesh(geometry, gooseMaterial);
                mesh.scale.set(100, 100, 100);
                mesh.position.y = -40;

                mesh.rotation.y = 45 * (Math.PI / 180);
                scene.add(mesh);
            });
            
            requestAnimationFrame(render);
        };

        function render() {
                renderer.render(scene, camera); 
                requestAnimationFrame(render);
        };
       
        window.onload = initScene;

})();
