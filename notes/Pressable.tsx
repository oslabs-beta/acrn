//! Definitions for <Pressable>
//
//* node_modules/@types/react/index.d.ts
interface ExoticComponent<P = {}> {
        /**
         * **NOTE**: Exotic components are not callable.
         */
        (props: P): (ReactElement|null);
        readonly $$typeof: symbol;
    }
//* node_modules/@types/react-native/index.d.ts
export const Pressable: React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<View>>;


//! Type Definition

//* node_modules/@types/react/index.d.ts
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }

    
//! Implementation

//* node_modules/@types/react/index.d.ts
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }
