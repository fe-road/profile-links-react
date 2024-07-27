import './social-media-link.css';

interface Props {
    url: string;
    icon: string;
}

const SocialMediaLink = ({ url, icon }: Props) => {
    return (
        <a
            href={url}
            target='_blank'
            className='social-link'
        >
            <span className={`fa-brands ${icon}`}></span>
        </a>
    );
};

export default SocialMediaLink;