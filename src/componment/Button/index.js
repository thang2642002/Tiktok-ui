import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary,
    ouline,
    small,
    large,
    text,
    rounded,
    disabled,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        ouline,
        small,
        large,
        text,
        rounded,
        disabled,
        leftIcon,
        rightIcon,
    });

    const _props = {
        onClick,
        ...passProps,
    };

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    // Delete envnet listener when btn is disabled

    // if (disabled) {
    //     delete _props.onClick;
    // }

    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    return (
        <Comp className={classes} {..._props}>
            <span className={cx('icon')}>{leftIcon}</span>
            <span className={cx('title')}>{children}</span>
            <span className={cx('icon')}>{rightIcon}</span>
        </Comp>
    );
}

export default Button;
