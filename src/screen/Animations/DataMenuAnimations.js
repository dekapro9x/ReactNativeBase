import React from "react";
//Animations Core:
import { TimingAnimatedComponent } from "./components/core/timing";
import { SpringAnimatedComponent } from "./components/core/spring";
//Lib:
import {ExampleAnimated} from "./components/lib/animatable"
export const MenuAnimations = [
    {
        id: 1,
        keyName: 'Animated (core)',
        data: [
            {
                name: 'Animated.timing()',
                component: <TimingAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.decay()',
                component: <SpringAnimatedComponent />,
                description: ""
            },
            {
                name: 'Animated.spring()',
                component: null,
                description: ""
            },
            {
                name: 'Animated Extend',
                component: null,
                description: ""
            },
        ],
    },
    {
        id: 2,
        keyName: 'react-native-animatable (lib)',
        data: [
            {
                name: 'Animatable Example',
                component: <ExampleAnimated/>,
                description: ""
            },
        ],
    },
];