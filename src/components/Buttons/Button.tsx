import './button.css';

interface Props {
    url: string;
    label: string;
}

const Button = ({ url, label }: Props) => {
    return (
        <a
            href={url}
            target='_blank'
            className='link'
        >
            {label}
        </a>
    );
};

export default Button;