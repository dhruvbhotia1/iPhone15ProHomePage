import React, {Suspense} from 'react';
import {View, PerspectiveCamera, Html} from '@react-three/drei';
import Lights from './Lights.jsx'
import IPhone from './IPhone.jsx'
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import Loader from "./Loader.jsx";


const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {



    return (
        <View className={` w-full h-full absolute  ${index === 2 ? 'right-[-100%]' : ''} `}
              index={index}
              id={gsapType}

        >

            <ambientLight intensity={0.2}/>

            <PerspectiveCamera makeDefault position={[0,0,4]}/>

            <Lights/>

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={.4}
                target={new THREE.Vector3(0,0,0)}
                onEnd={()=> (setRotationState(controlRef.current.getAzimuthalAngle()))}

            />



            <group ref={groupRef} name={`${index===1 ? 'small' : 'large'}`} position={[0,0,0]}>
                <Suspense fallback={<Loader/>}>


                    <IPhone scale={index===1 ? [15,15,15] : [17,17,17]} item={item} size={size}/>

                </Suspense>
            </group>


        </View>
    );
};

export default ModelView;
