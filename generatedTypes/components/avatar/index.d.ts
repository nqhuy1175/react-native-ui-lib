import React, { PureComponent } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, ImagePropsBase, ImageStyle, TextStyle } from 'react-native';
import { ImageProps } from '../image';
export declare const STATUS_MODES: {
    ONLINE: string;
    OFFLINE: string;
    AWAY: string;
    NONE: string;
};
export declare const BADGE_POSITIONS: {
    TOP_RIGHT: string;
    TOP_LEFT: string;
    BOTTOM_RIGHT: string;
    BOTTOM_LEFT: string;
};
declare type StatusModes = keyof typeof STATUS_MODES;
declare type BadgePosition = keyof typeof BADGE_POSITIONS;
export declare type AvatarPropTypes = {
    /**
     * Adds fade in animation when Avatar image loads
     */
    animate?: boolean;
    /**
     * Background color for Avatar
     */
    backgroundColor?: string;
    /**
     * Badge location on Avatar
     */
    badgePosition?: BadgePosition;
    /**
     * Badge props passed down to Badge component
     */
    badgeProps?: object;
    /**
     * Additional spacing styles for the container
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * The image source (external or assets)
     */
    source?: ImageSourcePropType;
    /**
     * Image props object
     */
    imageProps?: ImageProps;
    /**
     * Image style object used to pass additional style props
     * by components which render image
     */
    imageStyle?: ImageStyle;
    /**
     * Listener-callback for when an image's (uri) loading
     * starts (equiv. to Image.onLoadStart()).
     */
    onImageLoadStart?: ImagePropsBase["onLoadStart"];
    /**
     * Listener-callback for when an image's (uri) loading
     * either succeeds or fails (equiv. to Image.onLoadEnd()).
     */
    onImageLoadEnd?: ImagePropsBase["onLoadEnd"];
    /**
     * Listener-callback for when an image's (uri) loading
     * fails (equiv. to Image.onError()).
     */
    onImageLoadError?: ImagePropsBase["onError"];
    /**
     * Label that can represent initials
     */
    label?: string;
    /**
     * The label color
     */
    labelColor?: string;
    /**
     * ribbon label to display on the avatar
     */
    ribbonLabel?: string;
    /**
     * ribbon custom style
     */
    ribbonStyle?: StyleProp<ViewStyle>;
    /**
     * ribbon label custom style
     */
    ribbonLabelStyle?: StyleProp<TextStyle>;
    /**
     * Custom ribbon
     */
    customRibbon?: JSX.Element;
    /**
     * Determine if to show online badge
     */
    isOnline?: boolean;
    /**
     * AWAY, ONLINE, OFFLINE or NONE mode (if set to a value other then 'NONE' will override isOnline prop)
     */
    status?: StatusModes;
    /**
     * Custom size for the Avatar
     */
    size?: number;
    /**
     * Press handler
     */
    onPress?: (props: any) => void;
    /**
     * Used as a testing identifier
     */
    testID?: string;
};
/**
 * @description: Avatar component for displaying user profile images
 * @extends: TouchableOpacity
 * @extendsnotes: (when passing onPress)
 * @extendslink: docs/TouchableOpacity
 * @image: https://user-images.githubusercontent.com/33805983/34480603-197d7f64-efb6-11e7-9feb-db8ba756f055.png
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/AvatarsScreen.js
 */
declare class Avatar extends PureComponent<AvatarPropTypes> {
    styles: {
        initials: StyleProp<ViewStyle>;
        initialsContainerWithInset: StyleProp<ViewStyle>;
        ribbon: StyleProp<ViewStyle>;
    };
    constructor(props: AvatarPropTypes);
    static displayName: string;
    static modes: {
        ONLINE: string;
        OFFLINE: string;
        AWAY: string;
        NONE: string;
    };
    static badgePosition: {
        TOP_RIGHT: string;
        TOP_LEFT: string;
        BOTTOM_RIGHT: string;
        BOTTOM_LEFT: string;
    };
    static defaultProps: {
        animate: boolean;
        backgroundColor: string;
        size: number;
        labelColor: string;
        badgePosition: string;
    };
    getContainerStyle(): StyleProp<ViewStyle>;
    getInitialsContainer(): StyleProp<ViewStyle>;
    getRibbonStyle(): StyleProp<ViewStyle>;
    getStatusBadgeColor(status: StatusModes | undefined): string | null;
    getBadgeBorderWidth: () => any;
    getBadgeColor(): any;
    getBadgeSize: () => any;
    getBadgePosition(): {
        [x: string]: string | number;
        position: string;
    };
    renderBadge(): JSX.Element | undefined;
    renderRibbon(): JSX.Element | undefined;
    renderImage(): JSX.Element | undefined;
    render(): JSX.Element;
}
export { Avatar };
declare const _default: React.ComponentClass<AvatarPropTypes, any>;
export default _default;
